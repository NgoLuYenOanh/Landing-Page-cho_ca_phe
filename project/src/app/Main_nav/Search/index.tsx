"use client";
import { AutoComplete, type Option } from "@/components/ui/autocomplete";
import { useState } from "react";

const FRAMEWORKS = [
  {
    value: "Cà phê rang xay",
    label: "Cà phê rang xay",
  },
  {
    value: "Cà phê rang củi",
    label: "Cà phê rang củi",
  },
  {
    value: "Cà phê",
    label: "Cà phê",
  },
];

export default function Search() {
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisbled] = useState(false);
  const [value, setValue] = useState<Option>();

  return (
    <div className="h-8/10 w-full pl-5 rounded-[50px] border-[0.4px] border-solid border-main bg-[#fff] flex flex-col gap-4">
      <AutoComplete
        options={FRAMEWORKS}
        emptyMessage="No results."
        placeholder="Tìm kiếm sản phẩm..."
        isLoading={isLoading}
        onValueChange={setValue}
        value={value}
        disabled={isDisabled}
      />
    </div>
  );
}
