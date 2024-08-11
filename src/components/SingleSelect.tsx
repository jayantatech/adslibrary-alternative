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
      <SelectTrigger className="w-[180px] border  shadow-md shadow-slate-200 h-[39px] outline-none max-md:min-w-[330px] max-lg:w-[320px] border-gray-400">
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
