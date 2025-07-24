"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/context/AuthContext";

import axios from "axios";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
interface LoginFormProps {
  onOpenChange: (value: boolean) => void;
  onSwitchToRegister?: () => void;
}

export default function Login_form_new({
  onOpenChange,
  onSwitchToRegister,
}: LoginFormProps) {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);
  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      toast.error("Vui lòng nhập email và mật khẩu.");
      return;
    }
    if (!validateEmail(loginData.email)) {
      toast.error("Email không hợp lệ.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/public/auth/login",
        loginData
      );
      const token = response.data?.data?.accessToken;
      if (token) {
        localStorage.setItem("token", token);

        try {
          const userRes = await axios.get(
            "http://localhost:8081/api/public/auth/account",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("Fetched user info:", userRes.data);
          setUser(userRes.data.data);

          toast.success("Đăng nhập thành công!");
          onOpenChange(false); // đóng dialog
          // Không cần reload nếu context được cập nhật đúng
        } catch {
          toast.error("Không lấy được thông tin người dùng.");
        }
      } else {
        console.error("Token không tồn tại trong response", response.data);
        toast.error("Token không tồn tại trong phản hồi.");
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Lỗi khi đăng nhập: " + error.message);
      } else {
        toast.error("Đã xảy ra lỗi không xác định.");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <span className="font-bold">Thông tin đăng nhập</span>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <div className="relative">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-main absolute top-1/2 -translate-1/2 ml-5"
          />
          <Input
            placeholder="Email"
            type="email"
            value={loginData.email}
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faLock}
            className="text-main absolute top-1/2 -translate-1/2 ml-5"
          />
          <Input
            placeholder="Mật khẩu"
            type="password"
            value={loginData.password}
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          <p>Nếu bạn chưa tạo tài khoản hãy</p>
          <button
            type="button"
            className="text-main underline hover:text-blue-500"
            onClick={() => {
              onOpenChange(false);
              onSwitchToRegister?.();
            }}
          >
            Đăng ký
          </button>
        </div>

        <Button
          type="submit"
          className="w-full bg-main text-[#fff] h-10 font-bold text-xl mt-2 py-6.5"
          disabled={loading}
        >
          {loading ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
      </form>
    </>
  );
}
