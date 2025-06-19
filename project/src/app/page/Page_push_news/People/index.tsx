import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function People() {
  return (
    <>
      <Select>
        <SelectTrigger className="w-2/10">
          <SelectValue placeholder="Bạn là ai?" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Custom">Khách hàng</SelectItem>
          <SelectItem value="Supplier">Nhà cung cấp</SelectItem>
          <SelectItem value="Seller">Nhân viên bán hàng</SelectItem>
          <SelectItem value="Warehouse_employee">Nhân viên kho</SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}
