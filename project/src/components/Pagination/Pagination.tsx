"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  totalItems: number; // Tổng số item
  itemsPerPage: number; // Số item trên mỗi trang
  currentPage: number; // Trang hiện tại
  onPageChange: (page: number) => void; // Callback khi đổi trang
}

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Cuộn lên đầu trang
    }
  };

  const renderPageNumbers = () => {
    const pages: number[] = [];

    // Hiển thị tối đa 5 trang: trước/sau trang hiện tại
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages.map((page) => (
      <Button
        key={page}
        variant={page === currentPage ? "default" : "outline"}
        onClick={() => goToPage(page)}
        className="px-4 py-2"
      >
        {page}
      </Button>
    ));
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
      <Button
        variant="outline"
        size="sm"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>

      {renderPageNumbers()}

      <Button
        variant="outline"
        size="sm"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
