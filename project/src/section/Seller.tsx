import Image from "next/image";
import Seller_header from "../../public/img/seller_header.png";
import Seller_box_1 from "../../public/img/seller-box (1).png";
import Seller_box_2 from "../../public/img/seller-box (2).png";
import Seller_box_3 from "../../public/img/seller-box (3).png";
import Seller_box_4 from "../../public/img/seller-box (4).png";
import Seller_box_img_1 from "../../public/img/seller-box-img (1).png";
import Seller_box_img_2 from "../../public/img/seller-box-img (2).png";
import Seller_box_img_3 from "../../public/img/seller-box-img (3).png";
import Seller_box_img_4 from "../../public/img/seller-box-img (4).png";
import Seller_box_img_5 from "../../public/img/seller-box-img (5).png";
import Seller_box_img_6 from "../../public/img/seller-box-img (6).png";
import Seller_box_img_7 from "../../public/img/seller-box-img (7).png";
export default function Seller() {
  return (
    <>
      <div className="h-auto bg-[#fff] px-0 py-8">
        <div className="flex max-lg:w-full gap-5 max-w-8/10 m-auto items-center">
          <Image src={Seller_header.src} alt="" width={57} height={57} />
          <p className="text-2xl uppercase text-[#f94700] font-bold">
            Nhà bán hàng nổi bật
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-evenly m-auto max-w-9/10">
          <div className="w-lg h-[520px] max-lg:max-8/10 overflow-hidden border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
            <div className="mx-0 my-8">
              <Image
                src={Seller_box_4.src}
                alt=""
                className="float-left mx-[18px] my-0"
                height={100}
                width={100}
              />
              <div className="">
                <p className="text-[22px] font-medium text-[#191e38]">
                  Hạnh Trang Nguyên - <br /> Chi nhánh Hà Nội
                </p>
                <p className="mb-2">123 sản phẩm đang bán</p>
                <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                  Nhà bán hàng uy tín
                </span>
              </div>
            </div>
            <p className="w-[90%] text-[#999999] font-normal text-sm mb-7 ml-5">
              Cà phê Hạnh Trang Nguyên chuyên cung cấp các dòng cà phê rang xay
              nguyên chất, được tuyển chọn từ những hạt cà phê chín mọng tại
              vùng cao nguyên Buôn Ma Thuột. Cam kết hương vị đậm đà, giao hàng
              nhanh toàn quốc.
            </p>
            <div className="flex justify-around">
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_7}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_6}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_5}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
            </div>
          </div>
          <div className="w-lg h-[520px] max-lg:max-8/10 overflow-hidden border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
            <div className="mx-0 my-8">
              <Image
                src={Seller_box_3.src}
                alt=""
                className="float-left mx-[18px] my-0"
                height={100}
                width={100}
              />
              <div className="seller_box_header-info">
                <p className="text-[22px] font-medium text-[#191e38]">
                  Hạnh Trang Nguyên - <br /> Chi nhánh Hồ Tây
                </p>
                <p className="mb-2">123 sản phẩm đang bán</p>
                <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                  Nhà bán hàng uy tín
                </span>
              </div>
            </div>
            <p className="w-[90%] text-[#999999] font-normal text-sm mb-7 ml-5">
              Tự hào là thương hiệu địa phương, Hạnh Trang Nguyên mang đến cà
              phê sạch, không phụ gia, rang mộc truyền thống. Phù hợp cho cả pha
              phin và pha máy.
            </p>
            <div className="flex justify-around">
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_4}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_6}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_5}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
            </div>
          </div>
          <div className="w-lg h-[520px] max-lg:max-8/10 overflow-hidden border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
            <div className="mx-0 my-8">
              <Image
                src={Seller_box_1.src}
                alt=""
                className="float-left mx-[18px] my-0"
                height={100}
                width={100}
              />
              <div className="seller_box_header-info">
                <p className="text-[22px] font-medium text-[#191e38]">
                  Hạnh Trang Nguyên - <br /> Cà phê thủ công
                </p>
                <p className="mb-2">123 sản phẩm đang bán</p>
                <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                  Nhà bán hàng uy tín
                </span>
              </div>
            </div>
            <p className="w-[90%] text-[#999999] font-normal text-sm mb-7 ml-5">
              Với hơn 10 năm kinh nghiệm, Hạnh Trang Nguyên phục vụ hàng ngàn
              khách sỉ & lẻ trên toàn quốc. Sản phẩm đạt chuẩn chất lượng, phù
              hợp quán cà phê, văn phòng, và gia đình.
            </p>
            <div className="flex justify-around">
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_7}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_3}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_5}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
            </div>
          </div>
          <div className="w-lg h-[520px] max-lg:max-8/10 overflow-hidden border-2 border-[#ff8d45] rounded-[40px] mx-0 my-10">
            <div className="mx-0 my-8">
              <Image
                src={Seller_box_2.src}
                alt=""
                className="float-left mx-[18px] my-0"
                height={100}
                width={100}
              />
              <div className="seller_box_header-info">
                <p className="text-[22px] font-medium text-[#191e38]">
                  Hạnh Trang Nguyên - <br /> Chi nhánh Đà Nẵng
                </p>
                <p className="mb-2">123 sản phẩm đang bán</p>
                <span className="inline-block p-[5px] bg-main text-[#fff] skew-[-2deg]">
                  Nhà bán hàng uy tín
                </span>
              </div>
            </div>
            <p className="w-[90%] text-[#999999] font-normal text-sm mb-7 ml-5">
              Cà phê đậm vị Tây Nguyên – được rang xay theo công thức riêng, giữ
              trọn hương thơm và vị đắng đặc trưng. Mua sỉ lẻ đều có giá ưu đãi.
            </p>
            <div className="flex justify-around">
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_7}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_2}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
              <div className="h-[200px] w-[162px] mx-3 my-0 bg-[#f4f5f7] ">
                <Image
                  src={Seller_box_img_1}
                  alt=""
                  height={166}
                  width={153}
                  className="my-0.5 font-medium text-[#3a3a3a]"
                />
                <p>Bịch 100g Cà phê rang xay</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#999999] w-[84%] text-[24px] font-normal text-center m-auto">
          Hệ thống Chợ Cà Phê kết nối với hàng trăm nhà cung cấp trên toàn quốc
          mang đến cho khách hàng những thước cà phê chất lượng, đậm vị
        </p>
      </div>
    </>
  );
}
