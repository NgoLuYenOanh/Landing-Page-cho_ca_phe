import {
  faArrowRight,
  faBell,
  faMagnifyingGlass,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import Autoplay from "embla-carousel-autoplay";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="poppins-regular">
      <Header />
      <main className="bg-bg relative">
        <div className="main bg-[#E9FFFB] pb-5">
          <div className="max-w-9/10 flex justify-around pt-[27px] m-auto mb-[70px] gap-[30px]">
            <div className="flex items-center gap-2.5">
              <img className="h-[30px]" src="img/Group 2230 (1).png" alt="" />
            </div>
            <div className="relative w-200 h-[50px]">
              <input
                type="text"
                name=""
                className="h-full w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff]"
                placeholder="Tìm kiếm sản phẩm tại đây"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute top-[50%] right-[15px] transform translate-y-[-50%] cursor-pointer"
              />
              <div className="flex absolute top-[120%]">
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
                  href="#"
                >
                  Cà phê Bột
                </a>
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
                  href="#"
                >
                  Máy cà phê
                </a>
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
                  href="#"
                >
                  Cà phê sữa
                </a>
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
                  href="#"
                >
                  Hạt cà phê
                </a>
              </div>
            </div>
            <div className="flex justify-around items-center gap-[30px]">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2x"
                className="cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faBell}
                size="2x"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="max-w-9/10 pt-7 m-auto mb-[5%] gap-2.5 hidden">
            <div className="flex justify-between gap-2.5 mb-[2%]">
              <div className="flex items-center gap-2.5">
                <img
                  className="h-[30px] w-full"
                  src="img/Group 2230 (1).png"
                  alt=""
                />
              </div>
              <div className="flex justify-around items-center gap-[30px]">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="2x"
                  className="cursor-pointer"
                />
                <FontAwesomeIcon
                  icon={faBell}
                  size="2x"
                  className="cursor-pointer"
                />
                <Sheet>
                  <SheetTrigger>
                    <FontAwesomeIcon icon={faBars} size="2x" className="" />
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle></SheetTitle>
                      <ul className="ml-8">
                        <li className="mb-[50px]">
                          <a
                            className="text-xl font-normal hover:text-main"
                            href="#"
                          >
                            Chợ cà phê
                          </a>
                        </li>
                        <li className="mb-[50px]">
                          <a
                            className="text-xl font-normal hover:text-main"
                            href="#"
                          >
                            Tin tức
                          </a>
                        </li>
                        <li className="mb-[50px]">
                          <a
                            className="text-xl font-normal hover:text-main"
                            href="#"
                          >
                            Voucher
                          </a>
                        </li>
                        <li className="mb-[50px]">
                          <a
                            className="text-xl font-normal hover:text-main"
                            href="#"
                          >
                            Đăng tin
                          </a>
                        </li>
                        <li className="mb-[50px]">
                          <a
                            className="text-xl font-normal hover:text-main"
                            href="#"
                          >
                            Sản phẩm nổi bật
                          </a>
                        </li>
                        <div>
                          <a
                            className="text-main px-[15px] py-[5px] mr-3 rounded-md leading-5 text-2xl font-medium hover:text-[#fff] hover:bg-main"
                            href="#"
                          >
                            Đăng nhập
                          </a>
                          <a
                            className="bg-main text-[#fff] px-[15px] py-[5px] rounded-md leading-5 text-2xl font-medium hover:text-main hover:bg-[#fff]"
                            href="#"
                          >
                            Đăng ký
                          </a>
                        </div>
                      </ul>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            <div className="relative w-full h-[50px]">
              <input
                type="text"
                name=""
                className="h-full w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff]"
                placeholder="Tìm kiếm sản phẩm tại đây"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute top-[50%] right-[15px] transform translate-y-[-50%]"
              />
            </div>
          </div>
          <div className="max-w-9/10 m-auto flex justify-between text-center gap-[30px] mb-[30px]">
            <div className="flex bg-amber-600 relative overflow-hidden h-[498px] rounded-[20px] w-[90%] relative">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <div className="h-full w-full mt-[1%]">
                      <img className="m-auto" src="img/Banner.png" alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-full w-full mt-[1%]">
                      <img className="m-auto" src="img/Banner.png" alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-full w-full mt-[1%]">
                      <img className="m-auto" src="img/Banner.png" alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-full w-full mt-[1%]">
                      <img className="m-auto" src="img/Banner.png" alt="" />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="h-full w-full mt-[1%]">
                      <img className="m-auto" src="img/Banner.png" alt="" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              {/* <i
                className="fa-solid fa-chevron-left"
                onclick="plusSlides(-1)"
              ></i>
              <i
                className="fa-solid fa-chevron-right"
                onclick="plusSlides(1)"
              ></i>
              <div className="wrapper_dot">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
                <span className="dot" onclick="currentSlide(4)"></span>
                <span className="dot" onclick="currentSlide(5)"></span>
              </div> */}
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
            </div>
          </div>
          <div className="max-w-9/10 m-auto flex justify-between wrap gap-[30px]">
            <div className="w-[330px] h-[180px] bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
              <h1 className="font-bold text-3xl">Đặt hàng</h1>
              <p className="font-normal text-[#999999]">
                Đặt hàng nhanh chóng <br />
                chỉ trong vài phút
              </p>
              <img
                className="float-right mt-[-40px] mr-2.5"
                src="img/Box_Contact (2).png"
                alt=""
              />
            </div>
            <div className="w-[330px] h-[180px] bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
              <h1 className="font-bold text-3xl">Voucher</h1>
              <p className="font-normal text-[#999999]">
                Nhiều voucher giảm giá <br />
                cực hot
              </p>
              <img
                className="float-right mt-[-40px] mr-2.5"
                src="img/Box_Contact (3).png"
                alt=""
              />
              <br />
              <a
                className="mt-[100px] text-main px-6 py-3 border border-solid border-main rounded-[30px] font-bold"
                href="#"
              >
                Xem ngay
              </a>
            </div>
            <div className="w-[330px] h-[180px] bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
              <h1 className="font-bold text-3xl">Hỗ trợ, tư vấn</h1>
              <p className="font-normal text-[#999999]">
                Đội ngũ tư vấn hỗ trợ 24/24
              </p>
              <img
                className="float-right mt-[-40px] mr-2.5"
                src="img/Box_Contact (1).png"
                alt=""
              />
            </div>
          </div>
        </div>
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
            <div className="w-full inline-flex justify-around text-center font-medium pb-3">
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (3).png"
                  alt=""
                />
                <p>Cà phê Bột</p>
              </div>
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (4).png"
                  alt=""
                />
                <p>Cà phê rang xay</p>
              </div>
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (2).png"
                  alt=""
                />
                <p>Cà phê rang xay</p>
              </div>
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (5).png"
                  alt=""
                />
                <p>Cà phê rang xay</p>
              </div>
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (1).png"
                  alt=""
                />
                <p>Cà phê sữa</p>
              </div>
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (2).png"
                  alt=""
                />
                <p>Máy cà phê</p>
              </div>
              <div className="flex flex-col items-center mx-[1%]">
                <img
                  className="rounded-[30px] w-[80px] p-[20px] bg-[#f6f6f7]"
                  src="img/Box_danhmuc (1).png"
                  alt=""
                />
                <p>Cà phê rang củi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto bg-[#fff] px-0 py-8">
          <div className="flex gap-5 max-w-9/10 m-auto items-center">
            <img className="h-[60px]" src="img/seller_header.png" alt="" />
            <p className="text-3xl uppercase text-[#f94700] font-bold">
              Nhà bán hàng nổi bật
            </p>
          </div>
          <div className="flex flex-wrap justify-evenly">
            <div className="w-[645px] h-[520px] border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
              <div className="mx-0 my-8">
                <img
                  className="float-left w-[111px] mx-[18px] my-0"
                  src="img/seller-box (4).png"
                  alt=""
                />
                <div className="seller_box_header-info">
                  <p className="text-[22px] font-medium text-[#191e38]">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p className="mb-2">123 sản phẩm đang bán</p>
                  <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                    Nhà bán hàng uy tín
                  </span>
                </div>
              </div>
              <p className="w-[90%] text-[#999999] font-normal text-[16px] mb-7 ml-5">
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="flex justify-around">
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (7).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (6).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (5).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
            <div className="w-[645px] h-[520px] border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
              <div className="mx-0 my-8">
                <img
                  className="float-left w-[111px] mx-[18px] my-0"
                  src="img/seller-box (3).png"
                  alt=""
                />
                <div className="seller_box_header-info">
                  <p className="text-[22px] font-medium text-[#191e38]">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p className="mb-2">123 sản phẩm đang bán</p>
                  <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                    Nhà bán hàng uy tín
                  </span>
                </div>
              </div>
              <p className="w-[90%] text-[#999999] font-normal text-[16px] mb-7 ml-5">
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="flex justify-around">
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (7).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (6).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (5).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
            <div className="w-[645px] h-[520px] border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
              <div className="mx-0 my-8">
                <img
                  className="float-left w-[111px] mx-[18px] my-0"
                  src="img/seller-box (1).png"
                  alt=""
                />
                <div className="seller_box_header-info">
                  <p className="text-[22px] font-medium text-[#191e38]">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p className="mb-2">123 sản phẩm đang bán</p>
                  <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                    Nhà bán hàng uy tín
                  </span>
                </div>
              </div>
              <p className="w-[90%] text-[#999999] font-normal text-[16px] mb-7 ml-5">
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="flex justify-around">
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (7).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (6).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (5).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
            <div className="w-[645px] h-[520px] border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
              <div className="mx-0 my-8">
                <img
                  className="float-left w-[111px] mx-[18px] my-0"
                  src="img/seller-box (2).png"
                  alt=""
                />
                <div className="seller_box_header-info">
                  <p className="text-[22px] font-medium text-[#191e38]">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p className="mb-2">123 sản phẩm đang bán</p>
                  <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                    Nhà bán hàng uy tín
                  </span>
                </div>
              </div>
              <p className="w-[90%] text-[#999999] font-normal text-[16px] mb-7 ml-5">
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="flex justify-around">
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (7).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (6).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="h-[234px] w-[182px] mx-3 my-0 bg-[#f4f5f7] ">
                  <img
                    className="mx-[7px] my-0.5 font-medium text-[#3a3a3a]"
                    src="img/seller-box-img (5).png"
                    alt=""
                  />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#999999] w-[84%] text-[24px] font-normal text-center m-auto">
            Hệ thống Chợ Cà Phê kết nối với hàng trăm nhà cung cấp trên toàn
            quốc mang đến cho khách hàng những thước cà phê chất lượng, đậm vị
          </p>
          <a
            className="w-[243px] h-[55px] px-0 py-[17px] text-center no-underline text-main border border-main block mx-auto my-0 mt-8 font-semibold text-[16px]"
            href="#"
          >
            Xem thêm
          </a>
        </div>
        <div className="flex w-full h-auto relative">
          <img
            className="m-auto h-auto px-0 py-8 w-[90%]"
            src="/img/image (4).png"
            alt=""
          />
          <div className="absolute top-[50%] right-[8%] translate-y-[-50%]">
            <button className="rounded-[100%] border-none p-5 bg-[#fff]">
              <FontAwesomeIcon icon={faArrowRight} size="2x" />
            </button>
          </div>
        </div>
        <div className="bg-[#fff] h-auto">
          <div className="h-[50px] w-[90%] m-auto pt-10">
            <h1 className="uppercase text-3xl font-semibold float-left border-b-[4px] border-main">
              Tin Tức
            </h1>
            <a
              className="float-right text-main text-[20px] px-6 py-4 no-underline"
              href="#"
            >
              Xem Thêm
            </a>
          </div>
          <div className="m-auto w-[95%] flex flex-wrap justify-between">
            <div className="w-[654px] rounded-[10px] mx-auto my-3 border border-[#8080808c]">
              <h2 className="font-bold text-2xl px-6 py-[15px]">
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="flex px-6 py-0">
                <img src="img/tin_tuc_box (4).png" alt="" />
                <span className="ml-[5%] max-w-[80%] text-[#999999]">
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="font-semibold text-main float-right mx-6 my-[1%]">
                <a className="text-main" href="#">
                  Đọc thêm{" "}
                </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="w-[654px] rounded-[10px] mx-auto my-3 border border-[#8080808c]">
              <h2 className="font-bold text-2xl px-6 py-[15px]">
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="flex px-6 py-0">
                <img src="img/tin_tuc_box (3).png" alt="" />
                <span className="ml-[5%] max-w-[80%] text-[#999999]">
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="font-semibold text-main float-right mx-6 my-[1%]">
                <a className="text-main" href="#">
                  Đọc thêm{" "}
                </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="w-[654px] rounded-[10px] mx-auto my-3 border border-[#8080808c]">
              <h2 className="font-bold text-2xl px-6 py-[15px]">
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="flex px-6 py-0">
                <img src="img/tin_tuc_box (2).png" alt="" />
                <span className="ml-[5%] max-w-[80%] text-[#999999]">
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="font-semibold text-main float-right mx-6 my-[1%]">
                <a className="text-main" href="#">
                  Đọc thêm{" "}
                </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="w-[654px] rounded-[10px] mx-auto my-3 border border-[#8080808c]">
              <h2 className="font-bold text-2xl px-6 py-[15px]">
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="flex px-6 py-0">
                <img src="img/tin_tuc_box (1).png" alt="" />
                <span className="ml-[5%] max-w-[80%] text-[#999999]">
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="font-semibold text-main float-right mx-6 my-[1%]">
                <a className="text-main" href="#">
                  Đọc thêm{" "}
                </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto bg-[#ffff] mx-0 my-[3%] p-[23px]">
          <div className="w-[90%] flex gap-3 px-0 py-[30px] items-center justify-center border-b-[5px] border-main translate-x-[-50%">
            <h1 className="text-4xl font-semibold">Sản phẩm nổi bật</h1>
            <FontAwesomeIcon icon={faStar} size="2x" />
          </div>
          <div className="w-[93.4%] flex justify-around flex-wrap m-auto">
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (8).png"
                alt=""
              />
              <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
                -30%
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (7).png"
                alt=""
              />
              <div>
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p>vnđ 250.000</p>
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (2).png"
                alt=""
              />
              <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
                -50%
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (6).png"
                alt=""
              />
              <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
                New
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (1).png"
                alt=""
              />
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (5).png"
                alt=""
              />
              <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
                New
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (4).png"
                alt=""
              />
              <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
                -50%
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (3).png"
                alt=""
              />
              <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
                New
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (1).png"
                alt=""
              />
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (5).png"
                alt=""
              />
              <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
                New
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (4).png"
                alt=""
              />
              <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
                -50%
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (3).png"
                alt=""
              />
              <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
                New
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (8).png"
                alt=""
              />
              <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
                -30%
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (7).png"
                alt=""
              />
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (2).png"
                alt=""
              />
              <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
                -50%
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto my-5 relative bg-[#f4f5f7]">
              <img
                className="w-full"
                src="img/san_pham_noi_bat-box (6).png"
                alt=""
              />
              <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
                New
              </p>
              <div className="m-[5%]">
                <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
                <p className="text-[16px] text-[#898989] font-medium">
                  Trung Nguyên
                </p>
                <div className="max-w-[95%] flex justify-between">
                  <p className="text-[20px] font-semibold">vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del className="block text-[#b0b0b0] font-normal text-[16px]">
                      vnđ 3.500.000
                    </del>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="w-[150px] h-[50px] px-[25px] py-3 text-center text-main border border-main block mx-auto my-3"
            href="#"
          >
            Xem thêm
          </a>
        </div>
        <div className="bg-[url(/img/bg_tin_dang.png)] bg-no-repeat bg-cover h-auto flex justify-around items-center mb-5">
          <div className="w-[40%] mx-[5%] my-0 bg-[#fff] rounded-[20px]">
            <div className="post_news-big-box_header">
              <h2 className="font-bold text-2xl border-b border-[#bdbdbd] text-center p-[18px]">
                Tin đăng hàng ngày
              </h2>
            </div>
            <div className="h-[615px] overflow-scroll">
              <div className="mx-6 my-3 pb-[12%] border-b-1 border-solid border-[#bdbdbd] max-h-[40%]">
                <div className="flex gap-[21px] items-center">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (1).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4 className="mx-0 my-[2%]">Võ Thị Thu Thuý</h4>
                    <p className="mx-0 my-[2%]">Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span className="block mx-0 my-[2%]">
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a
                  href="#"
                  className="mb-5 float-right text-[#fff] text-center bg-main px-[17px] py-2 rounded-[20px] m-0"
                >
                  Xem chi tiết
                </a>
              </div>
              <div className="mx-6 my-3 pb-[12%] border-b-1 border-solid border-[#bdbdbd] max-h-[40%]">
                <div className="flex gap-[21px] items-center">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (3).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4 className="mx-0 my-[2%]">Võ Thị Thu Thuý</h4>
                    <p className="mx-0 my-[2%]">Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span className="block mx-0 my-[2%]">
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a
                  href="#"
                  className="mb-5 float-right text-[#fff] text-center bg-main px-[17px] py-2 rounded-[20px] m-0"
                >
                  Xem chi tiết
                </a>
              </div>
              <div className="mx-6 my-3 pb-[12%] border-b-1 border-solid border-[#bdbdbd] max-h-[40%]">
                <div className="flex gap-[21px] items-center">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (2).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4 className="mx-0 my-[2%]">Võ Thị Thu Thuý</h4>
                    <p className="mx-0 my-[2%]">Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span className="block mx-0 my-[2%]">
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a
                  href="#"
                  className="mb-5 float-right text-[#fff] text-center bg-main px-[17px] py-2 rounded-[20px] m-0"
                >
                  Xem chi tiết
                </a>
              </div>
              <div className="mx-6 my-3 pb-[12%] border-b-1 border-solid border-[#bdbdbd] max-h-[40%]">
                <div className="flex gap-[21px] items-center">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (1).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4 className="mx-0 my-[2%]">Võ Thị Thu Thuý</h4>
                    <p className="mx-0 my-[2%]">Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span className="block mx-0 my-[2%]">
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a
                  href="#"
                  className="mb-5 float-right text-[#fff] text-center bg-main px-[17px] py-2 rounded-[20px] m-0"
                >
                  Xem chi tiết
                </a>
              </div>
              <div className="mx-6 my-3 pb-[12%] border-b-1 border-solid border-[#bdbdbd] max-h-[40%]">
                <div className="flex gap-[21px] items-center">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (3).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4 className="mx-0 my-[2%]">Võ Thị Thu Thuý</h4>
                    <p className="mx-0 my-[2%]">Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span className="block mx-0 my-[2%]">
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a
                  href="#"
                  className="mb-5 float-right text-[#fff] text-center bg-main px-[17px] py-2 rounded-[20px] m-0"
                >
                  Xem chi tiết
                </a>
              </div>
              <div className="mx-6 my-3 pb-[12%] border-b-1 border-solid border-[#bdbdbd] max-h-[40%]">
                <div className="flex gap-[21px] items-center">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (2).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4 className="mx-0 my-[2%]">Võ Thị Thu Thuý</h4>
                    <p className="mx-0 my-[2%]">Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span className="block mx-0 my-[2%]">
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a
                  href="#"
                  className="mb-5 float-right text-[#fff] text-center bg-main px-[17px] py-2 rounded-[20px] m-0"
                >
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
          <img
            className="w-[50%] mx-0 my-[2%]"
            src="img/Group 1000004562.png"
            alt=""
          />
        </div>
        <div className="bg-[#fff] h-auto text-center px-0 py-8">
          <h1 className="font-bold text-3xl m-auto text-[50px] max-w-[60%] mb-[2%]">
            Tự hào mang đến cho khách hàng trải nghiệm tốt nhất
          </h1>
          <div className="present-btn">
            <a
              className="bg-[#4caf4f] font-medium text-[22px] text-center m-auto px-[35px] py-5 ml text-[#fff]"
              href="#"
            >
              Xem video
              <FontAwesomeIcon icon={faArrowRight} className="ml-1.5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center overflow-scroll text-nowrap">
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
          <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
            <tr className="border-none">
              <td className="border-none px-2 py-1">Cà phê bột</td>
              <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
              <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
              <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
              <td className="border-none px-2 py-1">Cà phê rang xay</td>
              <td className="border-none px-2 py-1">Cà phê chất lượng</td>
              <td className="border-none px-2 py-1">Cà phê sữa</td>
              <td className="border-none px-2 py-1">Cà phê củi</td>
            </tr>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
