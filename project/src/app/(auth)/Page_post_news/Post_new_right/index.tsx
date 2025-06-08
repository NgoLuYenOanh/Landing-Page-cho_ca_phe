import Image from "next/image";
import Post_news_5 from "../../../../../public/img/post_news (5).png";
import Post_news_7 from "../../../../../public/img/post_news (7).png";
import Post_news_4 from "../../../../../public/img/post_news (4).png";
import Post_news_9 from "../../../../../public/img/post_news (9).png";
import Post_news_6 from "../../../../../public/img/post_news (6).png";
import Post_news_8 from "../../../../../public/img/post_news (8).png";
import Product_list from "@/app/Product/components/Product_list";
import Post_right from "./components";
export default function Post_new_right() {
  const Post = [
    {
      id: 1,
      img: Post_news_5,
      title: "Robusta – Arabica và câu chuyện cà phê Việt",
    },
    {
      id: 2,
      img: Post_news_7,
      title: "Robusta – Arabica và câu chuyện cà phê Việt",
    },
    {
      id: 3,
      img: Post_news_4,
      title: "Robusta – Arabica và câu chuyện cà phê Việt",
    },
    {
      id: 4,
      img: Post_news_9,
      title: "Robusta – Arabica và câu chuyện cà phê Việt",
    },
    {
      id: 5,
      img: Post_news_6,
      title: "Robusta – Arabica và câu chuyện cà phê Việt",
    },
    {
      id: 6,
      img: Post_news_8,
      title: "Robusta – Arabica và câu chuyện cà phê Việt",
    },
  ];
  return (
    <>
      <div className="max-lg:hidden grid gap-3 max-lg:none w-[25%]">
        <div className="bg-[#fff] rounded-3xl grid gap-2">
          <h2 className="text-2xl">Bài viết nổi bật</h2>
          <Post_right post={Post} />
        </div>
        <div className="bg-[#fff] rounded-3xl p-4">
          <h2 className="text-xl font-bold">Từ khoá tìm kiếm</h2>
          <div className="grid grid-cols-2 gap-2">
            <a href="" className="px-2 py-1 border text-center text-[#999999]">
              cà phê ngon
            </a>
            <a href="" className="px-2 py-1 border text-center text-[#999999]">
              thị trường
            </a>
            <a href="" className="px-2 py-1 border text-center text-[#999999]">
              nhà cung cấp
            </a>
            <a href="" className="px-2 py-1 border text-center text-[#999999]">
              sỉ cà phê giá rẻ
            </a>
            <a href="" className="px-2 py-1 border text-center text-[#999999]">
              mua cà phê
            </a>
            <a href="" className="px-2 py-1 border text-center text-[#999999]">
              sản xuất cà phê
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
