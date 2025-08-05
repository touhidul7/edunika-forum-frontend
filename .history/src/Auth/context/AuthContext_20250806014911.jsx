/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // Load user from sessionStorage on refresh
    useEffect(() => {
        const userId = sessionStorage.getItem("userId");
        if (userId) {
            fetchUser(userId);
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUser = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/me/`, {
                credentials: "include", // important if using cookies
            });
            console.log("respose of me",res);
            if (!res.ok) throw new Error("Failed to fetch user");
            const data = await res.json();
            console.log(data);
            
            setUser(data);
        } catch (error) {
            console.error("Fetch user error:", error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };
    console.log(user);
    

    // Login using POST
    const login = async (email, password) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_SERVER_API}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();
            console.log("logindata", data.user);
            // setUser(data.user);

            // If API returns a user id
            if (data?.user?.id) {
                sessionStorage.setItem("userId", data.user.id); // optional
                await fetchUser(); // ✅ no id needed
                return { success: true };
            } else {
                return { success: false, message: data?.message || "Invalid credentials" };
            }
        } catch (error) {
            console.error("Login error:", error);
            return { success: false, message: "Login failed" };
        }
    };


    const logout = () => {
        sessionStorage.removeItem("userId");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
