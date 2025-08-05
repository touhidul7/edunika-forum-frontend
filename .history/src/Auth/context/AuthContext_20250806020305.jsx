/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// Type definitions
type User = {
  id: number;
  name: string;
  email: string;
  [key: string]: any;
};

type LoginResult = {
  success: boolean;
  message?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<LoginResult>;
  logout: () => Promise<void>;
  isAuthenticated: () => boolean;
  refreshToken: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_SERVER_API;

  // Secure storage functions
  const setSecureStorage = (key: string, value: string) => {
    try {
      sessionStorage.setItem(key, value);
    } catch (e) {
      console.error("Session storage error:", e);
    }
  };

  const getSecureStorage = (key: string) => {
    try {
      return sessionStorage.getItem(key);
    } catch (e) {
      console.error("Session storage error:", e);
      return null;
    }
  };

  // Fetch user data using session
  const fetchUser = useCallback(async () => {
    const userID = getSecureStorage("userId");
    if (!userID) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`${apiUrl}/me/${userID}`, {
        credentials: "include",
        headers: {
          "Accept": "application/json",
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user");

      const data = await res.json();
      setUser(data);
      setError(null);
    } catch (error) {
      console.error("Fetch user error:", error);
      setUser(null);
      setError("Session expired. Please login again.");
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  // Auto-fetch user on mount and set up token refresh
  useEffect(() => {
    fetchUser();

    // Set up token refresh interval (every 5 minutes)
    const interval = setInterval(() => {
      if (user) refreshToken();
    }, 300000);

    return () => clearInterval(interval);
  }, [fetchUser, user]);

  // Refresh access token
  const refreshToken = useCallback(async () => {
    try {
      const res = await fetch(`${apiUrl}/refresh`, {
        method: "POST",
        credentials: "include",
      });

      if (!res.ok) throw new Error("Token refresh failed");

      const data = await res.json();
      setSecureStorage("userId", data.user.id.toString());
      setUser(data.user);
    } catch (error) {
      console.error("Token refresh error:", error);
      logout();
    }
  }, [apiUrl]);

  // Login and set session on server
  const login = async (email: string, password: string): Promise<LoginResult> => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-CSRF-TOKEN": await getCSRFToken(),
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok && data?.user) {
        setSecureStorage("userId", data.user.id.toString());
        await fetchUser();
        return { success: true };
      } else {
        setError(data?.message || "Invalid credentials");
        return { success: false, message: data?.message || "Invalid credentials" };
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
      return { success: false, message: "Login failed" };
    } finally {
      setLoading(false);
    }
  };

  // Logout - clear client state and server session
  const logout = async () => {
    setLoading(true);
    try {
      await fetch(`${apiUrl}/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          "X-CSRF-TOKEN": await getCSRFToken(),
        },
      });
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setUser(null);
      sessionStorage.removeItem("userId");
      setLoading(false);
      navigate("/login");
    }
  };

  // Helper function to get CSRF token from meta tag (Laravel default)
  const getCSRFToken = async () => {
    const token = document.querySelector('meta[name="csrf-token"]')?.getAttribute("content");
    if (!token) {
      try {
        const res = await fetch(`${apiUrl}/csrf-token`, {
          credentials: "include",
        });
        const data = await res.json();
        return data.token;
      } catch (error) {
        console.error("CSRF token fetch error:", error);
        return "";
      }
    }
    return token;
  };

  // Check authentication status
  const isAuthenticated = () => {
    return !!user;
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated,
    refreshToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};