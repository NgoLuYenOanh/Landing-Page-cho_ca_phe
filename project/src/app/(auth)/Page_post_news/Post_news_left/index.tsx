import Image from "next/image";
import Post_news_1 from "../../../../../public/img/post_news (1).png";
import Post_news_2 from "../../../../../public/img/post_news (2).png";
import Post_news_3 from "../../../../../public/img/post_news (3).png";
import Post_news_5 from "../../../../../public/img/post_news (5).png";
import Post_news_6 from "../../../../../public/img/post_news (6).png";
export default function Post_news_left() {
  return (
    <>
      <div className="h-auto w-300 grid gap-6">
        <a href="" className="flex gap-6 bg-[#fff] rounded-3xl">
          <Image
            src={Post_news_1.src}
            className="rounded-2xl"
            alt=""
            width={371}
            height={208}
          />
          <div>
            <h2 className="text-2xl hover:text-main">
              Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát
              triển
            </h2>
            <p className="text-[#999999] ">
              Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành
              cà phê phát triển...
            </p>
          </div>
        </a>
        <a href="" className="flex gap-6 bg-[#fff] rounded-3xl">
          <Image src={Post_news_2.src} alt="" width={371} height={208} />
          <div>
            <h2 className="text-2xl hover:text-main">
              10 tips pha chế cà phê ngon mỗi ngày
            </h2>
            <p className="text-[#999999]">
              Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành
              cà phê phát triển...
            </p>
          </div>
        </a>
        <a href="" className="flex gap-6 bg-[#fff] rounded-3xl">
          <Image src={Post_news_3.src} alt="" width={371} height={208} />
          <div>
            <h2 className="text-2xl hover:text-main">
              Giá cà phê trong nước liên tục lao dốc từ đầu tháng 11 đến nay
            </h2>
            <p className="text-[#999999]">
              Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành
              cà phê phát triển...
            </p>
          </div>
        </a>
        <a href="" className="flex gap-6 bg-[#fff] rounded-3xl">
          <Image src={Post_news_5.src} alt="" width={371} height={208} />
          <div>
            <h2 className="text-2xl hover:text-main">
              Giá cà phê trong nước liên tục lao dốc từ đầu tháng 11 đến nay
            </h2>
            <p className="text-[#999999]">
              Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành
              cà phê phát triển...
            </p>
          </div>
        </a>
        <a href="" className="flex gap-6 bg-[#fff] rounded-3xl">
          <Image src={Post_news_6.src} alt="" width={371} height={208} />
          <div>
            <h2 className="text-2xl hover:text-main">
              Cách tiếp cận những khách hàng cầ phê tiềm năng
            </h2>
            <p className="text-[#999999]">
              Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành
              cà phê phát triển...
            </p>
          </div>
        </a>
      </div>
    </>
  );
}
