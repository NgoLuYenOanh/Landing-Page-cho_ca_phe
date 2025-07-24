"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
interface RegisterFormProps {
  onSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

export default function Register_form_new({
  onSuccess,
  onSwitchToLogin,
}: RegisterFormProps) {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    sdt: "",
  });

  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleRegister = async () => {
    if (
      !registerData.username ||
      !registerData.email ||
      !registerData.password ||
      !registerData.confirmPassword ||
      !registerData.sdt
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin đăng ký.");
      return;
    }
    if (!validateEmail(registerData.email)) {
      toast.error("Email không hợp lệ.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:8081/api/public/auth/register",
        registerData
      );
      console.log("Đăng ký thành công: ", response.data);
      toast.success("Đăng ký thành công! Vui lòng đăng nhập");
      onSuccess?.();
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Lỗi khi đăng ký: " + error.message);
      } else {
        toast.error("Đã xảy ra lỗi không xác định.");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}
      >
        <span className="font-bold mb-4 block">Thông tin đăng nhập</span>
        <div className="relative">
          <FontAwesomeIcon
            icon={faUser}
            className="text-main absolute top-1/2 -translate-1/2 ml-5"
          />
          <Input
            placeholder="Họ và tên"
            type="text"
            value={registerData.username}
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            onChange={(e) =>
              setRegisterData({ ...registerData, username: e.target.value })
            }
          />
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-main absolute top-1/2 -translate-1/2 ml-5"
          />
          <Input
            placeholder="Số điện thoại"
            type="tel"
            pattern="[0-9]{10}"
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            required
            maxLength={10}
            value={registerData.sdt}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                sdt: e.target.value,
              })
            }
          />
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-main absolute top-1/2 -translate-1/2 ml-5"
          />
          <Input
            placeholder="Email"
            type="email"
            value={registerData.email}
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            onChange={(e) =>
              setRegisterData({ ...registerData, email: e.target.value })
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
            value={registerData.password}
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
          />
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faLock}
            className="text-main absolute top-1/2 -translate-1/2 ml-5"
          />
          <Input
            placeholder="Nhập lại mật khẩu"
            type="password"
            value={registerData.confirmPassword}
            className="w-full h-8 bg-bg py-6.5 px-2.5 pl-11 rounded-[6.6px] border-none"
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>

        <div className="flex items-center gap-1 flex-wrap">
          <p>Nếu bạn đã có tài khoản hãy</p>
          <button
            type="button"
            className="text-main underline hover:text-blue-500"
            onClick={() => {
              if (onSwitchToLogin) {
                onSwitchToLogin(); // 👈 không gọi trực tiếp nếu chưa truyền vào
              }
            }}
          >
            Đăng nhập
          </button>
        </div>

        <Button
          type="submit"
          className="w-full bg-main text-[#fff] h-10 font-bold text-xl mt-2 py-6.5"
          disabled={loading}
        >
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </Button>
      </form>
    </>
  );
}
