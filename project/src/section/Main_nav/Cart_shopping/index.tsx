import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Cart_shopping() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <h2>Giỏ hàng</h2>
        </PopoverContent>
      </Popover>
    </>
  );
}
