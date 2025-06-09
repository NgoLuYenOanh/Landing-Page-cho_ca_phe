import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Search() {
  return (
    <>
      <div className="relative h-full">
        {/* <input
          type="text"
          name=""
          className="h-8/10 w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff]"
          placeholder="Tìm kiếm sản phẩm tại đây"
        /> */}
        <Command>
          <Popover>
            <PopoverTrigger>
              <div>
                <CommandInput
                  placeholder="Tìm kiếm sản phẩm tại đây"
                  className="h-8/10 w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff] "
                />
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <CommandList className="top-10 z-1 bg-[#fff] absolute w-full h-30 rounded-b-lg">
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  <CommandItem>Cà phê Bột</CommandItem>
                  <CommandItem>Máy cà phê</CommandItem>
                  <CommandItem>Cà phê sữa</CommandItem>
                  <CommandItem>Cà phê rang xay</CommandItem>
                  <CommandItem>Cà phê rang củi</CommandItem>
                </CommandGroup>
              </CommandList>
            </PopoverContent>
          </Popover>
        </Command>
      </div>
    </>
  );
}
