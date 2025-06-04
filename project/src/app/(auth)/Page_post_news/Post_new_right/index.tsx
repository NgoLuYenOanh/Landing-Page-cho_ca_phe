import Image from "next/image";
import Post_news_5 from "../../../../../public/img/post_news (5).png";
import Post_news_7 from "../../../../../public/img/post_news (7).png";
import Post_news_4 from "../../../../../public/img/post_news (4).png";
import Post_news_9 from "../../../../../public/img/post_news (9).png";
import Post_news_6 from "../../../../../public/img/post_news (6).png";
import Post_news_8 from "../../../../../public/img/post_news (8).png";
export default function Post_new_right() {
  return (
    <>
      <div className="grid gap-3">
        <div className="bg-[#fff] rounded-3xl grid gap-2">
          <h2 className="text-2xl">Bài viết nổi bật</h2>
          <div>
            <Image src={Post_news_5.src} alt="" width={115} height={115} />
            <p className="text-main">
              Robusta – Arabica và câu chuyện cà phê Việt
            </p>
          </div>
          <hr />
          <div>
            <Image src={Post_news_7.src} alt="" width={115} height={115} />
            <p className="text-main">
              Robusta – Arabica và câu chuyện cà phê Việt
            </p>
          </div>
          <hr />
          <div>
            <Image src={Post_news_4.src} alt="" width={115} height={115} />
            <p className="text-main">
              Robusta – Arabica và câu chuyện cà phê Việt
            </p>
          </div>
          <hr />
          <div>
            <Image src={Post_news_9.src} alt="" width={115} height={115} />
            <p className="text-main">
              Robusta – Arabica và câu chuyện cà phê Việt
            </p>
          </div>
          <hr />
          <div>
            <Image src={Post_news_6.src} alt="" width={115} height={115} />
            <p className="text-main">
              Robusta – Arabica và câu chuyện cà phê Việt
            </p>
          </div>
          <hr />
          <div>
            <Image src={Post_news_8.src} alt="" width={115} height={115} />
            <p className="text-main">
              Robusta – Arabica và câu chuyện cà phê Việt
            </p>
          </div>
        </div>
        <div className="bg-[#fff] rounded-3xl grid gap-2">
          <h2>Từ khoá tìm kiếm</h2>
          <a href="#">cà phê ngon</a>
          <a href="#">thị trường</a>
          <a href="#">nhà cung cấp</a>
          <a href="#">sỉ cà phê giá rẻ</a>
          <a href="#">mua cà phê</a>
          <a href="#">sản xuất cà phê</a>
        </div>
      </div>
    </>
  );
}
