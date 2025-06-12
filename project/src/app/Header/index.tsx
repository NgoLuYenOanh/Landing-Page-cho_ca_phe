import Image from "next/image";
import QC from "../../../public/img/QC.png";
import Form_signup from "./Form_signup";
import Form_login from "./Form_login";
import Link from "next/link";
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
              <Link
                href="/"
                className="leading-6 text-base  no-underline font-normal text-[#18191F] hover:text-main"
              >
                Chợ cà phê
              </Link>
            </li>
            <li className="inline-block px-5">
              <Link
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="Page_post_news"
              >
                Tin tức
              </Link>
            </li>
            <li className="inline-block px-5">
              <Link
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Voucher
              </Link>
            </li>
            <li className="inline-block px-5">
              <Link
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Đăng tin
              </Link>
            </li>
            <li className="inline-block px-5">
              <Link
                className="leading-6 text-base no-underline font-normal text-[#18191F] hover:text-main"
                href="Page_product"
              >
                Sản phẩm nổi bật
              </Link>
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
