"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SingleSelectProps {
  label: string;
  placeholder: string;
  options: { value: string; label: string }[];
  onSelect: (value: string | null) => void;
}

const SingleSelect = ({
  label,
  placeholder,
  options,
  onSelect,
}: SingleSelectProps) => {
  const [value, setValue] = React.useState<string | null>(null);

  const handleValueChange = (selectedValue: string) => {
    setValue(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-auto max-md:w-full max-xl-desktop:w-1/2  max-ultra-desktop:w-1/3  min-w-[240px] max-lg:min-w-[320px] bg-white hover:bg-white border border-gray-400 shadow ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SingleSelect;
