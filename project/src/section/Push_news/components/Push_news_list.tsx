import { CarouselItem } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

interface ICategory {
  id: number;
  img: StaticImageData;
  paragraph: string;
}

interface Category_list_props {
  post: ICategory[];
}

export default function Category_list({ post }: Category_list_props) {
  return (
    <>
      {post.map((item) => (
        <CarouselItem className="basis-1/7 max-sm:basis-1/3" key={item.id}>
          <a href="#" className="flex flex-col items-center mx-[1%]">
            <Image
              src={item.img}
              alt=""
              className="rounded-[30px] w-20 p-[20px] bg-[#f6f6f7]"
              width={76}
              height={76}
            />
            <p className="text-sm">{item.paragraph}</p>
          </a>
        </CarouselItem>
      ))}
    </>
  );
}
