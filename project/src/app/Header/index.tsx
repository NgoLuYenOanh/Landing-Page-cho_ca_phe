import QC from "../../../public/img/QC.png";
export default function Header() {
  return (
    <>
      <img className="w-full" src={QC.src} title="QC" />
      <div className="max-w-9/10 h-20 flex flex-wrap justify-between items-center m-auto max-lg:hidden">
        <div>
          <ul className="flex flex-wrap">
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Chợ cà phê
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Tin tức
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Voucher
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Đăng tin
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Sản phẩm nổi bật
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a
            href="#"
            className="text-main px-[15px] py-[5px] mr-3 rounded-md leading-5 text-2xl font-medium hover:text-[#fff] hover:bg-main"
          >
            Đăng nhập
          </a>
          <a
            href="#"
            className="bg-main text-[#fff] px-[15px] py-[5px] rounded-md leading-5 text-2xl font-medium hover:text-main hover:bg-[#fff]"
          >
            Đăng ký
          </a>
        </div>
      </div>
    </>
  );
}
