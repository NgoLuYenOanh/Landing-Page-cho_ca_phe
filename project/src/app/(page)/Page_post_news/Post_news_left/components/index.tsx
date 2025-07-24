"use client";
import Image, { StaticImageData } from "next/image";
// import { useEffect, useState } from "react";
interface IPost_left {
  id: number;
  img: StaticImageData;
  paragraph: string;
}
interface Post_left_list_props {
  post: IPost_left[];
}

export default function Post_left({ post }: Post_left_list_props) {
  // const [photos, setPhotos] = useState<IPost_left[]>([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
  //     .then((res) => res.json())
  //     .then((data: IPost_left[]) => setPhotos(data));
  // }, []);

  return (
    <>
      <div className="max-lg:w-full max-lg:justify-center w-9/10 flex flex-col gap-6 ">
        {post.map((item) => (
          <div
            key={item.id}
            className="flex flex-row max-sm:flex-col gap-4 bg-[#fff] rounded-3xl"
          >
            <Image
              src={item.img}
              className="rounded-3xl object-cover"
              alt=""
              width={371}
              height={208}
            />
            <div className="">
              <a href="" className="text-2xl hover:text-main">
                {item.paragraph}
              </a>
              {/* <p className="text-[#999999] ">{paragraph}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
