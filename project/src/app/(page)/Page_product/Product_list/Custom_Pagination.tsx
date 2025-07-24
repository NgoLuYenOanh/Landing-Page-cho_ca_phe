"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export default function Custom_Pagination() {
  const rowsPerPage = 2;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              startIndex === 0 ? "pointer-events-none opacity-50" : undefined
            }
            onClick={() => {
              setStartIndex(startIndex - rowsPerPage);
              setEndIndex(endIndex - rowsPerPage);
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            className={
              endIndex === 100 ? "pointer-events-none opacity-50" : undefined
            }
            onClick={() => {
              setStartIndex(startIndex + rowsPerPage);
              setEndIndex(endIndex + rowsPerPage);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
