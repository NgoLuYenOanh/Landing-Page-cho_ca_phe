"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Upload_1 from "./Upload_Img/Upload_1";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Login from "@/components/Header/login&register/login/Login";
import Register from "@/components/Header/login&register/register/Register";
import List_header from "@/section/Main_nav/List_header";

export default function PagePushNews() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  type FormDataType = {
    productName: string;
    store: string;
    address: string;
    title: string;
    description: string;
    images: string[];
  };
  const [formData, setFormData] = useState<FormDataType>({
    productName: "",
    store: "",
    address: "",
    title: "",
    description: "",
    images: [],
  });

  const [isUploading, setIsUploading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const isEditMode = Boolean(postId);
  useEffect(() => {
    const checkLogin = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setShowLoginPopup(true);
      } else {
        setIsLoggedIn(true);
      }
    };
    checkLogin();
  }, []);
  useEffect(() => {
    if (!postId) return;
    const fetchPost = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      const post = data.find((p: { id: number }) => p.id === parseInt(postId));
      if (post) {
        setFormData((prev) => ({
          ...prev,
          ...post,
          images: Array.isArray(post.images) ? post.images : [], // ✅ đảm bảo luôn là mảng
        }));
      }
    };
    fetchPost();
  }, [postId]);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;
    try {
      const method = isEditMode ? "PUT" : "POST";
      const url = isEditMode ? `/api/posts?id=${postId}` : "/api/posts";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      toast.success("Đăng thành công!");
      router.push("../../Page_news");
    } catch (err) {
      console.log(err);
      toast.error("Lỗi khi đăng bài đăng");
    }
  };

  const isFormValid =
    formData.productName.trim() &&
    formData.store.trim() &&
    formData.address.trim() &&
    formData.title.trim() &&
    formData.description.trim() &&
    Array.isArray(formData.images) &&
    formData.images.length > 0 &&
    !isUploading;
  if (!isLoggedIn) {
    return (
      <>
        <h2 className="text-center text-red-600 font-bold py-10">
          Vui lòng đăng nhập để có thể đăng tin
        </h2>
        {showLoginPopup && (
          <Login
            open={showLoginPopup}
            onOpenChange={(val) => setShowLoginPopup(val)}
            onSuccess={() => {
              setIsLoggedIn(true);
              setShowLoginPopup(false);
            }}
            onSwitchToRegister={() => {
              setShowLoginPopup(false);
              setShowRegisterPopup(true);
            }}
          />
        )}
        {showRegisterPopup && (
          <Register
            open={showRegisterPopup}
            onOpenChange={(val) => setShowRegisterPopup(val)}
            onRegisterSuccess={() => {
              setShowRegisterPopup(false);
              setShowLoginPopup(true);
            }}
          />
        )}
      </>
    );
  }
  return (
    <div className="bg-bg p-10">
      <div className="bg-white max-w-9/10 mx-auto p-5 rounded-2xl">
        <div className="float-right">
          <List_header />
        </div>
        <Button
          onClick={() => router.push("../../Page_news")}
          className="w-fit font-bold mb-3 mr-4 py-5 cursor-pointer hover:bg-main"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Quay lại
        </Button>
        <div className="flex justify-between gap-3 max-lg:flex-col">
          <div className="w-5/10 max-lg:w-full">
            <h2 className="font-bold text-xl mb-2">Thông tin chung</h2>
            <Input
              name="productName"
              placeholder="Tên sản phẩm"
              value={formData.productName}
              onChange={handleChange}
              className="mb-3 py-6"
              required
            />
            <Input
              name="store"
              placeholder="Tên cửa hàng"
              value={formData.store}
              onChange={handleChange}
              required
              className="mb-3 py-6"
            />
            <Input
              name="address"
              placeholder="Địa chỉ"
              value={formData.address}
              onChange={handleChange}
              required
              className="mb-3 py-6"
            />
            <h2 className="font-bold text-xl mb-2">
              Tiêu đề tin đăng & Mô tả chi tiết
            </h2>
            <Input
              name="title"
              placeholder="Tiêu đề"
              value={formData.title}
              onChange={handleChange}
              required
              className="mb-3 py-6"
            />
            <textarea
              name="description"
              placeholder="Mô tả chi tiết"
              value={formData.description}
              required
              onChange={handleChange}
              className="w-full h-28 p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <div className="">
            <h2 className="font-bold text-xl mb-2">Hình ảnh sản phẩm</h2>
            <Upload_1
              images={formData.images}
              setImages={(updater) => {
                setFormData((prev) => {
                  const newImages =
                    typeof updater === "function"
                      ? updater(prev.images)
                      : updater;
                  return { ...prev, images: newImages };
                });
              }}
              onUploadingChange={setIsUploading}
            />
          </div>
        </div>
        <div className=" max-w-8/10 text-center mx-auto">
          {!isFormValid && (
            <p className="text-red-500 text-sm mt-2">
              Vui lòng điền đầy đủ thông tin trước khi đăng tin{" "}
            </p>
          )}

          <Button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-fit font-bold my-4 py-5 cursor-pointer m ${
              isFormValid
                ? "bg-main text-white"
                : "bg-gray-400 text-white cursor-not-allowed"
            }`}
          >
            {isEditMode ? "Lưu thay đổi" : "Đăng tin"}
          </Button>
        </div>
      </div>
    </div>
  );
}
