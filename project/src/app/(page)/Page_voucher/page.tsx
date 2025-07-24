import List_header from "@/section/Main_nav/List_header";

export default function Page_voucher() {
  return (
    <>
      <main className=" bg-bg px-16 py-10">
        <div>
          <div className="bg-white p-5 mb-5 ">
            <List_header />
          </div>
          <h1 className="text-red-600 text-center">HIỆN CHƯA CÓ VOUCHER</h1>
        </div>
      </main>
    </>
  );
}
