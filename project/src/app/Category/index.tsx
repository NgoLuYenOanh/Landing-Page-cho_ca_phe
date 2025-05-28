"use client";
import Autoplay from "embla-carousel-autoplay";
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
        <div className="h-auto w-9/10 bg-[#fff] rounded-[20px]">
          <div className="h-auto flex justify-between">
            <h1 className="text-[#dcdcdc] px-6 py-3 font-bold text-3xl">
              DANH MỤC
            </h1>
            <a className="text-main text-[26px] px-6 py-3" href="#">
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
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (3).png"
                      alt=""
                    />
                    <p>Cà phê Bột</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (4).png"
                      alt=""
                    />
                    <p>Cà phê rang xay</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (2).png"
                      alt=""
                    />
                    <p>Cà phê rang xay</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (5).png"
                      alt=""
                    />
                    <p>Cà phê rang xay</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (1).png"
                      alt=""
                    />
                    <p>Cà phê sữa</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (2).png"
                      alt=""
                    />
                    <p>Máy cà phê</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (1).png"
                      alt=""
                    />
                    <p>Cà phê rang củi</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (3).png"
                      alt=""
                    />
                    <p>Cà phê Bột</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (4).png"
                      alt=""
                    />
                    <p>Cà phê rang xay</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (2).png"
                      alt=""
                    />
                    <p>Cà phê rang xay</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (5).png"
                      alt=""
                    />
                    <p>Cà phê rang xay</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (1).png"
                      alt=""
                    />
                    <p>Cà phê sữa</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (2).png"
                      alt=""
                    />
                    <p>Máy cà phê</p>
                  </div>
                </CarouselItem>
                <CarouselItem className="basis-1/7">
                  <div className="flex flex-col items-center mx-[1%]">
                    <img
                      className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                      src="img/Box_danhmuc (1).png"
                      alt=""
                    />
                    <p>Cà phê rang củi</p>
                  </div>
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
