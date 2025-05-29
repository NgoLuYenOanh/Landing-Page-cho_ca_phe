import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  faBars,
  faBell,
  faCartShopping,
  faLock,
  faMagnifyingGlass,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main_nav() {
  return (
    <>
      <div className="max-lg:mb-[35px] max-w-9/10 flex justify-around pt-[27px] m-auto mb-[70px] gap-[30px]">
        <div className="flex items-center gap-2.5">
          <img className="h-[30px]" src="img/Group 2230 (1).png" alt="" />
        </div>
        <div className="relative w-200 h-[50px]">
          <input
            type="text"
            name=""
            className="h-full w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff]"
            placeholder="Tìm kiếm sản phẩm tại đây"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-[50%] right-4 transform translate-y-[-50%] cursor-pointer"
          />
          <div className="flex absolute top-[120%]">
            <a
              className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Cà phê Bột
            </a>
            <a
              className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Máy cà phê
            </a>
            <a
              className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Cà phê sữa
            </a>
            <a
              className="pl-[30px] text-base text-[#aaaaaa] font-normal transform translate-x-[-20px] hover:text-amber-950"
              href="#"
            >
              Hạt cà phê
            </a>
          </div>
        </div>
        <div className="flex justify-around items-center gap-[30px]">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="2x"
            className="cursor-pointer"
          />
          <FontAwesomeIcon icon={faBell} size="2x" className="cursor-pointer" />
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <FontAwesomeIcon icon={faBars} size="2x" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <ul className="ml-8">
                    <li className="mb-[50px]">
                      <a
                        className="text-xl font-normal hover:text-main"
                        href="#"
                      >
                        Chợ cà phê
                      </a>
                    </li>
                    <li className="mb-[50px]">
                      <a
                        className="text-xl font-normal hover:text-main"
                        href="#"
                      >
                        Tin tức
                      </a>
                    </li>
                    <li className="mb-[50px]">
                      <a
                        className="text-xl font-normal hover:text-main"
                        href="#"
                      >
                        Voucher
                      </a>
                    </li>
                    <li className="mb-[50px]">
                      <a
                        className="text-xl font-normal hover:text-main"
                        href="#"
                      >
                        Đăng tin
                      </a>
                    </li>
                    <li className="mb-[50px]">
                      <a
                        className="text-xl font-normal hover:text-main"
                        href="#"
                      >
                        Sản phẩm nổi bật
                      </a>
                    </li>
                    <div>
                      <Dialog>
                        <DialogTrigger className="text-main px-[15px] py-[10px] mr-3 rounded-md leading-5 text-2xl font-medium hover:text-[#fff] hover:bg-main">
                          Đăng nhập
                        </DialogTrigger>
                        <DialogContent className="w-250">
                          <DialogHeader>
                            <DialogDescription>
                              <DialogTitle className="text-2xl text-center font-bold text-main">
                                Đăng nhập tài khoản
                              </DialogTitle>
                              <div>
                                <span className="font-bold">
                                  Đăng nhập với tư cách
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
                                <span className="font-bold">
                                  Thông tin đăng nhập
                                </span>
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
                                  <a
                                    href="#"
                                    className="text-main my-3 float-right"
                                  >
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
                                    và xác nhận tôi đã có đủ giấy phép cần thiết
                                    cũng như đáp ứng các điều kiện theo quy định
                                    của pháp luật để mua sản phẩm trên
                                    thuocsi.vn khi đăng ký tài khoản.
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
                                    và xác nhận tôi đã có đủ giấy phép cần thiết
                                    cũng như đáp ứng các điều kiện theo quy định
                                    của pháp luật để mua sản phẩm trên
                                    thuocsi.vn khi đăng ký tài khoản.
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
                    </div>
                  </ul>
                </SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="max-w-9/10 pt-7 m-auto mb-[5%] gap-2.5 hidden">
        <div className="flex justify-between gap-2.5 mb-[2%]">
          <div className="flex items-center gap-2.5">
            <img className="h-[30px] w-full" src="img/Group 2230 (1).png" />
          </div>
          <div className="flex justify-around items-center gap-[30px]">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2x"
              className="cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faBell}
              size="2x"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="relative w-full h-[50px]">
          <input
            type="text"
            name=""
            className="h-full w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff]"
            placeholder="Tìm kiếm sản phẩm tại đây"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute top-[50%] right-[15px] transform translate-y-[-50%]"
          />
        </div>
      </div>
    </>
  );
}
