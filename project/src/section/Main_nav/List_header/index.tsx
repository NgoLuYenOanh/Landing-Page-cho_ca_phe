import AuthLoginRegister from "@/components/Header/login&register";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <ul className="ml-8">
              <li className="mb-[50px]">
                <Link className="text-xl font-normal hover:text-main" href="/">
                  Chợ cà phê
                </Link>
              </li>
              <li className="mb-[50px]">
                <Link
                  className="text-xl font-normal hover:text-main"
                  href="/Page_post_news"
                >
                  Tin tức
                </Link>
              </li>
              <li className="mb-[50px]">
                <Link
                  className="text-xl font-normal hover:text-main"
                  href="/Page_voucher"
                >
                  Voucher
                </Link>
              </li>
              <li className="mb-[50px]">
                <Link
                  className="text-xl font-normal hover:text-main"
                  href="/Page_news"
                >
                  Đăng tin
                </Link>
              </li>
              <li className="mb-[50px]">
                <Link
                  className="text-xl font-normal hover:text-main"
                  href="/Page_product"
                >
                  Sản phẩm nổi bật
                </Link>
              </li>
              <div>
                <AuthLoginRegister />
              </div>
            </ul>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
