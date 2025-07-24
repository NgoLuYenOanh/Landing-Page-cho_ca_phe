import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Notification() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <FontAwesomeIcon icon={faBell} className="cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <h2>Thông báo</h2>
        </PopoverContent>
      </Popover>
    </>
  );
}
