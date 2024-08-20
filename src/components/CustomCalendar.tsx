"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  addDays,
  format,
  subDays,
  startOfMonth,
  subMonths,
  startOfYear,
  endOfMonth,
  subYears,
} from "date-fns";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
const presets = {
  "Last 7 Days": () => ({
    from: subDays(new Date(), 7),
    to: new Date(),
  }),
  "Last 14 Days": () => ({
    from: subDays(new Date(), 14),
    to: new Date(),
  }),
  "Last 1 Month": () => ({
    from: startOfMonth(subMonths(new Date(), 1)),
    to: endOfMonth(subMonths(new Date(), 1)),
  }),
  "Last 3 Months": () => ({
    from: startOfMonth(subMonths(new Date(), 3)),
    to: endOfMonth(subMonths(new Date(), 1)),
  }),
  "Last 6 Months": () => ({
    from: startOfMonth(subMonths(new Date(), 6)),
    to: endOfMonth(subMonths(new Date(), 1)),
  }),
  "Last 1 Year": () => ({
    from: subYears(new Date(), 1), // Go back exactly 1 year from today
    to: new Date(), // Today's date
  }),
};

export function CustomDatePicker({
  className,
  onSelect,
  topLabel,
}: {
  className?: React.HTMLAttributes<HTMLDivElement>;
  onSelect: (value: DateRange) => void;
  topLabel: string;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const handlePresetClick = (preset: keyof typeof presets) => {
    const selectedDateRange = presets[preset]();
    setDate(selectedDateRange);
    onSelect(selectedDateRange);
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "  max-xl-desktop:w-full justify-start text-left max-lg:font-semibold font-medium xl:font-semibold bg-white h-[39px] w-auto max-md:w-full shadow hover:bg-white border border-gray-400 ",
              !date && "text-muted-foreground "
            )}
          >
            {date ? (
              <span className="flex items-center justify-between w-auto rounded py-0 mx-auto -translate-y-6 -translate-x-2.5 absolute bg-white border text-[12px] px-1 text-muted-foreground ">
                {`${topLabel}`}
              </span>
            ) : null}

            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              date.from ? (
                date.to ? (
                  <div className="bg-[#f1f5f9] px-1 rounded font-semibold text-gray-600 max-lg:text-[13px] text-[13px] font-OpenSans">
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </div>
                ) : (
                  format(date.from, "LLL dd, y")
                )
              ) : (
                <span>Pick the starting and end date</span>
              )
            ) : (
              <span className="text-muted-foreground">
                Pick the starting and end date
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 " align="center" side="top">
          <div className="flex flex-col gap-2">
            <div className="max-md:block hidden">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from || new Date()} // Default to today's date if no date is selected
                selected={date}
                onSelect={setDate}
                numberOfMonths={1}
              />
            </div>
            <div className="md:block hidden">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from || new Date()} // Default to today's date if no date is selected
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </div>
            <div className=" max-md:w-full h-auto grid grid-cols-3 max-md:grid-cols-2 max-md:grid-rows-3 grid-rows-2 gap-2 mb-2  px-2 py-2">
              {Object.keys(presets).map((label) => (
                <Button
                  key={label}
                  variant="outline"
                  onClick={() =>
                    handlePresetClick(label as keyof typeof presets)
                  }
                  className="col-span-1 hover:bg-blue-100 border hover:border-mainBlue"
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
