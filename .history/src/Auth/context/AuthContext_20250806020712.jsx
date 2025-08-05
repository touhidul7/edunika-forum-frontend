/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔁 Load user from Laravel session on mount
    useEffect(() => {
        fetchUser(); // auto-fetch session user on refresh
    }, []);

    // ✅ Fetch user data using session
    const fetchUser = async () => {
        // get session id
        const userID = sessionStorage.getItem("userId");
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/me/${userID}`, {
                credentials: "include", // send cookies
            });

            if (!res.ok) throw new Error("Failed to fetch user");

            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.error("Fetch user error:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    console.log(user);
    

    // ✅ Login and set session on server
    const login = async (email, password) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
                credentials: "include", // REQUIRED for cookies
            });

            const data = await res.json();

            if (res.ok && data?.user) {
                await fetchUser(); // load full user data
                return { success: true };
            } else {
                return { success: false, message: data?.message || "Invalid credentials" };
            }
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, message: "Login failed" };
        }
    };

    // ✅ Logout (just clear client state)
    const logout = async () => {
        
        sessionStorage.removeItem('userId');

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
