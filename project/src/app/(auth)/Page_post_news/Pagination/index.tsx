import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function Pagination_sub() {
  return (
    <>
      <Pagination className="">
        <PaginationContent>
          <PaginationItem className="bg-[#fff] rounded-xl ">
            <PaginationPrevious
              className="hover:bg-main hover:text-[#fff]"
              href="#"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="bg-[#fff] rounded-xl hover:bg-main hover:text-[#fff]"
              href="#"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="bg-[#fff] rounded-xl hover:bg-main hover:text-[#fff]"
              href="#"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="bg-[#fff] rounded-xl hover:bg-main hover:text-[#fff]"
              href="#"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="bg-[#fff] rounded-xl hover:bg-main hover:text-[#fff]"
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
