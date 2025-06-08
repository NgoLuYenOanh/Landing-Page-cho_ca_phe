import Image from "next/image";
import QC from "../../../public/img/QC.png";
import Form_signup from "./Form_signup";
import Form_login from "./Form_login";
export default function Header() {
  return (
    <>
      <Image
        src={QC.src}
        className="h-20"
        title="QC"
        alt="QC"
        width={1540}
        height={168}
        priority
      />
      <div className="max-w-8/10 h-15 flex flex-wrap justify-between items-center m-auto max-lg:hidden">
        <div>
          <ul className="flex flex-wrap">
            <li className="inline-block px-5">
              <a
                className="leading-6 text-base  no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Chợ cà phê
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="Page_post_news"
              >
                Tin tức
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Voucher
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Đăng tin
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="Page_product"
              >
                Sản phẩm nổi bật
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Form_signup />
          <Form_login />
        </div>
      </div>
    </>
  );
}
