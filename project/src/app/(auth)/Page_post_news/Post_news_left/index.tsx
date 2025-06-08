import Post_news_1 from "../../../../../public/img/post_news (1).png";
import Post_news_2 from "../../../../../public/img/post_news (2).png";
import Post_news_3 from "../../../../../public/img/post_news (3).png";
import Post_news_5 from "../../../../../public/img/post_news (5).png";
import Post_news_6 from "../../../../../public/img/post_news (6).png";
import Post_left from "./components/index";

export default function Post_news_left() {
  const Post = [
    {
      id: 1,
      img: Post_news_1,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 2,
      img: Post_news_2,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 3,
      img: Post_news_3,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 5,
      img: Post_news_5,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
    {
      id: 6,
      img: Post_news_6,
      title:
        "Luật chống phá rừng của EU: Đòn bẩy thúc đẩy ngành cà phê phát triển",
      paragraph:
        "Đạo luật về chống phá rừng của EU có thể là đòn bẩy thúc đẩy ngành cà phê phát triển...",
    },
  ];
  return (
    <>
      <Post_left post={Post} />
    </>
  );
}
