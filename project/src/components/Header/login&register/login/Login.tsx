import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import Login_form from "./Login_form_new";
interface LoginProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onSuccess: () => void;
  onSwitchToRegister?: () => void;
}

export default function Login({
  open,
  onOpenChange,
  onSwitchToRegister,
}: LoginProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <Toaster />
        <DialogTrigger className="text-main hover:bg-main hover:text-[#fff] transition-colors duration-200 px-5 py-2 mr-4 rounded-md leading-5 text-base font-medium cursor-pointer ">
          Đăng nhập
        </DialogTrigger>
        <DialogContent className="w-3/10 max-lg:w-6/10">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold text-main">
              Đăng nhập tài khoản
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Login_form
            onOpenChange={onOpenChange}
            onSwitchToRegister={onSwitchToRegister}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
