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
  topLabel: string;
  options: { value: string; label: string }[];
  onSelect: (value: string | null) => void;
}

const SingleSelect = ({
  label,
  placeholder,
  options,
  onSelect,
  topLabel,
}: SingleSelectProps) => {
  const [value, setValue] = React.useState<string | null>(null);

  const handleValueChange = (selectedValue: string) => {
    setValue(selectedValue);
    onSelect(selectedValue);
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger
        className={`max-md:w-full max-xl-desktop:w-1/2 w-auto min-w-[240px] max-lg:min-w-[320px] shadow relative text-muted-foreground font-OpenSans border border-gray-400   `}
      >
        {value ? (
          <span className="flex items-center justify-between w-auto rounded py-0 mx-auto -translate-y-6 absolute bg-white border text-[12px] px-1 text-muted-foreground -translate-x-2.5 font-semibold">
            {`${topLabel}`}
          </span>
        ) : null}
        <div
          className={`px-2 rounded  font-OpenSans max-lg:font-semibold font-medium xl:font-semibold max-lg:text-[13px] ${
            value
              ? "bg-[#F4F7FA] text-slate-600 border font-semibold "
              : "bg-white"
          }`}
        >
          <SelectValue placeholder={placeholder} />
        </div>
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
