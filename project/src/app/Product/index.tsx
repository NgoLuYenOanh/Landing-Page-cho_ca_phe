import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product() {
  return (
    <>
      <div className="h-auto bg-[#fff] mx-0 my-[3%] p-[23px]">
        <div className="w-[90%] flex gap-3 px-0 py-[30px] items-center justify-center border-b-[5px] border-main translate-x-[-50%">
          <h1 className="text-4xl font-semibold">Sản phẩm nổi bật</h1>
          <FontAwesomeIcon icon={faStar} size="2x" />
        </div>
        <div className="w-[93.4%] flex justify-around flex-wrap m-auto">
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (8).png"
              alt=""
            />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -30%
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <del className="block text-[#b0b0b0] font-normal text-[16px]">
                  vnđ 3.500.000
                </del>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (7).png"
              alt=""
            />
            <div>
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p>vnđ 250.000</p>
                <del className="block text-[#b0b0b0] font-normal text-[16px]">
                  vnđ 3.500.000
                </del>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (2).png"
              alt=""
            />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (6).png"
              alt=""
            />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (1).png"
              alt=""
            />
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (5).png"
              alt=""
            />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (4).png"
              alt=""
            />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (3).png"
              alt=""
            />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (1).png"
              alt=""
            />
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (5).png"
              alt=""
            />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (4).png"
              alt=""
            />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (3).png"
              alt=""
            />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (8).png"
              alt=""
            />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -30%
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (7).png"
              alt=""
            />
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (2).png"
              alt=""
            />
            <p className="absolute px-1.5 py-[15px] text-[#fff] bg-[#e97171] rounded-[50%] top-[2%] right-[2%]">
              -50%
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto my-5 relative bg-[#f4f5f7]">
            <img
              className="w-full"
              src="img/san_pham_noi_bat-box (6).png"
              alt=""
            />
            <p className="absolute px-2.5 py-[15px] text-[#fff] bg-[#2ec1ac] rounded-[50%] top-[2%] right-[2%]">
              New
            </p>
            <div className="m-[5%]">
              <h4 className="text-2xl font-semibold">Cà phê rang xay</h4>
              <p className="text-[16px] text-[#898989] font-medium">
                Trung Nguyên
              </p>
              <div className="max-w-[95%] flex justify-between">
                <p className="text-[20px] font-semibold">vnđ 250.000</p>
                <p className="product_box-info-price-old">
                  <del className="block text-[#b0b0b0] font-normal text-[16px]">
                    vnđ 3.500.000
                  </del>
                </p>
              </div>
            </div>
          </div>
        </div>
        <a
          className="w-[150px] h-[50px] px-[25px] py-3 text-center text-main border border-main block mx-auto my-3 hover:text-[#fff] hover:bg-main"
          href="#"
        >
          Xem thêm
        </a>
      </div>
    </>
  );
}
