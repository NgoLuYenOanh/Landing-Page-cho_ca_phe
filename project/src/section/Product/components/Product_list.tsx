"use client";
// import { listApiProduct } from "@/services/BrandService";
// import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
interface IProduct {
  id: number;
  product_name: string;
  sell: string;
  update: string;
  store: string;
  price: string;
  price_sell: string;
  percent: number;
  img: StaticImageData;
}

interface Product_list_props {
  product: IProduct[];
}
export default function Product_list({ product }: Product_list_props) {
  //   const [listProduct, setListProduct] = useState([]);
  //   const getProduct = async () => {
  //     let res = await listApiProduct();
  //     if (res && res.data) {
  //       setListProduct(res.data.content);
  //     }
  //   };
  //   useEffect(() => {
  //     getProduct();
  //   }, []);
  return (
    <>
      {product.map(
        ({ id, product_name, sell, update, store, price, price_sell, img }) => (
          <div className="mx-auto my-5 bg-[#f4f5f7]" key={id}>
            <div className="relative">
              <Image src={img} alt="" width={250} height={301} />
              {update && (
                <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-full top-[2%] right-[2%]">
                  {update}
                </p>
              )}

              {sell && (
                <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-full top-[2%] right-[2%]">
                  {sell}
                </p>
              )}
            </div>
            <div className="m-[5%]">
              <h4 className="text-xl font-semibold">{product_name}</h4>
              <p className="text-sm text-[#898989] font-medium">{store}</p>
              <div className="max-w-[95%] flex justify-between items-center">
                <p className="text-lg font-semibold">{price_sell}</p>
                <del className="block  text-[#b0b0b0] font-normal text-sm">
                  {price}
                </del>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
