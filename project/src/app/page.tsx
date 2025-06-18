import Main_nav from "./Main_nav";
import Main_banner from "./Main_banner";
import Main_box from "./Main_box";
import Category from "./Category";
import Seller from "./Seller";
import QC from "./QC";
import Newss from "./Newss";
import Product from "./Product";
import Present from "./Present";
import Keyword from "./Keyword";
import Test_API from "./Test_API";
import UseGetPolices from "@/app/Test_/useGetPolices";
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
        <Newss />
        <Product />
        <Present />
        <Keyword />
      </main>
    </>
  );
}
