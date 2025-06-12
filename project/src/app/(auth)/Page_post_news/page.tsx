import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Keyword from "@/app/Keyword";
import Present from "@/app/Present";
import Post_news_left from "./Post_news_left";
import Post_new_right from "./Post_new_right";
import Pagination_sub from "./Pagination";

export default function page_post_news() {
  return (
    <>
      <Header />
      <main className=" bg-bg px-16 py-10">
        <div className="flex justify-between max-lg:justify-center">
          <Post_news_left />
          <hr />
          <Post_new_right />
        </div>
        <Pagination_sub />
      </main>
      <Present />
      <Keyword />
      <Footer />
    </>
  );
}
