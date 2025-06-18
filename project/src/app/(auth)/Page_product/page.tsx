import Keyword from "@/app/Keyword";
import Present from "@/app/Present";
import Product from "./Product_list/index";
import Product_filter from "./Filter";
import Pagination_sub from "../Page_post_news/Pagination";

export default function page_product() {
  return (
    <>
      <main className=" bg-bg px-16 py-10">
        <Product_filter />
        <Product />
        <Pagination_sub />
      </main>
      <Present />
      <Keyword />
    </>
  );
}
