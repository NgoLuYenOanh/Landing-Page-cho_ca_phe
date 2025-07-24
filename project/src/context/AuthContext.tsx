"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: string;
  fullname: string;
  email: string;
  avatarUrl?: string;
}

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: true,
  logout: () => {},
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:8081/api/public/auth/account", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        const data = res.data?.data || res.data; // Tùy theo response
        setUser({
          id: data.id,
          fullname: data.fullname || data.username || "Người dùng",
          email: data.email,
          avatarUrl: data.avatar || "", // fallback nếu không có
        });
      })
      .catch(() => localStorage.removeItem("token"))
      .finally(() => setLoading(false));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
