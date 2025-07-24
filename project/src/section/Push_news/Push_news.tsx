import Image from "next/image";
import Tin_dang_1 from "../../../public/img/tin_dang (1).png";
import Tin_dang_2 from "../../../public/img/tin_dang (2).png";
import Tin_dang_3 from "../../../public/img/tin_dang (3).png";
import Post_news_1 from "../../../public/img/Post_news (10).png";
import Post_news_2 from "../../../public/img/Post_news (11).png";
import Post_news_3 from "../../../public/img/Post_news (12).png";
import Link from "next/link";
export default function Push_news() {
  return (
    <div className="bg-[url(/img/bg_tin_dang.png)] bg-no-repeat bg-cover h-auto flex justify-around items-center mb-5 px-12">
      <div className="w-4/10 mx-0 my-[5%] max-lg:w-8/10 float-left bg-[#fff] rounded-2xl">
        <div>
          <h2 className="text-center p-4 border-b border-[#bdbdbd]">
            Tin đăng hàng ngày
          </h2>
        </div>
        <div className="h-[615px] overflow-auto">
          <div className="w-auto mx-3 my-6 pb-[12px] border-b border-[#bdbdbd] max-h-4/10">
            <div className="flex gap-5 items-center">
              <Image
                width={74}
                height={74}
                className="post_news-box-header-img"
                src={Tin_dang_1.src}
                alt=""
              />
              <div className="w-full">
                <h4 className="mx-[2%] my-0">Võ Thị Thu Thuý</h4>
                <p className="mx-[2%] my-0">Hôm qua lúc 18:09</p>
              </div>
            </div>
            <span className="block my-[2%]">
              Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất, ai
              có không ạ?
            </span>
            <a
              href="Page_news"
              className="mb-5 inline-flex text-[#fff] text-center bg-main px-2 py-2 rounded-2xl m-0"
            >
              Xem chi tiết
            </a>
          </div>
          <div className="mx-3 my-6 pb-[12px] border-b border-[#bdbdbd] max-h-4/10">
            <div className="flex gap-5 items-center">
              <Image
                width={74}
                height={74}
                className="post_news-box-header-img"
                src={Tin_dang_3.src}
                alt=""
              />
              <div className="w-full">
                <h4 className="mx-[2%] my-0">Võ Thị Thu Thuý</h4>
                <p className="mx-[2%] my-0">Hôm qua lúc 18:09</p>
              </div>
            </div>
            <span className="block my-[2%]">
              Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất, ai
              có không ạ?
            </span>
            <a
              href="Page_news"
              className="mb-5 inline-flex text-[#fff] text-center bg-main px-2 py-2 rounded-2xl m-0"
            >
              Xem chi tiết
            </a>
          </div>
          <div className="mx-3 my-6 pb-[12px] border-b border-[#bdbdbd] max-h-4/10">
            <div className="flex gap-5 items-center">
              <Image
                width={74}
                height={74}
                className="post_news-box-header-img"
                src={Tin_dang_2.src}
                alt=""
              />
              <div className="w-full">
                <h4 className="mx-[2%] my-0">Võ Thị Thu Thuý</h4>
                <p className="mx-[2%] my-0">Hôm qua lúc 18:09</p>
              </div>
            </div>
            <span className="block my-[2%]">
              Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất, ai
              có không ạ?
            </span>
            <a
              href="Page_news"
              className="mb-5 inline-flex text-[#fff] text-center bg-main px-2 py-2 rounded-2xl m-0"
            >
              Xem chi tiết
            </a>
          </div>
          <div className="mx-3 my-6 pb-[12px] border-b border-[#bdbdbd] max-h-4/10">
            <div className="flex gap-5 items-center">
              <Image
                width={74}
                height={74}
                className="post_news-box-header-img"
                src={Tin_dang_1.src}
                alt=""
              />
              <div className="w-full">
                <h4 className="mx-[2%] my-0">Võ Thị Thu Thuý</h4>
                <p className="mx-[2%] my-0">Hôm qua lúc 18:09</p>
              </div>
            </div>
            <span className="block my-[2%]">
              Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất, ai
              có không ạ?
            </span>
            <a
              href="Page_news"
              className="mb-5 inline-flex text-[#fff] text-center bg-main px-2 py-2 rounded-2xl m-0"
            >
              Xem chi tiết
            </a>
          </div>
          <div className="mx-3 my-6 pb-[12px] border-b border-[#bdbdbd] max-h-4/10">
            <div className="flex gap-5 items-center">
              <Image
                width={74}
                height={74}
                className="post_news-box-header-img"
                src={Tin_dang_3.src}
                alt=""
              />
              <div className="w-full">
                <h4 className="mx-[2%] my-0">Võ Thị Thu Thuý</h4>
                <p className="mx-[2%] my-0">Hôm qua lúc 18:09</p>
              </div>
            </div>
            <span className="block my-[2%]">
              Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất, ai
              có không ạ?
            </span>
            <a
              href="Page_news"
              className="mb-5 inline-flex text-[#fff] text-center bg-main px-2 py-2 rounded-2xl m-0"
            >
              Xem chi tiết
            </a>
          </div>
          <div className="mx-3 my-6 pb-[12px] border-b border-[#bdbdbd] max-h-4/10">
            <div className="flex gap-5 items-center">
              <Image
                width={74}
                height={74}
                className="post_news-box-header-img"
                src={Tin_dang_2.src}
                alt=""
              />
              <div className="w-full">
                <h4 className="mx-[2%] my-0">Võ Thị Thu Thuý</h4>
                <p className="mx-[2%] my-0">Hôm qua lúc 18:09</p>
              </div>
            </div>
            <span className="block my-[2%]">
              Mình cần mua 5 bịch cà phê nguyên chất giá cả phải chăng nhất, ai
              có không ạ?
            </span>
            <a
              href="Page_news"
              className="mb-5 inline-flex text-[#fff] text-center bg-main px-2 py-2 rounded-2xl m-0"
            >
              Xem chi tiết
            </a>
          </div>
        </div>
      </div>
      <div className="float-right relative w-6/10 h-209 max-lg:hidden">
        <Image
          className="absolute top-40 right-109"
          src={Post_news_2.src}
          alt=""
          width={138}
          height={360}
        />
        <Image
          className="absolute top-2 right-16"
          src={Post_news_3.src}
          alt=""
          width={392}
          height={360}
        />
        <button className="absolute text-2xl top-3 right-81 bg-[#fff] px-10 py-6 rounded-4xl">
          Tiếp cận nhiều nhà cung cấp
        </button>
        <Image
          className="absolute top-105 left-4"
          src={Post_news_1.src}
          alt=""
          width={334}
          height={360}
        />
        <button className="absolute text-2xl bottom-70 left-67 bg-[#fff] px-10 py-6 rounded-4xl">
          Hỏi đáp mọi thắc mắc
        </button>
        <Link
          href="Page_news/Page_push_news"
          className="absolute text-4xl bottom-6 left-100 border-6 text-[#fff] border-[#fff] bg-[#00C55F] hover:text-[#00C55F] hover:bg-[#fff] px-12 py-8 rounded-2xl"
        >
          Đăng tin ngay
        </Link>
      </div>
    </div>
  );
}
