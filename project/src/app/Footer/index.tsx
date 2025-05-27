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
export default function Footer() {
  return (
    <>
      <div className="bg-[#263238]">
        <div className="w-[90%] flex flex-wrap justify-around gap-[25px] m-auto px-0 py-10 h-auto text-2xl text-[#fff]">
          <div className="introduce-left">
            <div className="w-[78%] flex items-center gap-2.5 h-auto">
              <img className="h-[45px] w-auto" src="img/icon.png" alt="" />
              <img className="w-full h-[45px]" src="img/Label.png" alt="" />
            </div>
            <div className="mx-0 my-[5%] leading-[35.74px]">
              <p className="text-nowrap">Liên hệ Hotline: 099-090-0288</p>
              <p>Địa chỉ email: chocaphe123@gmail.com</p>
            </div>
            <div className="flex gap-6 introduce-left_social_link">
              <a
                className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px]"
                href="#"
              >
                <FaInstagram />
              </a>
              <a
                className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px]"
                href="#"
              >
                <FaDribbble />
              </a>
              <a
                className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px]"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="border rounded-[50%] text-[#fff] bg-[#fff]/10 border-none p-[15px]"
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
                <img src="img/img-footer (2).png" alt="" className="w-35" />
                <div className="ml-2.5">
                  <a
                    href="https://apps.apple.com/vn/app/ch%E1%BB%A3-c%C3%A0-ph%C3%AA/id6736399292?l=vi"
                    className="flex items-center mx-0 my-3 px-6 py-[13px] border border-[#ffff] rounded-[22.34px]"
                  >
                    <FaApple className="mr-3" />
                    <h3>App Store</h3>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.chocaphe.chocaphe&pcampaignid=web_share"
                    className="flex items-center mx-0 my-3 px-6 py-[13px] border border-[#ffff] rounded-[22.34px]"
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
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Cà phê Bột
              </p>
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Cà phê Bột
              </p>
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Cà phê Bột
              </p>
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Cà phê Bột
              </p>
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Cà phê Bột
              </p>
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Cà phê Bột
              </p>
            </div>
            <div className="mt-[25px]">
              <h2 className="text-[30px] font-semibold">Về chúng tôi</h2>
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Giới thiệu
              </p>
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
              <p className="text-[24px] font-normal text-[#bfbfbf]">
                Tin tức ngày hôm nay
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#D7FFF5] flex flex-wrap justify-around px-0 py-[68px]">
        <div className="leading-[39px]">
          <h1 className="font-bold text-3xl mt-[25px]">
            SÀN THƯƠNG MẠI ĐIỆN TỬ CHỢ CÀ PHÊ
          </h1>
          <div className="flex gap-5 items-center px-0 py-3">
            <FontAwesomeIcon className="mr-3" icon={faLocationDot} size="2x" />
            <p className="text-[26.46px] leading-[37.8px]">
              Địa chỉ: 180 Vũ Quỳnh, quận Thanh Khê, TP Đà Nẵng
            </p>
          </div>
          <div className="flex gap-5 items-center px-0 py-3">
            <FontAwesomeIcon className="mr-3" icon={faFile} size="2x" />
            <p className="text-[26.46px] leading-[37.8px]">
              Giấy phép kinh doanh số: 019482952205
            </p>
          </div>
          <div className="flex gap-5 items-center px-0 py-3">
            <FontAwesomeIcon className="mr-3" icon={faFile} size="2x" />
            <p className="text-[26.46px] leading-[37.8px]">
              Giấy phép hoạt động dịch vụ việc làm số: 18/SLĐTBXH-GP
            </p>
          </div>
        </div>
        <div className="leading-[39px]">
          <img className="flex m-auto" src="img/img-footer (1).png" alt="" />
          <h2>Đăng ký nhà bán hàng trên Chocaphe</h2>
          <p>Để lại địa chỉ mail tư vấn đăng ký</p>
          <input
            className="w-full px-10 py-[15px] leading-2.5 bg-[#312F2F] text-[#ffff]"
            type="text"
            placeholder="Nhập email của bạn"
          />
          <a
            className="flex m-auto items-center justify-center w-[30%] px-0 py-2 text-2xl text-center bg-[#FF0000] rounded-[10px] no-underline text-[#fff] font-bold mt-[34px]"
            href="#"
          >
            Gửi
          </a>
        </div>
      </div>
    </>
  );
}
