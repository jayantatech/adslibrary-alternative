"use client";

import React, { useState } from "react";
import { MultiSelect } from "@/components/multi-select";

interface MultiSelectSearchProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  onSelect: (selectedValues: string[]) => void;
}

function MultiSelectSearch({
  options,
  placeholder,
  onSelect,
}: MultiSelectSearchProps) {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const handleValueChange = (selectedValues: string[]) => {
    setSelectedFrameworks(selectedValues);
    onSelect(selectedValues);
  };

  function clearSelectedData() {
    setSelectedFrameworks([]);
  }

  return (
    <MultiSelect
      options={options}
      onValueChange={handleValueChange}
      defaultValue={selectedFrameworks}
      placeholder={placeholder}
      variant="secondary"
      maxCount={1}
      className="w-auto max-md:w-full  max-xl-desktop:w-1/2 max-ultra-desktop:w-1/3  min-w-[240px]  bg-white hover:bg-white border border-gray-400"
    />
  );
}

export default MultiSelectSearch;
