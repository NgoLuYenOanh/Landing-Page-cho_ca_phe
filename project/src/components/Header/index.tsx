"use client";
import Link from "next/link";
import AuthLoginRegister from "./login&register";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { label: "Chợ cà phê", href: "/" },
    { label: "Tin tức", href: "/Page_post_news" },
    { label: "Voucher", href: "/Page_voucher" },
    { label: "Đăng tin", href: "/Page_news" },
    { label: "Sản phẩm nổi bật", href: "/Page_product" },
  ];

  return (
    <>
      <div className="max-w-8/10 h-15 flex flex-wrap justify-between items-center m-auto max-lg:hidden">
        <div>
          <ul className="flex flex-wrap">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 hover:text-main transition-colors duration-200 ${
                  pathname === item.href ? "text-main font-bold" : "text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex">
          <AuthLoginRegister />
        </div>
      </div>
    </>
  );
}
