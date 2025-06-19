import Main_nav from "@/section/Main_nav";
import Main_banner from "@/section/Main_banner";
import Main_box from "@/section/Main_box";
import Category from "@/section/Category";
import Seller from "@/section/Seller";
import QC from "@/section/QC";
import News from "@/section/News";
import Product from "@/section/Product";
import Present from "@/section/Present";
import Keyword from "@/section/Keyword";
import Test_API from "@/section/Test_API";
import UseGetPolices from "@/section/Test_/useGetPolices";
export default function Home() {
  return (
    <>
      <UseGetPolices />
      <main className="bg-bg relative">
        <div className="bg-[#E9FFFB] pb-5">
          <Test_API />
          <Main_nav />
          <Main_banner />
          <Main_box />
        </div>
        <Category />
        <Seller />
        <QC />
        <News />
        <Product />
        <Present />
        <Keyword />
      </main>
    </>
  );
}
