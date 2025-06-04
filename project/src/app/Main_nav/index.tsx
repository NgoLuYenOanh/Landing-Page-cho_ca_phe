import Image from "next/image";
import Logo from "../../../public/img/Group 2230 (1).png";
import Form_login from "../Header/Form_login";
import Form_signup from "../Header/Form_signup";
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
import Search from "./Search";

export default function Main_nav() {
  return (
    <>
      <div className="max-lg:mb-[35px] max-w-8/10 flex justify-around pt-[27px] m-auto mb-[70px] gap-[30px]">
        <div className="flex items-center gap-2.5">
          <a href="#">
            <Image src={Logo.src} alt="" width={200} height={28} />
          </a>
        </div>
        <div className="relative w-200 max-sm:hidden h-[50px]">
          <Search />
          <div className="flex absolute top-[120%] max-lg:hidden">
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
            icon={faMagnifyingGlass}
            className="sm:hidden! cursor-pointer"
          />
          <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
          <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <FontAwesomeIcon icon={faBars} />
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
                      <Form_signup />
                      <Form_login />
                    </div>
                  </ul>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
