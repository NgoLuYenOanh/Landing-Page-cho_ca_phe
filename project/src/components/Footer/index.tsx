import { faFile, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  FaApple,
  FaDribbble,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Icon from "../../../public/img/Icon.png";
import Label from "../../../public/img/Label.png";
import Img_footer_1 from "../../../public/img/img-footer (1).png";
import Img_footer_2 from "../../../public/img/img-footer (2).png";
export default function Footer() {
  return (
    <>
      <div className="bg-[#263238] w-full flex flex-wrap justify-around gap-[25px] m-auto px-0 py-10 h-auto text-2xl text-[#fff]">
        <div className="introduce-left">
          <div className="w-[78%] flex items-center gap-2.5 h-auto">
            <Image
              src={Icon}
              alt=""
              className="w-auto h-auto"
              width={65}
              height={45}
            />
            <Image
              src={Label}
              alt=""
              className="w-auto h-auto"
              width={365}
              height={52}
            />
          </div>
          <div className="mx-0 my-[5%] leading-[35.74px]">
            <p className="text-nowrap">Liên hệ Hotline: 099-090-0288</p>
            <p>Địa chỉ email: chocaphe123@gmail.com</p>
          </div>
          <div className="flex gap-6 introduce-left_social_link">
            <a
              className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px] hover:text-black hover:bg-white"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px] hover:text-black hover:bg-white"
              href="#"
            >
              <FaDribbble />
            </a>
            <a
              className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px] hover:text-black hover:bg-white"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px] hover:text-black hover:bg-white"
              href="#"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="mt-[20%]">
            <h2 className="uppercase font-semibold text-[30px]">
              ứng dụng của chúng tôi
            </h2>
            <div className="flex flex-wrap items-center mx-0 my-4">
              <Image src={Img_footer_2} alt="" width={185} height={185} />
              <div className="ml-2.5">
                <a
                  href="https://apps.apple.com/vn/app/ch%E1%BB%A3-c%C3%A0-ph%C3%AA/id6736399292?l=vi"
                  className="flex items-center mx-0 my-3 px-6 py-[13px] border-3 border-[#ffff] rounded-[22.34px] hover:bg-white hover:text-[#263238]"
                >
                  <FaApple className="mr-3" />
                  <h3>App Store</h3>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.chocaphe.chocaphe&pcampaignid=web_share"
                  className="flex items-center mx-0 my-3 px-6 py-[13px] border-3 border-[#ffff] rounded-[22.34px] hover:bg-white hover:text-[#263238]"
                >
                  <FaGooglePlay className="mr-3" />
                  <h3>Google Play</h3>
                </a>
              </div>
            </div>
            <p>Quét mã để tải app ngay bây giờ!</p>
          </div>
        </div>
        <div className="introduce-center">
          <div className="introduce-center_produce">
            <h2 className="text-[30px] font-semibold">Sản phẩm</h2>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Cà phê Bột</p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Cà phê Bột</p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Cà phê Bột</p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Cà phê Bột</p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Cà phê Bột</p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Cà phê Bột</p>
          </div>
          <div className="mt-[25px]">
            <h2 className="text-[30px] font-semibold">Về chúng tôi</h2>
            <p className="text-[24px] font-normal text-[#bfbfbf]">Giới thiệu</p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Chính sách bảo mật
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Điều khoản sử dụng
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Hỏi đáp tư vấn
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Đăng ký nhà bán hàng
            </p>
          </div>
        </div>
        <div className="introduce-right">
          <div className="introduce-right_supplier">
            <h2 className="text-[30px] font-semibold">Nhà cung cấp</h2>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
            <p className="text-[24px] font-normal text-[#bfbfbf]">
              Nhà cung cấp Highland
            </p>
          </div>
          <div className="mt-[25px]">
            <h2 className="text-[30px] font-semibold">Tin tức cà phê</h2>
            <a
              href="/page/Page_post_news"
              className="text-[24px] font-normal text-[#bfbfbf]"
            >
              Tin tức ngày hôm nay
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#D7FFF5] flex flex-wrap justify-around px-0 py-[68px]">
        <div className="leading-[39px]">
          <h1 className="font-bold text-3xl mt-[25px]">
            SÀN THƯƠNG MẠI ĐIỆN TỬ CHỢ CÀ PHÊ
          </h1>
          <div className="flex gap-5 items-center px-0 py-3">
            <FontAwesomeIcon
              className="mr-3 text-main"
              icon={faLocationDot}
              size="2x"
            />
            <p className="text-2xl leading-[37.8px]">
              Địa chỉ: 180 Vũ Quỳnh, quận Thanh Khê, TP Đà Nẵng
            </p>
          </div>
          <div className="flex gap-5 items-center px-0 py-3">
            <FontAwesomeIcon
              className="mr-3 text-main"
              icon={faFile}
              size="2x"
            />
            <p className="text-2xl leading-[37.8px]">
              Giấy phép kinh doanh số: 019482952205
            </p>
          </div>
          <div className="flex gap-5 items-center px-0 py-3">
            <FontAwesomeIcon
              className="mr-3 text-main"
              icon={faFile}
              size="2x"
            />
            <p className="text-2xl leading-[37.8px]">
              Giấy phép hoạt động dịch vụ việc làm số: 18/SLĐTBXH-GP
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Image
            src={Img_footer_1.src}
            alt=""
            className="flex m-auto w-auto h-auto"
            height={18}
            width={217}
          />
          <h2 className="text-2xl text-center">
            Đăng ký nhà bán hàng trên Chocaphe
          </h2>
          <p className="text-2xl text-center text-[#7C7C7C]">
            Để lại địa chỉ mail tư vấn đăng ký
          </p>
          <input
            className="w-full px-10 py-[15px] leading-2.5 bg-[#312F2F] text-[#ffff]"
            type="text"
            placeholder="Nhập email của bạn"
          />
          <a
            className="flex m-auto items-center justify-center w-[30%] px-0 py-2 text-2xl text-center bg-[#FF0000] rounded-[10px] no-underline text-[#fff] font-bold"
            href="#"
          >
            Gửi
          </a>
        </div>
      </div>
    </>
  );
}
