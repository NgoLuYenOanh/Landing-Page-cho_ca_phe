"use client";
import Post_news_1 from "../../../../../public/img/post_news (1).png";
import Post_news_2 from "../../../../../public/img/post_news (2).png";
import Post_news_3 from "../../../../../public/img/post_news (3).png";
import Post_news_5 from "../../../../../public/img/post_news (5).png";
import Post_news_6 from "../../../../../public/img/post_news (6).png";
import Post_left from "./components/index";
import Pagination from "@/components/Pagination/Pagination";
import { useRef, useState } from "react";

export default function Post_news_left() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
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
  const Post = [
    {
      id: 1,
      img: Post_news_1,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 2,
      img: Post_news_2,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 3,
      img: Post_news_3,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 5,
      img: Post_news_5,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 6,
      img: Post_news_6,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 7,
      img: Post_news_3,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 8,
      img: Post_news_5,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 9,
      img: Post_news_6,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 10,
      img: Post_news_1,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 11,
      img: Post_news_2,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
  ];
  const currentPosts = Post.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div
      ref={NewsListRef}
      className="flex flex-col w-9/10 max-lg:w-full max-lg:mb-5"
    >
      {/* <Post_left /> */}
      <Post_left post={currentPosts} />
      <Pagination
        totalItems={Post.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
