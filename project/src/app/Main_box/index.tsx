export default function Main_box() {
  return (
    <>
      <div className="max-w-9/10 m-auto grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="w-[330px] h-[180px] bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
          <h1 className="font-bold text-3xl">Đặt hàng</h1>
          <p className="font-normal text-[#999999]">
            Đặt hàng nhanh chóng <br />
            chỉ trong vài phút
          </p>
          <img
            className="float-right mt-[-40px] mr-2.5"
            src="img/Box_Contact (2).png"
            alt=""
          />
        </div>
        <div className="w-[330px] h-[180px] bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
          <h1 className="font-bold text-3xl">Voucher</h1>
          <p className="font-normal text-[#999999]">
            Nhiều voucher giảm giá <br />
            cực hot
          </p>
          <img
            className="float-right mt-[-40px] mr-2.5"
            src="img/Box_Contact (3).png"
            alt=""
          />
          <br />
          <a
            className="mt-[100px] text-main px-6 py-3 border border-solid border-main rounded-[30px] font-bold hover:text-[#fff] hover:bg-main"
            href="#"
          >
            Xem ngay
          </a>
        </div>
        <div className="w-[330px] h-[180px] bg-[#fff] pt-2.5 pl-2.5 rounded-[10px]">
          <h1 className="font-bold text-3xl">Hỗ trợ, tư vấn</h1>
          <p className="font-normal text-[#999999]">
            Đội ngũ tư vấn hỗ trợ 24/24
          </p>
          <img
            className="float-right mt-[-40px] mr-2.5"
            src="img/Box_Contact (1).png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
