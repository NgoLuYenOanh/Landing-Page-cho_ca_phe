"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { toast } from "sonner";
import Pagination from "@/components/Pagination/Pagination";
import List_header from "@/section/Main_nav/List_header";
interface Post {
  id: number;
  title: string;
  description: string;
  productName: string;
  store: string;
  address: string;
  images: string[];
}

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const NewsListRef = useRef<HTMLDivElement>(null);
  const smoothScrollTo = (start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + (end - start) * ease);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    const offset = 100; // khoảng cách muốn chừa phía trên

    if (NewsListRef.current) {
      const targetY =
        NewsListRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;

      smoothScrollTo(window.scrollY, targetY, 500); // 500ms mượt
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  };

  const handleEdit = (post: Post) => {
    router.push(`Page_news/Page_push_news?id=${post.id}`);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bạn có chắc muốn xoá?")) return;
    try {
      const res = await fetch(`/api/posts?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast.success("Xoá thành công");
        fetchPosts();
      } else {
        toast.error("Xoá thất bại");
      }
    } catch {
      toast.error("Lỗi kết nối");
    }
  };
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="bg-bg p-10">
      <div className="bg-white max-w-9/10 mx-auto p-5 rounded-2xl">
        <div className="float-right">
          <List_header />
        </div>
        <h1 className="text-2xl font-bold mb-4">Danh sách tin đã đăng</h1>
        <Button
          onClick={() => router.push("Page_news/Page_push_news")}
          className="mb-6 cursor-pointer"
        >
          + Đăng tin mới
        </Button>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 gap-4">
          {currentPosts.map((post) => (
            <div
              key={post.id}
              className="relative border p-4 pb-15 rounded bg-white"
            >
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600 mb-2 line-clamp-2">
                {post.description}
              </p>
              <p>
                <strong>Sản phẩm:</strong> {post.productName}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {post.address}
              </p>

              <div className="grid grid-cols-3 gap-2 mt-2">
                {post.images.slice(0, 6).map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Ảnh ${index}`}
                    width={100}
                    height={100}
                    className="w-full aspect-square object-cover rounded-md border"
                  />
                ))}
              </div>

              <div className="absolute bottom-2 mt-2 space-x-2">
                <Button
                  className="cursor-pointer bg-yellow-500 text-white"
                  onClick={() => handleEdit(post)}
                >
                  Sửa
                </Button>
                <Button
                  className="cursor-pointer bg-red-500 text-white"
                  onClick={() => handleDelete(post.id)}
                >
                  Xoá
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Pagination
        totalItems={posts.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
