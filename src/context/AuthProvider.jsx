import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("token");
  };

  // Derive isLoggedIn from whether user is not null
  const isLoggedIn = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
