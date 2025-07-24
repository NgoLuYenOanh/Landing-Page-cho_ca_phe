import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Register_form from "./Register_form_new";
import { Toaster } from "@/components/ui/sonner";
interface RegisterProps {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onRegisterSuccess?: () => void;
  onSwitchToLogin?: () => void;
}

export default function Register({
  open,
  onOpenChange,
  onRegisterSuccess,
  onSwitchToLogin,
}: RegisterProps) {
  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <Toaster />
        <DialogTrigger className="bg-main text-[#fff] px-5 py-2 mr-4 rounded-md leading-5 text-base font-medium cursor-pointer transition-colors duration-200 hover:text-main hover:bg-[#fff]">
          Đăng ký
        </DialogTrigger>
        <DialogContent className="w-3/10 max-lg:w-6/10">
          <DialogHeader>
            <DialogTitle className="text-2xl text-center font-bold text-main">
              Đăng ký tài khoản
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <Register_form
            onSuccess={onRegisterSuccess}
            onSwitchToLogin={onSwitchToLogin}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
