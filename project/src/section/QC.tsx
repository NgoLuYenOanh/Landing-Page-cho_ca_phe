// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Image_4 from "../../public/img/image (4).png";
export default function QC() {
  return (
    <>
      <div className="flex w-full relative">
        <Image
          src={Image_4.src}
          alt=""
          className="m-auto px-0 py-8 w-8/10"
          width={1329}
          height={100}
        />
        {/* <div className="absolute block top-[50%] right-[13%] translate-y-[-50%]">
          <a
            href=""
            className="rounded-[100%] border-none p-6 bg-[#fff] max-lg:p-1"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div> */}
      </div>
    </>
  );
}
