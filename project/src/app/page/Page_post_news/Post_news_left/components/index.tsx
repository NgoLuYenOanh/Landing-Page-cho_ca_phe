"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
interface IPost_left {
  id: number;
  url: string;
  title: string;
}

export default function Post_left() {
  const [photos, setPhotos] = useState<IPost_left[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=10")
      .then((res) => res.json())
      .then((data: IPost_left[]) => setPhotos(data));
  }, []);

  return (
    <>
      <div className="max-lg:w-8/10 max-lg:justify-center w-7/10 flex flex-col gap-6 mb-5">
        {photos.map(({ id, url, title }) => (
          <div
            key={id}
            className="flex flex-row max-sm:flex-col gap-4 bg-[#fff] rounded-3xl"
          >
            <Image
              src={url}
              className="rounded-3xl object-cover"
              alt=""
              width={371}
              height={208}
            />
            <div className="">
              <a href="" className="text-2xl hover:text-main">
                {title}
              </a>
              {/* <p className="text-[#999999] ">{paragraph}</p> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
