"use client";
import Autoplay from "embla-carousel-autoplay";
import Category_1 from "../../../public/img/Box_danhmuc (1).png";
import Category_2 from "../../../public/img/Box_danhmuc (2).png";
import Category_3 from "../../../public/img/Box_danhmuc (3).png";
import Category_4 from "../../../public/img/Box_danhmuc (4).png";
import Category_5 from "../../../public/img/Box_danhmuc (5).png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Category_list from "./components/Category_list";

export default function Category() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  });
  const Category = [
    {
      id: 1,
      img: Category_3,
      paragraph: "Cà phê bột",
    },
    {
      id: 2,
      img: Category_4,
      paragraph: "Cà phê rang xay",
    },
    {
      id: 3,
      img: Category_2,
      paragraph: "Cà phê rang xay",
    },
    {
      id: 4,
      img: Category_5,
      paragraph: "Cà phê rang xay",
    },
    {
      id: 5,
      img: Category_1,
      paragraph: "Cà phê sữa",
    },
    {
      id: 6,
      img: Category_2,
      paragraph: "Máy cà phê",
    },
    {
      id: 7,
      img: Category_1,
      paragraph: "Cà phê rang củi",
    },
  ];
  return (
    <>
      <div className="h-auto flex justify-center items-center py-[28px]">
        <div className="h-auto w-8/10 bg-[#fff] rounded-[20px]">
          <div className="h-auto flex justify-between">
            <h1 className="text-[#dcdcdc] px-6 py-3 font-bold text-2xl">
              DANH MỤC
            </h1>
            <a className="text-main text-[26px] text-2xl px-6 py-3" href="#">
              Xem tất cả
            </a>
          </div>
          <div className=" text-center font-medium pb-3">
            <Carousel
              setApi={setApi}
              opts={{ loop: true }}
              plugins={[Autoplay({ delay: 2000 })]}
            >
              <CarouselContent>
                <Category_list post={Category} />
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
