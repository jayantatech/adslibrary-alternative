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

  return (
    <MultiSelect
      options={options}
      onValueChange={handleValueChange}
      defaultValue={selectedFrameworks}
      placeholder={placeholder}
      variant="secondary"
      maxCount={1}
      className="w-auto max-md:min-w-[330px] max-w-[420px] max-lg:max-w-[320px] min-w-[240px] max-lg:min-w-[320px] bg-white hover:bg-white border border-gray-400"
    />
  );
}

export default MultiSelectSearch;
