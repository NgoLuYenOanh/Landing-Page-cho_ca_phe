import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import QC from "../../../public/img/QC.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <>
      <img className="w-full" src={QC.src} title="QC" />
      <div className="max-w-9/10 h-20 flex flex-wrap justify-between items-center m-auto max-lg:hidden">
        <div>
          <ul className="flex flex-wrap">
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Chợ cà phê
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Tin tức
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Voucher
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Đăng tin
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                className="leading-6 text-2xl no-underline font-normal text-[#18191F] hover:text-main"
                href="#"
              >
                Sản phẩm nổi bật
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Dialog>
            <DialogTrigger className="text-main px-[15px] py-[5px] mr-3 rounded-md leading-5 text-2xl font-medium hover:text-[#fff] hover:bg-main">
              Đăng nhập
            </DialogTrigger>
            <DialogContent className="w-250">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center font-bold text-main">
                  Đăng nhập tài khoản
                </DialogTitle>
                <DialogDescription>
                  <div>
                    <span className="font-bold">Đăng nhập với tư cách</span>
                    <select
                      name=""
                      className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                    >
                      <option value=""></option>
                      <option value="">Khách hàng</option>
                      <option value="">Nhà cung cấp</option>
                      <option value="">Nhân viên bán hàng</option>
                      <option value="">Nhân viên kho</option>
                    </select>
                    <br />
                    <span className="font-bold">Thông tin đăng nhập</span>
                    <form action="">
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-main absolute top-1/2 ml-3.5"
                          icon={faPhone}
                        />
                        <i className=" fa-solid "></i>
                        <input
                          className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                          type="text"
                          placeholder="Số điện thoại của bạn"
                        />
                      </div>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="text-main absolute top-1/2 ml-3.5"
                        />
                        <input
                          className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                          type="text"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <a href="#" className="text-main my-3 float-right">
                        Quên mật khẩu?
                      </a>
                      <br />
                      <span>
                        <input
                          type="checkbox"
                          className="form_signup_wrap_icon-input-agree"
                        />{" "}
                        Tôi đồng ý với{" "}
                        <a
                          href="https://thuocsi.vn/terms-and-condition"
                          target="_blank"
                          className="underline font-medium"
                        >
                          {" "}
                          Điều khoản sử dụng
                        </a>{" "}
                        và xác nhận tôi đã có đủ giấy phép cần thiết cũng như
                        đáp ứng các điều kiện theo quy định của pháp luật để mua
                        sản phẩm trên thuocsi.vn khi đăng ký tài khoản.
                      </span>
                      <br />
                      <a
                        href="#"
                        className="flex m-auto bg-main text-[#fff] w-full h-10 font-bold justify-center items-center text-xl no-underline mt-2 rounded-[6.6px]"
                      >
                        Đăng nhập
                      </a>
                    </form>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="bg-main text-[#fff] px-[15px] py-[5px] w-36 h-10 rounded-md leading-5 text-2xl font-medium hover:text-main hover:bg-[#fff]">
              Đăng ký
            </DialogTrigger>
            <DialogContent className="w-250">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center font-bold text-main">
                  Đăng ký tài khoản
                </DialogTitle>
                <DialogDescription>
                  <div>
                    <span className="font-bold">
                      Vui lòng chọn đối tượng đăng ký
                    </span>
                    <select
                      name=""
                      className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                    >
                      <option value=""></option>
                      <option value="">Khách hàng</option>
                      <option value="">Nhà cung cấp</option>
                      <option value="">Nhân viên bán hàng</option>
                      <option value="">Nhân viên kho</option>
                    </select>
                    <br />
                    <span>Thông tin đăng ký</span>
                    <form action="">
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faUser}
                          className="text-main absolute top-1/2 ml-3.5"
                        />
                        <input
                          className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                          type="text"
                          placeholder="Họ và tên"
                        />
                      </div>
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-main absolute top-1/2 ml-3.5"
                          icon={faPhone}
                        />
                        <i className=" fa-solid "></i>
                        <input
                          className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                          type="text"
                          placeholder="Số điện thoại của bạn"
                        />
                      </div>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="text-main absolute top-1/2 ml-3.5"
                        />
                        <input
                          className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                          type="text"
                          placeholder="Nhập mật khẩu"
                        />
                      </div>
                      <div className="relative">
                        <FontAwesomeIcon
                          icon={faLock}
                          className="text-main absolute top-1/2 ml-3.5 "
                        />
                        <input
                          className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none"
                          type="text"
                          placeholder="Nhập lại mật khẩu"
                        />
                      </div>
                      <br />
                      <span>
                        <input
                          type="checkbox"
                          className="form_signup_wrap_icon-input-agree"
                        />{" "}
                        Tôi đồng ý với{" "}
                        <a
                          href="https://thuocsi.vn/terms-and-condition"
                          target="_blank"
                          className="underline font-medium"
                        >
                          {" "}
                          Điều khoản sử dụng
                        </a>{" "}
                        và xác nhận tôi đã có đủ giấy phép cần thiết cũng như
                        đáp ứng các điều kiện theo quy định của pháp luật để mua
                        sản phẩm trên thuocsi.vn khi đăng ký tài khoản.
                      </span>
                      <br />
                      <a
                        href="#"
                        className="flex m-auto bg-main text-[#fff] w-full h-10 font-bold justify-center items-center text-xl no-underline mt-2 rounded-[6.6px]"
                      >
                        Đăng ký
                      </a>
                    </form>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          {/* <a
            href="#"
            className="text-main px-[15px] py-[5px] mr-3 rounded-md leading-5 text-2xl font-medium hover:text-[#fff] hover:bg-main"
          >
            Đăng nhập
          </a>
          <a
            href="#"
            className="bg-main text-[#fff] px-[15px] py-[5px] rounded-md leading-5 text-2xl font-medium hover:text-main hover:bg-[#fff]"
          >
            Đăng ký
          </a> */}
        </div>
      </div>
    </>
  );
}
