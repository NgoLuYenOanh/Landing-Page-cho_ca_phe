import RangeSliderDemo from "@/components/ui/slider-14";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Product_filter() {
  return (
    <>
      <div className="max-lg:hidden flex flex-col gap-1.5 w-[25%] bg-white p-5 rounded-2xl float-left">
        <h2 className="text-xl font-bold">Bộ lọc sản phẩm</h2>
        <div className="relative">
          <Input />
          <FontAwesomeIcon
            className="absolute top-1/2 translate-y-[-50%] right-2"
            icon={faMagnifyingGlass}
          />
        </div>
        <Popover>
          <PopoverTrigger className="cursor-pointer">Danh mục</PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2.5">
              <Button variant="outline">Cà phê</Button>
              <Button variant="outline">Cà phê</Button>
              <Button variant="outline">Cà phê</Button>
              <Button variant="outline">Cà phê</Button>
              <Button variant="outline">Cà phê</Button>
            </div>
          </PopoverContent>
        </Popover>
        <br />
        <Popover>
          <PopoverTrigger className="cursor-pointer">Khoảng giá</PopoverTrigger>
          <PopoverContent>
            <RangeSliderDemo />
            <br />
            <div className="flex flex-col gap-2.5">
              <Button variant="outline">10k-20k</Button>
              <Button variant="outline">20k-50k</Button>
              <Button variant="outline">50k-100k</Button>
              <Button variant="outline">100k-200k</Button>
              <Button variant="outline">200k-500k</Button>
            </div>
          </PopoverContent>
        </Popover>
        <br />
        <Popover>
          <PopoverTrigger className="cursor-pointer">Cửa hàng</PopoverTrigger>
          <PopoverContent>
            <div className="">
              <Command>
                <CommandInput placeholder="Tìm cửa hàng..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandItem>Cafe DakLak xuat khau</CommandItem>
                  <CommandItem>Hala Food</CommandItem>
                  <CommandItem>Deva coffee</CommandItem>
                </CommandList>
              </Command>
            </div>
          </PopoverContent>
        </Popover>
        <br />
        <Popover>
          <PopoverTrigger className="cursor-pointer">Đánh giá</PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-2.5">
              <Button variant="outline">5 sao</Button>
              <Button variant="outline">Từ 4 sao</Button>
              <Button variant="outline">Từ 3 sao</Button>
              <Button variant="outline">Từ 2 sao</Button>
              <Button variant="outline">Từ 1 sao</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
}
