import Image from "next/image";
import Logo from "../../../public/img/Group 2230 (1).png";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./Search";
import Cart_shopping from "./Cart_shopping";
import Notification from "./Notification";
import List_header from "./List_header";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Main_nav() {
  return (
    <>
      <div className="max-lg:mb-[35px] max-w-8/10 flex justify-around pt-[27px] m-auto mb-12 gap-[30px]">
        <div className="flex items-center gap-2.5">
          <a href="#">
            <Image
              src={Logo.src}
              alt="Icon logo"
              className="w-auto h-auto"
              width={200}
              height={28}
            />
          </a>
        </div>
        <div className="relative w-200 max-sm:hidden h-[50px]">
          <Search />
          <div className="flex absolute top-[120%] max-lg:hidden">
            <a
              className="pl-[30px] underline underline-offset-2 text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Cà phê Bột
            </a>
            <a
              className="pl-[30px] underline underline-offset-2 text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Máy cà phê
            </a>
            <a
              className="pl-[30px] underline underline-offset-2 text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Cà phê sữa
            </a>
            <a
              className="pl-[30px] underline underline-offset-2 text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Hạt cà phê
            </a>
          </div>
        </div>
        <div className="flex justify-around items-center gap-[30px]">
          <Popover>
            <PopoverTrigger>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="sm:hidden! cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <Search />
            </PopoverContent>
          </Popover>
          <Cart_shopping />
          <Notification />
          <List_header />
        </div>
      </div>
    </>
  );
}
