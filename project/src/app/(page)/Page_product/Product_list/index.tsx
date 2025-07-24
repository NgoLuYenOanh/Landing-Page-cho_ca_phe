"use client";
import Product_1 from "../../../../../public/img/san_pham_noi_bat-box (1).png";
import Product_2 from "../../../../../public/img/san_pham_noi_bat-box (2).png";
import Product_3 from "../../../../../public/img/san_pham_noi_bat-box (3).png";
import Product_4 from "../../../../../public/img/san_pham_noi_bat-box (4).png";
import Product_5 from "../../../../../public/img/san_pham_noi_bat-box (5).png";
import Product_6 from "../../../../../public/img/san_pham_noi_bat-box (6).png";
import Product_7 from "../../../../../public/img/san_pham_noi_bat-box (7).png";
import Product_8 from "../../../../../public/img/san_pham_noi_bat-box (8).png";
import List_header from "@/section/Main_nav/List_header";

import Product_list from "./Product_list";
import Product_header from "./Product_header";
import { useRef, useState } from "react";
import Pagination from "@/components/Pagination/Pagination";

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const productListRef = useRef<HTMLDivElement>(null);
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

    if (productListRef.current) {
      const targetY =
        productListRef.current.getBoundingClientRect().top +
        window.scrollY -
        offset;

      smoothScrollTo(window.scrollY, targetY, 500); // 500ms mượt
    }
  };

  const Product = [
    {
      id: 1,
      sell: "-30%",
      img: Product_8,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: "vnđ 250.000",
      price: "vnđ 3.500.000",
    },
    {
      id: 2,
      img: Product_7,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: "vnđ 2.500.000",
    },
    {
      id: 3,
      sell: "-50%",
      img: Product_2,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: "vnđ 7.000",
      price: "vnđ 14.000",
    },
    {
      id: 4,
      img: Product_6,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 500.000",
    },
    {
      id: 5,
      img: Product_1,
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 1.500.000",
    },
    {
      id: 6,
      update: "New",
      img: Product_5,
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 150.000",
    },
    {
      id: 7,
      sell: "-50%",
      img: Product_4,
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 70.000",
      price: "vnd 140.000",
    },
    {
      id: 8,
      img: Product_3,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 500.000",
    },
    {
      id: 9,
      img: Product_1,
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 1.500.000",
    },
    {
      id: 10,
      update: "New",
      img: Product_5,
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 150.000",
    },
    {
      id: 11,
      sell: "-50%",
      img: Product_4,
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 70.000",
      price: "vnd 140.000",
    },
    {
      id: 12,
      img: Product_3,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 500.000",
    },
    {
      id: 13,
      sell: "-30%",
      img: Product_8,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: "vnđ 250.000",
      price: "vnđ 3.500.000",
    },
    {
      id: 14,
      img: Product_7,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: "vnđ 2.500.000",
    },
    {
      id: 15,
      sell: "-50%",
      img: Product_2,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: "vnđ 7.000",
      price: "vnđ 14.000",
    },
    {
      id: 16,
      img: Product_6,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Highland",
      price_sell: "vnđ 500.000",
    },
  ];

  const currentPosts = Product.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="flex flex-col max-lg:w-full h-auto bg-[#fff] mx-0 mb-[3%] p-[23px] w-7/10">
        <div className="flex-start">
          <List_header />
        </div>
        <Product_header />
        <div
          ref={productListRef}
          className="w-[93.4%] grid lg:grid-cols-4 grid-cols-2 gap-5 m-auto mb-3"
        >
          <Product_list product={currentPosts} />
        </div>

        <div className="flex justify-center">
          <Pagination
            totalItems={Product.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
