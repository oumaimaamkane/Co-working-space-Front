import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userString = sessionStorage.getItem("user");
    if (token && userString) {
      try {
        const parsedUser = JSON.parse(userString);
        setUser({ token, ...parsedUser });
      } catch (error) {
        console.error("Error parsing user from session:", error);
      }
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    console.log("AuthProvider - login called with:", userData);
    setUser(userData);
    sessionStorage.setItem("token", userData.token);
    sessionStorage.setItem("refreshToken", userData.refresh_token);
    sessionStorage.setItem("user", JSON.stringify(userData));

  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");

    toast.success("Logged Out Successfully.");

  };

  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};