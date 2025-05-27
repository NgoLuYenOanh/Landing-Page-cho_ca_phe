import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  faBars,
  faBell,
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main_nav() {
  return (
    <>
      <div className="max-lg:mb-[35px] max-w-9/10 flex justify-around pt-[27px] m-auto mb-[70px] gap-[30px]">
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
            className="absolute top-[50%] right-4 transform translate-y-[-50%] cursor-pointer"
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
          <FontAwesomeIcon icon={faBell} size="2x" className="cursor-pointer" />
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
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
                  </ul>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="max-w-9/10 pt-7 m-auto mb-[5%] gap-2.5 hidden">
        <div className="flex justify-between gap-2.5 mb-[2%]">
          <div className="flex items-center gap-2.5">
            <img className="h-[30px] w-full" src="img/Group 2230 (1).png" />
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
    </>
  );
}
