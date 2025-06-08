import Image from "next/image";

interface IProduct {
  id: number;
  product_name: string;
  sell: string;
  update: string;
  store: string;
  price: number;
  price_sell: number;
  percent: number;
  img: string;
}

interface Product_list_props {
  product: IProduct[];
}
export default function Product_list({ product }: Product_list_props) {
  return (
    <>
      {product.map((item) => (
        <div className="mx-auto my-5 bg-[#f4f5f7]" key={item.id}>
          <div className="relative">
            <Image src={item.img} alt="" width={250} height={301} />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-full top-[2%] right-[2%]">
              {item.update}
            </p>
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-full top-[2%] right-[2%]">
              {item.sell}
            </p>
          </div>
          <div className="m-[5%]">
            <h4 className="text-xl font-semibold">{item.product_name}</h4>
            <p className="text-sm text-[#898989] font-medium">{item.store}</p>
            <div className="max-w-[95%] flex justify-between">
              <p className="text-lg font-semibold">{item.price_sell}</p>
              <del className="block text-[#b0b0b0] font-normal text-sm">
                {item.price}
              </del>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
