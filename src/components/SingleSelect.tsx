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
}

const SingleSelect: React.FC<SingleSelectProps> = ({
  label,
  placeholder,
  options,
}) => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border border-slate-200 shadow-md shadow-slate-200 h-[39px] outline-none max-md:min-w-[330px] max-lg:w-[320px]">
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
