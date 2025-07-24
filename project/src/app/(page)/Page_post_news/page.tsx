import Post_news_left from "./Post_news_left";
import Post_new_right from "./Post_new_right";
import List_header from "@/section/Main_nav/List_header";

export default function Page_post_news() {
  return (
    <>
      <main className=" bg-bg px-16 py-10">
        <div className="flex justify-around max-lg:flex-col max-lg:justify-center">
          <div className="bg-white p-5 mb-5 ">
            <List_header />
          </div>
          <Post_news_left />
          <Post_new_right />
        </div>
      </main>
    </>
  );
}
