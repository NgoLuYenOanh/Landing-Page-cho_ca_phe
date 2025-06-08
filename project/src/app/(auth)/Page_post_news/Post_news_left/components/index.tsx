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
      {post.map((item) => (
        <div key={item.id} className="max-lg:w-8/10 w-6/10">
          <a href="" className=" flex flex-row bg-[#fff] gap-4 rounded-3xl">
            <Image
              src={item.img}
              className="rounded-3xl"
              alt=""
              width={371}
              height={208}
            />
            <div className="">
              <h2 className="text-2xl hover:text-main">{item.title}</h2>
              <p className="text-[#999999] ">{item.paragraph}</p>
            </div>
          </a>
        </div>
      ))}
    </>
  );
}
