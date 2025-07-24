import Image from "next/image";
import Box_Contact_1 from "../../public/img/Box_Contact (1).png";
import Box_Contact_2 from "../../public/img/Box_Contact (2).png";
import Box_Contact_3 from "../../public/img/Box_Contact (3).png";
export default function Main_box() {
  return (
    <>
      <div className="max-w-8/10 m-auto grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="w-[330px] h-[180px] max-lg:w-full bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
          <h1 className="font-bold text-2xl">Đặt hàng</h1>
          <p className="font-normal text-sm text-[#999999]">
            Đặt hàng nhanh chóng <br />
            chỉ trong vài phút
          </p>
          <Image
            src={Box_Contact_2.src}
            className="float-right mt-[-40px] mr-2.5"
            alt=""
            width={110}
            height={110}
          />
        </div>
        <div className="w-[330px] h-[180px] max-lg:w-full bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
          <h1 className="font-bold text-2xl">Voucher</h1>
          <p className="font-normal text-sm text-[#999999]">
            Nhiều voucher giảm giá <br />
            cực hot
          </p>
          <Image
            src={Box_Contact_3.src}
            className="float-right mt-[-40px] mr-2.5"
            alt=""
            width={110}
            height={110}
          />
          <br />
          <a
            className="mt-[100px] text-main text-sm px-6 py-3 border border-solid border-main rounded-[30px] font-bold hover:text-[#fff] hover:bg-main"
            href="Page_voucher"
          >
            Xem ngay
          </a>
        </div>
        <div className="w-[330px] h-[180px] max-lg:w-full bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
          <h1 className="font-bold text-2xl">Hỗ trợ, tư vấn</h1>
          <p className="font-normal text-sm text-[#999999]">
            Đội ngũ tư vấn hỗ trợ 24/24
          </p>
          <Image
            src={Box_Contact_1.src}
            className="float-right mt-[-40px] mr-2.5"
            alt=""
            width={110}
            height={110}
          />
        </div>
      </div>
    </>
  );
}
