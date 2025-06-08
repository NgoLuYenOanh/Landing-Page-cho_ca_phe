import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Keyword from "@/app/Keyword";
import Present from "@/app/Present";
import Post_news_left from "./Post_news_left";
import Post_new_right from "./Post_new_right";

export default function page_post_news() {
  return (
    <>
      <Header />
      <main className=" bg-bg flex flex-wrap justify-around px-16 py-10">
        <Post_news_left />
        <hr />
        <Post_new_right />
      </main>
      <Present />
      <Keyword />
      <Footer />
    </>
  );
}
