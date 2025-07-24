import Product from "./Product_list/index";
import Product_filter from "./Filter";
// import Test from "./Test";
export default function Page_product() {
  return (
    <>
      <main className="flex justify-between bg-bg h-full px-16 py-10">
        <Product_filter />
        <Product />
        {/* <Test /> */}
      </main>
    </>
  );
}
