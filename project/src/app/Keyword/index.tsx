import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const Data = [
  {
    text_1: "Cà phê bột",
    text_2: "Sỉ cà phê số lượng lớn",
    text_3: "Cà phê sỉ Bình Dương",
    text_4: "Cà phê giá rẻ",
    text_5: "Cà phê rang xay",
    text_6: "Cà phê chất lượng",
    text_7: "Cà phê sữa",
    text_8: "Cà phê củi",
  },
];
export default function Keyword() {
  return (
    <>
      <Table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
        <TableBody>
          {Data.map((item) => (
            <TableRow key={item.text_1}>
              <TableCell className="border-none px-2 py-1">
                {item.text_1}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_2}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_3}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_4}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_5}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_6}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_7}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_8}
              </TableCell>
            </TableRow>
          ))}
          {Data.map((item) => (
            <TableRow key={item.text_1}>
              <TableCell className="border-none px-2 py-1">
                {item.text_1}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_2}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_3}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_4}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_5}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_6}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_7}
              </TableCell>
              <TableCell className="border-none px-2 py-1">
                {item.text_8}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className="flex flex-col text-center overflow-scroll text-nowrap">
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
        <table className="flex justify-center mx-auto my-3 text-[#5b5b5b] w-full">
          <tr>
            <td className="border-none px-2 py-1">Cà phê bột</td>
            <td className="border-none px-2 py-1">Sỉ cà phê số lượng lớn</td>
            <td className="border-none px-2 py-1">Cà phê sỉ Bình Dương</td>
            <td className="border-none px-2 py-1">Cà phê giá rẻ</td>
            <td className="border-none px-2 py-1">Cà phê rang xay</td>
            <td className="border-none px-2 py-1">Cà phê chất lượng</td>
            <td className="border-none px-2 py-1">Cà phê sữa</td>
            <td className="border-none px-2 py-1">Cà phê củi</td>
          </tr>
        </table>
      </div> */}
    </>
  );
}
