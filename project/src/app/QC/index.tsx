import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function QC() {
  return (
    <>
      <div className="flex w-full h-auto relative">
        <img
          className="m-auto h-auto px-0 py-8 w-[90%]"
          src="/img/image (4).png"
          alt=""
        />
        <div className="absolute top-[50%] right-[8%] translate-y-[-50%]">
          <button className="rounded-[100%] border-none p-5 bg-[#fff]">
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      </div>
    </>
  );
}
