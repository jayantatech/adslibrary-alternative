// "use client";

// import * as React from "react";
// import { CalendarIcon } from "@radix-ui/react-icons";
// import { addDays, format } from "date-fns";
// import { DateRange } from "react-day-picker"; // Assuming you might still use this for type

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// export function CustomDatePicker({
//   className,
// }: React.HTMLAttributes<HTMLDivElement>) {
//   // Initialize the date state as undefined to show placeholder
//   const [date, setDate] = React.useState<DateRange | undefined>(undefined);

//   return (
//     <div className={cn("grid gap-2", className)}>
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             id="date"
//             variant={"outline"}
//             className={cn(
//               "w-[300px] justify-start text-left font-normal bg-white",
//               !date && "text-muted-foreground" // Ensure this class shows when no date is selected
//             )}
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date ? (
//               date.from ? (
//                 date.to ? (
//                   <>
//                     {format(date.from, "LLL dd, y")} -{" "}
//                     {format(date.to, "LLL dd, y")}
//                   </>
//                 ) : (
//                   format(date.from, "LLL dd, y")
//                 )
//               ) : (
//                 <span>Pick the starting and end date</span>
//               )
//             ) : (
//               <span className="text-muted-foreground">
//                 Pick the starting and end date
//               </span>
//             )}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0" align="start">
//           <Calendar
//             initialFocus
//             mode="range"
//             defaultMonth={date?.from || new Date()} // Default to today's date if no date is selected
//             selected={date}
//             onSelect={setDate}
//             numberOfMonths={2}
//             className=""
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   );
// }

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
} from "date-fns";
import { DateRange } from "react-day-picker"; // Assuming you might still use this for type

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
  " Last 1 Month": () => ({
    from: startOfMonth(subMonths(new Date(), 1)),
    to: endOfMonth(subMonths(new Date(), 1)),
  }),
  " Last 3 Months": () => ({
    from: startOfMonth(subMonths(new Date(), 3)),
    to: endOfMonth(subMonths(new Date(), 3)),
  }),
  " Last 6 Months": () => ({
    from: startOfMonth(subMonths(new Date(), 6)),
    to: endOfMonth(subMonths(new Date(), 6)),
  }),
  " Last 1 Year": () => ({
    from: startOfYear(subMonths(new Date(), 12)),
    to: new Date(),
  }),
};

export function CustomDatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>(undefined);

  const handlePresetClick = (preset: keyof typeof presets) => {
    setDate(presets[preset]());
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] max-lg:w-[410px] max-md:min-w-[330px] max-md:w-[284px] justify-start text-left font-normal bg-white h-[39px] shadow-md hover:bg-white border border-slate-200",
              !date && "text-muted-foreground" // Ensure this class shows when no date is selected
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? (
              date.from ? (
                date.to ? (
                  <>
                    {format(date.from, "LLL dd, y")} -{" "}
                    {format(date.to, "LLL dd, y")}
                  </>
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
        <PopoverContent
          className="w-auto p-0 max-md:translate-y-[278px]"
          align="center"
          side="top"
        >
          <div className="flex flex-col gap-2">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from || new Date()} // Default to today's date if no date is selected
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
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
