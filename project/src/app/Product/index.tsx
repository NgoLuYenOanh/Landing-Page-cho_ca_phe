import Product_1 from "../../../public/img/san_pham_noi_bat-box (1).png";
import Product_2 from "../../../public/img/san_pham_noi_bat-box (2).png";
import Product_3 from "../../../public/img/san_pham_noi_bat-box (3).png";
import Product_4 from "../../../public/img/san_pham_noi_bat-box (4).png";
import Product_5 from "../../../public/img/san_pham_noi_bat-box (5).png";
import Product_6 from "../../../public/img/san_pham_noi_bat-box (6).png";
import Product_7 from "../../../public/img/san_pham_noi_bat-box (7).png";
import Product_8 from "../../../public/img/san_pham_noi_bat-box (8).png";

import Product_list from "./components/Product_list";
import Product_header from "./components/Product_header";

export default function Product() {
  const Product = [
    {
      id: 1,
      sell: "-30%",
      img: Product_8,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 250000,
      price: 3500000,
    },
    {
      id: 2,
      img: Product_7,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 2500000,
    },
    {
      id: 3,
      sell: "-50%",
      img: Product_2,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 7000,
      price: 14000,
    },
    {
      id: 4,
      img: Product_6,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 500000,
    },
    {
      id: 5,
      img: Product_1,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 1500000,
    },
    {
      id: 6,
      update: "New",
      img: Product_5,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 150000,
    },
    {
      id: 7,
      sell: "-50%",
      img: Product_4,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 70000,
      price: 140000,
    },
    {
      id: 8,
      img: Product_3,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 500000,
    },
    {
      id: 9,
      img: Product_1,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 1500000,
    },
    {
      id: 10,
      update: "New",
      img: Product_5,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 150000,
    },
    {
      id: 11,
      sell: "-50%",
      img: Product_4,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 70000,
      price: 140000,
    },
    {
      id: 12,
      img: Product_3,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 500000,
    },
    {
      id: 13,
      sell: "-30%",
      img: Product_8,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 250000,
      price: 3500000,
    },
    {
      id: 14,
      img: Product_7,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 2500000,
    },
    {
      id: 15,
      sell: "-50%",
      img: Product_2,
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 7000,
      price: 14000,
    },
    {
      id: 16,
      img: Product_6,
      update: "New",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 500000,
    },
  ];
  return (
    <>
      <div className="h-auto bg-[#fff] mx-0 my-[3%] p-[23px]">
        <Product_header />
        <div className="w-[93.4%] grid lg:grid-cols-4 grid-cols-2 gap-5 m-auto mb-3  ">
          <Product_list product={Product} />
        </div>
        <div className="w-8/10 flex m-auto">
          <a
            className=" ml-[50%] translate-x-[-50%] px-6 py-3 text-center text-main border border-main my-3 hover:text-[#fff] hover:bg-main"
            href="Page_product"
          >
            Xem thêm
          </a>
        </div>
      </div>
    </>
  );
}
