import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Product_1 from "../../../public/img/san_pham_noi_bat-box (1).png";
import Product_2 from "../../../public/img/san_pham_noi_bat-box (2).png";
import Product_3 from "../../../public/img/san_pham_noi_bat-box (3).png";
import Product_4 from "../../../public/img/san_pham_noi_bat-box (4).png";
import Product_5 from "../../../public/img/san_pham_noi_bat-box (5).png";
import Product_6 from "../../../public/img/san_pham_noi_bat-box (6).png";
import Product_7 from "../../../public/img/san_pham_noi_bat-box (7).png";
import Product_8 from "../../../public/img/san_pham_noi_bat-box (8).png";
import Product_list from "./components/Product_list";

export default function Product() {
  const Product = [
    {
      id: 1,
      sell: -30,
      img: "https://example.com/images/cafe1.jpg",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 250000,
      price: 3500000,
    },
    {
      id: 2,
      img: "https://example.com/images/cafe2.jpg",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 250000,
      price: 3500000,
    },
    {
      id: 3,
      sell: -50,
      img: "https://example.com/images/cafe3.jpg",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 250000,
      price: 3500000,
    },
    {
      id: 4,
      img: "https://example.com/images/cafe4.jpg",
      product_name: "Cà phê rang xay",
      store: "Trung Nguyên",
      price_sell: 250000,
      price: 3500000,
    },
  ];
  return (
    <>
      <div className="h-auto bg-[#fff] mx-0 my-[3%] p-[23px]">
        <div className="w-9/10 m-auto flex gap-3 px-0 py-[30px] items-center justify-center border-b-[5px] border-main translate-x-[-50%">
          <h1 className="text-xl font-semibold">Sản phẩm nổi bật</h1>
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="w-[93.4%] grid lg:grid-cols-4 grid-cols-2 gap-5 m-auto mb-3  ">
          {/* {Product.map((item) => ())} */}
          {/* <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_8.src} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -30%
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <del className="block text-[#b0b0b0] font-normal text-sm">
                  vnđ 3.500.000
                </del>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_7.src} alt="" width={250} height={301} />
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <del className="block text-[#b0b0b0] font-normal text-sm">
                  vnđ 3.500.000
                </del>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_2.src} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_6.src} alt="" width={250} height={301} />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_1.src} alt="" width={250} height={301} />
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_5.src} alt="" width={250} height={301} />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_4.src} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_3.src} alt="" width={250} height={301} />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_1.src} alt="" width={250} height={301} />
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_5.src} alt="" width={250} height={301} />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_4.src} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_3.src} alt="" width={250} height={301} />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_8.src} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -30%
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_7.src} alt="" width={250} height={301} />
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_2.src} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <Image src={Product_6.src} alt="" width={250} height={301} />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">Cà phê rang xay</h4>
              <p className="text-sm text-[#898989] font-medium">Trung Nguyên</p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-lg font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-sm">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="w-8/10 flex m-auto">
          <a
            className=" ml-[50%] translate-x-[-50%] px-6 py-3 text-center text-main border border-main my-3 hover:text-[#fff] hover:bg-main"
            href="#"
          >
            Xem thêm
          </a>
        </div>
      </div>
    </>
  );
}
