import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Posting_list() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-2/10">
          <SelectValue placeholder="Danh Mục Tin Đăng" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="black_coffee">Cà Phê Đen</SelectItem>
            <SelectItem value="milk_coffee">Cà Phê Sữa</SelectItem>
            <SelectItem value="powdered_coffee">Cà Phê Bột</SelectItem>
            <SelectItem value="roasted_coffee">Cà Phê Rang Xay</SelectItem>
            <SelectItem value="wood_roasted_coffee">Cà Phê Rang Củi</SelectItem>
            <SelectItem value="coffee-machine">Máy Cà Phê</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
