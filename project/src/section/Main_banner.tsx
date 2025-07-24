"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Banner from "../../public/img/Banner.png";
import Banner_1 from "../../public/img/Banner_1.png";
import Banner_2 from "../../public/img/Banner_2.png";
import Banner_3 from "../../public/img/Banner_3.png";
import Banner_4 from "../../public/img/Banner_4.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Data = [
  {
    Market: "Đắk Lắk",
    totalAmount: "113,400",
    Change: "-200",
  },
  {
    Market: "Lâm Đồng",
    totalAmount: "112,800",
    Change: "-200",
  },
  {
    Market: "Gia Lai",
    totalAmount: "113,400",
    Change: "-100",
  },
  {
    Market: "Đắk Nông",
    totalAmount: "113,500",
    Change: "-100",
  },
  {
    Market: "Hồ tiêu",
    totalAmount: "146,000",
    Change: "-1,000",
  },
  {
    Market: "Tỉ giá USD/VND",
    totalAmount: "24,635",
    Change: "0",
  },
];

export default function Main_banner() {
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
  }, [api]);
  return (
    <>
      <div className="max-lg:flex-col max-w-8/10 m-auto flex justify-between text-center gap-5 mb-[30px]">
        <div className="bg-[#fff] h-auto rounded-[20px]">
          <Carousel
            className="bg-[#FFFFFF] rounded-[20px] h-full flex items-center"
            opts={{ loop: true }}
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={Banner.src}
                  alt=""
                  className="m-auto h-[95%] w-9/10 mt-[1%]"
                  width={939}
                  height={472}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Banner_4.src}
                  alt=""
                  className="m-auto h-[95%] w-9/10 mt-[1%]"
                  width={939}
                  height={472}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Banner_1.src}
                  alt=""
                  className="m-auto h-[95%] w-9/10 mt-[1%]"
                  width={939}
                  height={472}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Banner_2.src}
                  alt=""
                  className="m-auto h-[95%] w-9/10 mt-[1%]"
                  width={939}
                  height={472}
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Banner_3.src}
                  alt=""
                  className="m-auto h-[95%] w-9/10 mt-[1%]"
                  width={939}
                  height={472}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute w-10 h-10 left-0 border-none bg-[#1C1C1C66]/40" />
            <CarouselNext className="absolute right-0 w-10 h-10 border-none bg-[#1C1C1C66]/40" />
          </Carousel>
        </div>
        <div className="bg-[#fff] h-auto rounded-[20px]">
          <p className="mx-10 my-5 text-2xl font-medium text-[#4d4d4d]">
            Bảng giá cà phê hôm nay
          </p>
          <div className="flex m-auto justify-evenly text-center w-full">
            <a
              href="#"
              className="text-sm font-semibold px-[10px] py-[15px] rounded-[30px] text-[#fff] bg-main border-none no-underline"
            >
              Xem ngày khác
            </a>
            <button className="my-auto mx-0 color-main cursor-pointer px-[20px] py-[10px] bg-[#fff] border-2 border-solid rounded-[30px]">
              <FontAwesomeIcon
                className="relative mr-[10px] text-main"
                icon={faShareNodes}
              />
              <a
                className="text-sm font-semibold text-main no-underline"
                href="#"
              >
                Chia sẻ
              </a>
            </button>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-left border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#dcdcdc]">
                  Thị trường
                </TableHead>
                <TableHead className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#dcdcdc]">
                  Trung bình
                </TableHead>
                <TableHead className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#dcdcdc]">
                  Thay đổi
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Data.map((Market) => (
                <TableRow key={Market.Market}>
                  <TableCell className="text-left">{Market.Market}</TableCell>
                  <TableCell className="font-medium">
                    {Market.totalAmount}
                  </TableCell>
                  <TableCell className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#f00000]">
                    {Market.Change}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow></TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </>
  );
}
