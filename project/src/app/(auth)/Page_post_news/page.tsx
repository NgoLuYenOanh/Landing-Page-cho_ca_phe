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
      <main className="bg-bg grid grid-cols-2">
        <Post_news_left />
        <Post_new_right />
      </main>
      <Present />
      <Keyword />
      <Footer />
    </>
  );
}
