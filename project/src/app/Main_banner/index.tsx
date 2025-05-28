"use client";
import { type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
      <div className="max-w-9/10 m-auto flex justify-between text-center gap-[30px] mb-[30px]">
        <div className="flex bg-[#FFFFFF] h-auto w-[90%] pb-5 rounded-[20px] relative">
          <Carousel
            className="h-full"
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
                <div className="m-auto h-[95%] w-[90%] mt-[1%]">
                  <img src="img/Banner.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="m-auto h-[95%]  w-[90%] mt-[1%]">
                  <img src="img/Banner.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="m-auto h-[95%]  w-[90%] mt-[1%]">
                  <img src="img/Banner.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="m-auto h-[95%]  w-[90%] mt-[1%]">
                  <img src="img/Banner.png" alt="" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="m-auto h-[95%]  w-[90%] mt-[1%]">
                  <img src="img/Banner.png" alt="" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute w-10 h-10 left-0 border-none bg-[#1C1C1C66]/40" />
            <CarouselNext className="absolute right-0 w-10 h-10 border-none bg-[#1C1C1C66]/40" />
          </Carousel>
        </div>
        <div className="bg-[#fff] h-auto rounded-[20px]">
          <p className="mx-10 my-5 text-[26px] font-medium text-[#4d4d4d]">
            Bảng giá cà phê hôm nay
          </p>
          <div className="flex m-auto justify-evenly text-center w-full">
            <a
              href="#"
              className="text-[14px] font-semibold px-[10px] py-[15px] rounded-[30px] text-[#fff] bg-main border-none no-underline"
            >
              Xem ngày khác
            </a>
            <div className="my-auto mx-0 color-main px-[20px] py-[10px] bg-[#fff] border-2 border-solid rounded-[30px]">
              <i className="relative mr-[10px]"></i>
              <a
                className="text-[14px] font-semibold text-main no-underline"
                href="#"
              >
                Chia sẻ
              </a>
            </div>
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

          {/* 
          <table className="m-auto">
            <tr className="border-none">
              <th className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#dcdcdc]">
                Thị trường
              </th>
              <th className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#dcdcdc]">
                Trung bình
              </th>
              <th className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#dcdcdc]">
                Thay đổi
              </th>
            </tr>
            <tr className="border-none">
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                Đắk Lắk
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 font-bold">
                113,400
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#f00000]">
                -200
              </td>
            </tr>
            <tr className="border-none">
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                Lâm Đồng
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 font-bold">
                112,800
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#f00000]">
                -200
              </td>
            </tr>
            <tr className="border-none">
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                Gia Lai
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 font-bold">
                113,400
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#f00000]">
                -100
              </td>
            </tr>
            <tr className="border-none">
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                Đắk Nông
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 font-bold">
                113,500
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#f00000]">
                -100
              </td>
            </tr>
            <tr className="border-none">
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                Hồ Tiêu
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 font-bold">
                146,000
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#f00000]">
                -1,000
              </td>
            </tr>
            <tr className="border-none">
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                Tỷ giá USD/VND
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1 text-[#000]">
                24,635
              </td>
              <td className="border-b-[1px] border-solid border-[#dcdcdc] px-2 py-1">
                0
              </td>
            </tr>
          </table>
        </div> */}
        </div>
      </div>
    </>
  );
}
