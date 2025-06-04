import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { faLock, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Form_login() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-main px-5 py-2 mr-3 rounded-md leading-5 text-base font-medium hover:text-[#fff] hover:bg-main">
          Đăng nhập
        </DialogTrigger>
        <DialogContent className="w-250">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold text-main">
              Đăng nhập tài khoản
            </DialogTitle>
            <DialogDescription>
              <div>
                <span className="block font-bold mt-2">
                  Đăng nhập với tư cách
                </span>
                <Select>
                  <SelectTrigger className="w-full h-8 bg-bg mt-4 px-2.5 pl-11 rounded-[6.6px] border-none">
                    <SelectValue placeholder="Bạn là ai?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="#">Khách hàng</SelectItem>
                    <SelectItem value="#">Nhà cung cấp</SelectItem>
                    <SelectItem value="#">Nhân viên bán hàng</SelectItem>
                    <SelectItem value="#">Nhân viên kho</SelectItem>
                  </SelectContent>
                </Select>
                <span className="block font-bold mt-4">
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
                  <a href="#" className="text-main my-3 float-right">
                    Quên mật khẩu?
                  </a>
                  <br />
                  <span className="block mt-4">
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
                    và xác nhận tôi đã có đủ giấy phép cần thiết cũng như đáp
                    ứng các điều kiện theo quy định của pháp luật để mua sản
                    phẩm trên thuocsi.vn khi đăng ký tài khoản.
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
    </>
  );
}
