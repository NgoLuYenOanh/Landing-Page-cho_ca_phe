import Image from "next/image";
interface IPost_left {
  id: number;
  img: string;
  title: string;
  paragraph: string;
}
interface Post_left_list_props {
  post: IPost_left[];
}

export default function Post_left({ post }: Post_left_list_props) {
  return (
    <>
      <div className="max-lg:w-8/10 max-lg:justify-center w-7/10 flex flex-col gap-6 mb-5">
        {post.map((item) => (
          <div
            key={item.id}
            className="flex flex-row max-sm:flex-col gap-4 bg-[#fff] rounded-3xl"
          >
            <Image
              src={item.img}
              className="rounded-3xl"
              alt=""
              width={371}
              height={208}
            />
            <div className="">
              <a href="" className="text-2xl hover:text-main">
                {item.title}
              </a>
              <p className="text-[#999999] ">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
