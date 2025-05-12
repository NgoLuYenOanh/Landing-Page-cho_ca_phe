import { faBell, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import Autoplay from "embla-carousel-autoplay";
import {
  Sheet,
  SheetContent,
  SheetDescription,
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
                className="absolute top-[50%] right-[15px] transform translate-y-[-50%]"
              />
              <div className="flex absolute top-[120%]">
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px]"
                  href="#"
                >
                  Cà phê Bột
                </a>
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px]"
                  href="#"
                >
                  Máy cà phê
                </a>
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px]"
                  href="#"
                >
                  Cà phê sữa
                </a>
                <a
                  className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px]"
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
                <tr>
                  <th>Thị trường</th>
                  <th>Trung bình</th>
                  <th>Thay đổi</th>
                </tr>
                <tr>
                  <td>Đắk Lắk</td>
                  <td>113,400</td>
                  <td>-200</td>
                </tr>
                <tr>
                  <td>Lâm Đồng</td>
                  <td>112,800</td>
                  <td>-200</td>
                </tr>
                <tr>
                  <td>Gia Lai</td>
                  <td>113,400</td>
                  <td>-100</td>
                </tr>
                <tr>
                  <td>Đắk Nông</td>
                  <td>113,500</td>
                  <td>-100</td>
                </tr>
                <tr>
                  <td>Hồ Tiêu</td>
                  <td>146,000</td>
                  <td>-1,000</td>
                </tr>
                <tr className="exchange_rate">
                  <td>Tỷ giá USD/VND</td>
                  <td>24,635</td>
                  <td>0</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="main_box-introduce">
            <div className="box-introduce">
              <h1>Đặt hàng</h1>
              <p>
                Đặt hàng nhanh chóng <br />
                chỉ trong vài phút
              </p>
              <img src="img/Box_Contact (2).png" alt="" />
            </div>
            <div className="box-introduce">
              <h1>Voucher</h1>
              <p>
                Nhiều voucher giảm giá <br />
                cực hot
              </p>
              <img src="img/Box_Contact (3).png" alt="" />
              <br />
              <a href="#">Xem ngay</a>
            </div>
            <div className="box-introduce">
              <h1>Hỗ trợ, tư vấn</h1>
              <p>Đội ngũ tư vấn hỗ trợ 24/24</p>
              <img src="img/Box_Contact (1).png" alt="" />
            </div>
          </div>
        </div>
        <div className="main_category">
          <div className="category">
            <div className="category-header">
              <h1>DANH MỤC</h1>
              <a href="#">Xem tất cả</a>
            </div>
            <div className="wrapper_category-box">
              <div className="category-box">
                <img src="img/Box_danhmuc (3).png" alt="" />
                <p>Cà phê Bột</p>
              </div>
              <div className="category-box">
                <img src="img/Box_danhmuc (4).png" alt="" />
                <p>Cà phê rang xay</p>
              </div>
              <div className="category-box">
                <img src="img/Box_danhmuc (2).png" alt="" />
                <p>Cà phê rang xay</p>
              </div>
              <div className="category-box">
                <img src="img/Box_danhmuc (5).png" alt="" />
                <p>Cà phê rang xay</p>
              </div>
              <div className="category-box">
                <img src="img/Box_danhmuc (1).png" alt="" />
                <p>Cà phê sữa</p>
              </div>
              <div className="category-box">
                <img src="img/Box_danhmuc (2).png" alt="" />
                <p>Máy cà phê</p>
              </div>
              <div className="category-box">
                <img src="img/Box_danhmuc (1).png" alt="" />
                <p>Cà phê rang củi</p>
              </div>
            </div>
          </div>
        </div>
        <div className="seller">
          <div className="seller_header">
            <img src="img/seller_header.png" alt="" />
            <p>Nhà bán hàng nổi bật</p>
          </div>
          <div className="wrapper_seller_box">
            <div className="seller_box">
              <div className="seller_box_header">
                <img src="img/seller-box (4).png" alt="" />
                <div className="seller_box_header-info">
                  <p className="seller_box_header-info-storename">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p>123 sản phẩm đang bán</p>
                  <span>Nhà bán hàng uy tín</span>
                </div>
              </div>
              <p>
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="wrapper_seller_box-img">
                <div className="seller_box-img">
                  <img src="img/seller-box-img (7).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (6).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (5).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
            <div className="seller_box">
              <div className="seller_box_header">
                <img src="img/seller-box (3).png" alt="" />
                <div className="seller_box_header-info">
                  <p className="seller_box_header-info-storename">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p>123 sản phẩm đang bán</p>
                  <span>Nhà bán hàng uy tín</span>
                </div>
              </div>
              <p>
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="wrapper_seller_box-img">
                <div className="seller_box-img">
                  <img src="img/seller-box-img (7).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (6).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (5).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
            <div className="seller_box">
              <div className="seller_box_header">
                <img src="img/seller-box (1).png" alt="" />
                <div className="seller_box_header-info">
                  <p className="seller_box_header-info-storename">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p>123 sản phẩm đang bán</p>
                  <span>Nhà bán hàng uy tín</span>
                </div>
              </div>
              <p>
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="wrapper_seller_box-img">
                <div className="seller_box-img">
                  <img src="img/seller-box-img (7).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (6).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (5).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
            <div className="seller_box">
              <div className="seller_box_header">
                <img src="img/seller-box (2).png" alt="" />
                <div className="seller_box_header-info">
                  <p className="seller_box_header-info-storename">
                    Cà phê Hạnh Trang Nguyên
                  </p>
                  <p>123 sản phẩm đang bán</p>
                  <span>Nhà bán hàng uy tín</span>
                </div>
              </div>
              <p>
                Highlands Coffee là nhà cung cấp cà phê nổi tiếng của Việt Nam,
                sử dụng hạt cà phê từ các vùng núi cao nguyên như Buôn Mê Thuột.
              </p>
              <div className="wrapper_seller_box-img">
                <div className="seller_box-img">
                  <img src="img/seller-box-img (7).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (6).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
                <div className="seller_box-img">
                  <img src="img/seller-box-img (5).png" alt="" />
                  <p>Bịch 100g Cà phê rang xay</p>
                </div>
              </div>
            </div>
          </div>
          <p className="seller-p">
            Hệ thống Chợ Cà Phê kết nối với hàng trăm nhà cung cấp trên toàn
            quốc mang đến cho khách hàng những thước cà phê chất lượng, đậm vị
          </p>
          <a href="#">Xem thêm</a>
        </div>
        <div className="qc">
          <img className="qc_img" src="/img/image (4).png" alt="" />
          <div className="btn">
            <button>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="news">
          <div className="news_header">
            <h1>Tin Tức</h1>
            <a href="#">Xem Thêm</a>
          </div>
          <div className="wrap_news_box">
            <div className="news_box">
              <h2>
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="news_box-main">
                <img src="img/tin_tuc_box (4).png" alt="" />
                <span>
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="news_box-btn">
                <a href="#">Đọc thêm </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="news_box">
              <h2>
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="news_box-main">
                <img src="img/tin_tuc_box (3).png" alt="" />
                <span>
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="news_box-btn">
                <a href="#">Đọc thêm </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="news_box">
              <h2>
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="news_box-main">
                <img src="img/tin_tuc_box (2).png" alt="" />
                <span>
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="news_box-btn">
                <a href="#">Đọc thêm </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
            <div className="news_box">
              <h2>
                Tổng hợp thị trường cà phê tuần từ 07 đến 11/10/2024 và cuối năm
                2024
              </h2>
              <div className="news_box-main">
                <img src="img/tin_tuc_box (1).png" alt="" />
                <span>
                  Nguyên nhân gây giảm giá phiên cuối tuần được cho là do đồng
                  real Brazil yếu. Đồng real giảm xuống mức thấp nhất trong 1
                  tháng vào hôm giao dịch thứ sáu,...
                </span>
              </div>
              <div className="news_box-btn">
                <a href="#">Đọc thêm </a>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="product_header">
            <h1>Sản phẩm nổi bật</h1>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="wrapper_product_box">
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (8).png" alt="" />
              <p className="product_box-sale">-30%</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <del>vnđ 3.500.000</del>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (7).png" alt="" />
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <del>vnđ 3.500.000</del>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (2).png" alt="" />
              <p className="product_box-sale">-50%</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (6).png" alt="" />
              <p className="product_box-new">New</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (1).png" alt="" />
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (5).png" alt="" />
              <p className="product_box-new">New</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (4).png" alt="" />
              <p className="product_box-sale">-50%</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (3).png" alt="" />
              <p className="product_box-new">New</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (1).png" alt="" />
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (5).png" alt="" />
              <p className="product_box-new">New</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (4).png" alt="" />
              <p className="product_box-sale">-50%</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (3).png" alt="" />
              <p className="product_box-new">New</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (8).png" alt="" />
              <p className="product_box-sale">-30%</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (7).png" alt="" />
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (2).png" alt="" />
              <p className="product_box-sale">-50%</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
            <div className="product_box">
              <img src="img/san_pham_noi_bat-box (6).png" alt="" />
              <p className="product_box-new">New</p>
              <div className="product_box-info">
                <h4>Cà phê rang xay</h4>
                <p className="product_box-info-author">Trung Nguyên</p>
                <div className="product_box-info-price">
                  <p>vnđ 250.000</p>
                  <p className="product_box-info-price-old">
                    <del>vnđ 3.500.000</del>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href="#">Xem thêm</a>
        </div>
        <div className="post_news">
          <div className="post_news-big-box">
            <div className="post_news-big-box_header">
              <h2>Tin đăng hàng ngày</h2>
            </div>
            <div className="wrapper_post_news-box">
              <div className="post_news-box">
                <div className="post_news-box-header">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (1).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4>Võ Thị Thu Thuý</h4>
                    <p>Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span>
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a href="#">Xem chi tiết</a>
              </div>
              <div className="post_news-box">
                <div className="post_news-box-header">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (3).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4>Võ Thị Thu Thuý</h4>
                    <p>Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span>
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a href="#">Xem chi tiết</a>
              </div>
              <div className="post_news-box">
                <div className="post_news-box-header">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (2).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4>Võ Thị Thu Thuý</h4>
                    <p>Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span>
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a href="#">Xem chi tiết</a>
              </div>
              <div className="post_news-box">
                <div className="post_news-box-header">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (1).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4>Võ Thị Thu Thuý</h4>
                    <p>Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span>
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a href="#">Xem chi tiết</a>
              </div>
              <div className="post_news-box">
                <div className="post_news-box-header">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (3).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4>Võ Thị Thu Thuý</h4>
                    <p>Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span>
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a href="#">Xem chi tiết</a>
              </div>
              <div className="post_news-box">
                <div className="post_news-box-header">
                  <img
                    className="post_news-box-header-img"
                    src="img/tin_dang (2).png"
                    alt=""
                  />
                  <div className="post_news-box-header-info">
                    <h4>Võ Thị Thu Thuý</h4>
                    <p>Hôm qua lúc 18:09</p>
                  </div>
                </div>
                <span>
                  Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất,
                  ai có không ạ?
                </span>
                <a href="#">Xem chi tiết</a>
              </div>
            </div>
          </div>
          <img
            className="post_news-img"
            src="img/Group 1000004562.png"
            alt=""
          />
        </div>
        <div className="present">
          <h1 className="present-h1">
            Tự hào mang đến cho khách hàng trải nghiệm tốt nhất
          </h1>
          <div className="present-btn">
            <a href="#">
              Xem video
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="keyword">
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
          <table>
            <tr>
              <td>Cà phê bột</td>
              <td>Sỉ cà phê số lượng lớn</td>
              <td>Cà phê sỉ Bình Dương</td>
              <td>Cà phê giá rẻ</td>
              <td>Cà phê rang xay</td>
              <td>Cà phê chất lượng</td>
              <td>Cà phê sữa</td>
              <td>Cà phê củi</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}
