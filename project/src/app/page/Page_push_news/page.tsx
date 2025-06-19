import { Input } from "@/components/ui/input";
import Posting_list from "./Posting_list";
import People from "./People";
import { Button } from "@/components/ui/button";
export default function Page_push_news() {
  return (
    <>
      <main className=" bg-bg px-16 py-10">
        <div className="bg-[#fff]">
          <div className="float-right"></div>
          <div className="flex flex-col gap-3">
            <Posting_list />
            <h2>Thông tin chung</h2>
            <People />
            <Input
              type="address"
              placeholder="Địa chỉ"
              className="w-2/10 focus-visible:ring-[3px] focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
            />
            <h2>Tiêu đề tin đăng & Mô tả chi tiết</h2>
            <Input
              type="Head"
              placeholder="Tiêu đề tin đăng"
              className="w-2/10 focus-visible:ring-[3px] focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
            />
            <Input
              type="About"
              placeholder="Mô tả chi tiết"
              className="w-2/10 h-26 focus-visible:ring-[3px] focus-visible:ring-blue-500/20 focus-visible:border-blue-500"
            />
            <Button className="w-1/10 bg-main cursor-pointer">Đăng tin</Button>
          </div>
        </div>
      </main>
    </>
  );
}
