"use client";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Category_1 from "../../../public/img/Box_danhmuc (1).png";
import Category_2 from "../../../public/img/Box_danhmuc (2).png";
import Category_3 from "../../../public/img/Box_danhmuc (3).png";
import Category_4 from "../../../public/img/Box_danhmuc (4).png";
import Category_5 from "../../../public/img/Box_danhmuc (5).png";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

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
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_3.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />

                    <p className="text-sm">Cà phê Bột</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_4.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />

                    <p className="text-sm">Cà phê rang xay</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_2.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />

                    <p className="text-sm">Cà phê rang xay</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_5.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />

                    <p className="text-sm">Cà phê rang xay</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_1.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê sữa</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_2.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />

                    <p className="text-sm">Máy cà phê</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_1.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê rang củi</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_3.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê Bột</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_4.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê rang xay</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_2.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê rang xay</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_5.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê rang xay</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_1.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê sữa</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_2.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />

                    <p className="text-sm">Máy cà phê</p>
                  </a>
                </CarouselItem>
                <CarouselItem className="basis-1/7 max-sm:basis-1/3">
                  <a href="#" className="flex flex-col items-center mx-[1%]">
                    <Image
                      src={Category_1.src}
                      alt=""
                      className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
                      width={76}
                      height={76}
                    />
                    <p className="text-sm">Cà phê rang củi</p>
                  </a>
                </CarouselItem>
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
