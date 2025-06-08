import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Keyword from "@/app/Keyword";
import Present from "@/app/Present";
import Product from "@/app/Product";

export default function page_product() {
  return (
    <>
      <Header />
      <main className=" bg-bg px-16 py-10">
        <Product />
      </main>
      <Present />
      <Keyword />
      <Footer />
    </>
  );
}
