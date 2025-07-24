import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Product_header() {
  return (
    <div className="w-9/10 m-auto flex gap-3 px-0 py-[30px] items-center justify-center border-b-[5px] border-main translate-x-[-50%">
      <h1 className="text-3xl font-semibold">Sản phẩm nổi bật</h1>
      <FontAwesomeIcon icon={faStar} size="2x" />
    </div>
  );
}
