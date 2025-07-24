"use client";
import { useState, useEffect } from "react";
import Login from "./login/Login";
import Register from "./register/Register";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

export default function AuthLoginRegister() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    if (openLogin) console.log("✅ Login dialog should be open now!");
  }, [openLogin]);
  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 border-2 px-3 py-2 rounded-2xl">
          <p className="text-sm font-semibold text-gray-800">{user.fullname}</p>
          {user.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white">
              {user.fullname?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
        </div>
        <button
          onClick={logout}
          className="text-sm text-red-500 hover:underline"
        >
          Đăng xuất
        </button>
      </div>
    );
  }

  // Nếu chưa đăng nhập, render các nút mở dialog
  return (
    <div className="flex gap-4 items-center">
      {/* Dialog đăng ký */}
      <Register
        open={openRegister}
        onOpenChange={setOpenRegister}
        onRegisterSuccess={() => {
          setOpenRegister(false);
          setOpenLogin(true);
        }}
        onSwitchToLogin={() => {
          setOpenRegister(false);
          setOpenLogin(true);
        }}
      />
      {/* Dialog đăng nhập */}
      <Login
        open={openLogin}
        onOpenChange={setOpenLogin}
        onSuccess={() => {}}
        onSwitchToRegister={() => {
          setOpenLogin(false);
          setOpenRegister(true);
        }}
      />
    </div>
  );
}
