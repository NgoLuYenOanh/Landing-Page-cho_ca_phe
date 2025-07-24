import Image, { StaticImageData } from "next/image";

interface IPost_right {
  id: number;
  img: StaticImageData;
  title: string;
}
interface Post_right_list_props {
  post: IPost_right[];
}
export default function Post_right({ post }: Post_right_list_props) {
  return (
    <>
      {post.map((item) => (
        <div className="flex gap-3" key={item.id}>
          <Image
            src={item.img}
            className=""
            alt="w-auto h-auto"
            width={62}
            height={62}
          />
          <a href="" className="text-main text-sm font-bold">
            {item.title}
          </a>
        </div>
      ))}
    </>
  );
}
