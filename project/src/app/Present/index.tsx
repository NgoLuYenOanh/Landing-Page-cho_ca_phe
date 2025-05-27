import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Present() {
  return (
    <>
      <div className="bg-[#fff] h-auto text-center px-0 py-8">
        <h1 className="font-bold text-3xl m-auto text-[50px] max-w-[60%] mb-[2%]">
          Tự hào mang đến cho khách hàng trải nghiệm tốt nhất
        </h1>
        <div className="present-btn">
          <a
            className="bg-[#4caf4f] font-medium text-[22px] text-center m-auto px-[35px] py-5 ml text-[#fff] hover:text-[#4caf4f] hover:bg-[#fff]"
            href="#"
          >
            Xem video
            <FontAwesomeIcon icon={faArrowRight} className="ml-1.5" />
          </a>
        </div>
      </div>
    </>
  );
}
