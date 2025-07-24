"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Upload1Props {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  onUploadingChange?: (uploading: boolean) => void;
}

const MAX_IMAGES = 6;

const Upload_1: React.FC<Upload1Props> = ({
  images,
  setImages,
  onUploadingChange,
}) => {
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = async (file: File) => {
    if (images.length >= MAX_IMAGES) return;

    const formData = new FormData();
    formData.append("image", file);
    setLoadingIndex(images.length);
    onUploadingChange?.(true);

    try {
      const res = await fetch("/api/save-image", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data?.url) {
        setImages((prev) => [...prev, data.url]);
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setLoadingIndex(null);
      onUploadingChange?.(false);
    }
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>
  ) => {
    const files = "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
    if (!files) return;

    for (let i = 0; i < files.length && images.length < MAX_IMAGES; i++) {
      const file = files[i];
      if (file && file.type.startsWith("image/")) {
        await handleFile(file);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);
    handleChange(e);
  };

  const handleRemove = (idx: number) => {
    const updated = images.filter((_, i) => i !== idx);
    setImages(updated);
  };

  return (
    <div
      className={`border-2 border-dashed rounded p-4 transition-all duration-200 ${
        dragActive ? "border-green-500 bg-green-50" : "border-gray-300"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
      />

      <div
        className="text-center cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <Button className="w-fit font-bold mb-3 mr-4 py-5 cursor-pointer">
          Chọn ảnh
        </Button>
        <p className="text-sm text-gray-500 mt-1">
          Kéo và thả ảnh vào khung hoặc nhấn để chọn ảnh từ máy tính
        </p>

        {images.length >= MAX_IMAGES && (
          <p className="text-red-500 text-sm mt-1">
            Bạn chỉ có thể tải lên tối đa {MAX_IMAGES} ảnh.
          </p>
        )}
        <p className="text-xs text-gray-400">
          Tối đa {MAX_IMAGES} ảnh. Đã chọn: {images.length}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 justify-center mt-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-32 h-32 border relative rounded overflow-hidden group"
          >
            <Image
              src={img}
              alt={`preview-${idx}`}
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
            {loadingIndex === idx && (
              <div className="absolute inset-0 flex items-center justify-center bg-white/60">
                <span className="text-sm text-gray-600">Đang tải...</span>
              </div>
            )}
            <button
              onClick={() => handleRemove(idx)}
              className="absolute cursor-pointer top-1 right-1 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
              title="Xóa ảnh"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upload_1;
