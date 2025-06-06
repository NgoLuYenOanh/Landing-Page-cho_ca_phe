import Image from "next/image";

interface IProduct {
  id: number;
  product_name: string;
  sell: number;
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
        <div className="mx-auto my-5 relative bg-[#f4f5f7]" key={item.id}>
          <Image src={item.img} alt="" width={250} height={301} />
          <div className="m-[5%]">
            <h4 className="text-xl font-sem)ibold">{item.product_name}</h4>
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
