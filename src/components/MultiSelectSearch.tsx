// // "use client";

// // import React, { useState } from "react";
// // import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// // interface Option {
// //   value: string;
// //   label: string;
// // }

// // const options: Option[] = [
// //   { value: "video", label: "Video" },
// //   { value: "image", label: "Image" },
// //   { value: "carousel", label: "Carousel" },
// // ];

// // const MultiSelectSearch = () => {
// //   const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const handleSelectOption = (option: Option) => {
// //     if (selectedOptions.find((selected) => selected.value === option.value)) {
// //       setSelectedOptions(
// //         selectedOptions.filter((selected) => selected.value !== option.value)
// //       );
// //     } else {
// //       setSelectedOptions([...selectedOptions, option]);
// //     }
// //   };

// //   const handleRemoveOption = (option: Option) => {
// //     setSelectedOptions(
// //       selectedOptions.filter((selected) => selected.value !== option.value)
// //     );
// //   };

// //   const filteredOptions = options.filter((option) =>
// //     option.label.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="relative w-fit min-w-64 font-OpenSans border rounded-md  hover:border-mainBlue">
// //       {/* Selected Options */}
// //       <div
// //         className="border border-gray-300 px-1.5 h-[34px] rounded-md  cursor-pointer bg-white flex justify-between items-center"
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <div className="flex flex-wrap gap-1">
// //           {selectedOptions?.length === 0 ? (
// //             <span className="text-gray-500 text-[15px] font-semibold">
// //               Category
// //             </span>
// //           ) : (
// //             <>
// //               {selectedOptions?.slice(0, 2).map((option) => (
// //                 <div
// //                   key={option.value}
// //                   className="bg-blue-500 text-white px-1.5 py-1 rounded flex items-center gap-1"
// //                 >
// //                   {option.label}
// //                   <button
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleRemoveOption(option);
// //                     }}
// //                   >
// //                     &times;
// //                   </button>
// //                 </div>
// //               ))}
// //               {selectedOptions.length > 2 && (
// //                 <div className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
// //                   +{selectedOptions.length - 2} more
// //                 </div>
// //               )}
// //             </>
// //           )}
// //         </div>
// //         {/* Arrow Indicator */}
// //         <div>
// //           {isOpen ? (
// //             <MdKeyboardArrowDown className="text-[22px]" />
// //           ) : (
// //             <MdKeyboardArrowUp className="text-[22px]" />
// //           )}
// //         </div>
// //       </div>

// //       {/* Dropdown Menu */}
// //       {isOpen && (
// //         <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 px-2 py-1">
// //           <input
// //             type="text"
// //             className="w-full p-2 border-b border-gray-200 outline-none text-[14px] font-OpenSans mb-1"
// //             placeholder="Search..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //           <ul className="">
// //             {filteredOptions.map((option) => (
// //               <li
// //                 key={option.value}
// //                 className={`px-2 py-1 text-[15px] font-OpenSans cursor-pointer hover:bg-gray-100 rounded-md mb-1 ${
// //                   selectedOptions.find(
// //                     (selected) => selected.value === option.value
// //                   )
// //                     ? "bg-blue-200"
// //                     : ""
// //                 }`}
// //                 onClick={() => handleSelectOption(option)}
// //               >
// //                 {option.label}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MultiSelectSearch;

// "use client";

// import React, { useState } from "react";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// interface Option {
//   value: string;
//   label: string;
// }

// interface MultiSelectSearchProps {
//   options: Option[];
//   placeholder: string;
// }

// const MultiSelectSearch: React.FC<MultiSelectSearchProps> = ({
//   options,
//   placeholder,
// }) => {
//   const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSelectOption = (option: Option) => {
//     if (selectedOptions.find((selected) => selected.value === option.value)) {
//       setSelectedOptions(
//         selectedOptions.filter((selected) => selected.value !== option.value)
//       );
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const handleRemoveOption = (option: Option) => {
//     setSelectedOptions(
//       selectedOptions.filter((selected) => selected.value !== option.value)
//     );
//   };

//   const filteredOptions = options.filter((option) =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative w-fit min-w-[228px] font-OpenSans  rounded-md hover:border-mainBlue">
//       {/* Selected Options */}
//       <div
//         className="border border-gray-300 px-1.5 h-[34px] rounded-md cursor-pointer bg-white flex justify-between items-center"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="flex flex-wrap gap-1">
//           {selectedOptions?.length === 0 ? (
//             <span className="text-gray-500 text-[15px] font-semibold">
//               {placeholder}
//             </span>
//           ) : (
//             <>
//               {selectedOptions?.slice(0, 2).map((option) => (
//                 <div
//                   key={option.value}
//                   className="bg-blue-500 text-white px-1.5 py-1 rounded flex items-center gap-1"
//                 >
//                   {option.label}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleRemoveOption(option);
//                     }}
//                   >
//                     &times;
//                   </button>
//                 </div>
//               ))}
//               {selectedOptions.length > 2 && (
//                 <div className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
//                   +{selectedOptions.length - 2} more
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//         {/* Arrow Indicator */}
//         <div>
//           {isOpen ? (
//             <MdKeyboardArrowDown className="text-[22px]" />
//           ) : (
//             <MdKeyboardArrowUp className="text-[22px]" />
//           )}
//         </div>
//       </div>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 px-2 py-1">
//           <input
//             type="text"
//             className="w-full p-2 border-b border-gray-200 outline-none text-[14px] font-OpenSans mb-1"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <ul className="">
//             {filteredOptions.map((option) => (
//               <li
//                 key={option.value}
//                 className={`px-2 py-1 text-[15px] font-OpenSans cursor-pointer hover:bg-gray-100 rounded-md mb-1 ${
//                   selectedOptions.find(
//                     (selected) => selected.value === option.value
//                   )
//                     ? "bg-blue-200"
//                     : ""
//                 }`}
//                 onClick={() => handleSelectOption(option)}
//               >
//                 {option.label}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiSelectSearch;

// "use client";

// // import React, { useState } from "react";
// // import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// // interface Option {
// //   value: string;
// //   label: string;
// // }

// // const options: Option[] = [
// //   { value: "video", label: "Video" },
// //   { value: "image", label: "Image" },
// //   { value: "carousel", label: "Carousel" },
// // ];

// // const MultiSelectSearch = () => {
// //   const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const handleSelectOption = (option: Option) => {
// //     if (selectedOptions.find((selected) => selected.value === option.value)) {
// //       setSelectedOptions(
// //         selectedOptions.filter((selected) => selected.value !== option.value)
// //       );
// //     } else {
// //       setSelectedOptions([...selectedOptions, option]);
// //     }
// //   };

// //   const handleRemoveOption = (option: Option) => {
// //     setSelectedOptions(
// //       selectedOptions.filter((selected) => selected.value !== option.value)
// //     );
// //   };

// //   const filteredOptions = options.filter((option) =>
// //     option.label.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="relative w-fit min-w-64 font-OpenSans border rounded-md  hover:border-mainBlue">
// //       {/* Selected Options */}
// //       <div
// //         className="border border-gray-300 px-1.5 h-[34px] rounded-md  cursor-pointer bg-white flex justify-between items-center"
// //         onClick={() => setIsOpen(!isOpen)}
// //       >
// //         <div className="flex flex-wrap gap-1">
// //           {selectedOptions?.length === 0 ? (
// //             <span className="text-gray-500 text-[15px] font-semibold">
// //               Category
// //             </span>
// //           ) : (
// //             <>
// //               {selectedOptions?.slice(0, 2).map((option) => (
// //                 <div
// //                   key={option.value}
// //                   className="bg-blue-500 text-white px-1.5 py-1 rounded flex items-center gap-1"
// //                 >
// //                   {option.label}
// //                   <button
// //                     onClick={(e) => {
// //                       e.stopPropagation();
// //                       handleRemoveOption(option);
// //                     }}
// //                   >
// //                     &times;
// //                   </button>
// //                 </div>
// //               ))}
// //               {selectedOptions.length > 2 && (
// //                 <div className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
// //                   +{selectedOptions.length - 2} more
// //                 </div>
// //               )}
// //             </>
// //           )}
// //         </div>
// //         {/* Arrow Indicator */}
// //         <div>
// //           {isOpen ? (
// //             <MdKeyboardArrowDown className="text-[22px]" />
// //           ) : (
// //             <MdKeyboardArrowUp className="text-[22px]" />
// //           )}
// //         </div>
// //       </div>

// //       {/* Dropdown Menu */}
// //       {isOpen && (
// //         <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 px-2 py-1">
// //           <input
// //             type="text"
// //             className="w-full p-2 border-b border-gray-200 outline-none text-[14px] font-OpenSans mb-1"
// //             placeholder="Search..."
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //           />
// //           <ul className="">
// //             {filteredOptions.map((option) => (
// //               <li
// //                 key={option.value}
// //                 className={`px-2 py-1 text-[15px] font-OpenSans cursor-pointer hover:bg-gray-100 rounded-md mb-1 ${
// //                   selectedOptions.find(
// //                     (selected) => selected.value === option.value
// //                   )
// //                     ? "bg-blue-200"
// //                     : ""
// //                 }`}
// //                 onClick={() => handleSelectOption(option)}
// //               >
// //                 {option.label}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MultiSelectSearch;

// "use client";

// import React, { useState } from "react";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

// interface Option {
//   value: string;
//   label: string;
// }

// interface MultiSelectSearchProps {
//   options: Option[];
//   placeholder: string;
// }

// const MultiSelectSearch: React.FC<MultiSelectSearchProps> = ({
//   options,
//   placeholder,
// }) => {
//   const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSelectOption = (option: Option) => {
//     if (selectedOptions.find((selected) => selected.value === option.value)) {
//       setSelectedOptions(
//         selectedOptions.filter((selected) => selected.value !== option.value)
//       );
//     } else {
//       setSelectedOptions([...selectedOptions, option]);
//     }
//   };

//   const handleRemoveOption = (option: Option) => {
//     setSelectedOptions(
//       selectedOptions.filter((selected) => selected.value !== option.value)
//     );
//   };

//   const filteredOptions = options.filter((option) =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="relative w-fit min-w-[228px] font-OpenSans  rounded-md hover:border-mainBlue">
//       {/* Selected Options */}
//       <div
//         className="border border-gray-300 px-1.5 h-[34px] rounded-md cursor-pointer bg-white flex justify-between items-center"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <div className="flex flex-wrap gap-1">
//           {selectedOptions?.length === 0 ? (
//             <span className="text-gray-500 text-[15px] font-semibold">
//               {placeholder}
//             </span>
//           ) : (
//             <>
//               {selectedOptions?.slice(0, 2).map((option) => (
//                 <div
//                   key={option.value}
//                   className="bg-blue-500 text-white px-1.5 py-1 rounded flex items-center gap-1"
//                 >
//                   {option.label}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleRemoveOption(option);
//                     }}
//                   >
//                     &times;
//                   </button>
//                 </div>
//               ))}
//               {selectedOptions.length > 2 && (
//                 <div className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
//                   +{selectedOptions.length - 2} more
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//         {/* Arrow Indicator */}
//         <div>
//           {isOpen ? (
//             <MdKeyboardArrowDown className="text-[22px]" />
//           ) : (
//             <MdKeyboardArrowUp className="text-[22px]" />
//           )}
//         </div>
//       </div>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10 px-2 py-1">
//           <input
//             type="text"
//             className="w-full p-2 border-b border-gray-200 outline-none text-[14px] font-OpenSans mb-1"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <ul className="">
//             {filteredOptions.map((option) => (
//               <li
//                 key={option.value}
//                 className={`px-2 py-1 text-[15px] font-OpenSans cursor-pointer hover:bg-gray-100 rounded-md mb-1 ${
//                   selectedOptions.find(
//                     (selected) => selected.value === option.value
//                   )
//                     ? "bg-blue-200"
//                     : ""
//                 }`}
//                 onClick={() => handleSelectOption(option)}
//               >
//                 {option.label}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiSelectSearch;

"use client";

import React, { useState } from "react";
import { MultiSelect } from "@/components/multi-select";
import { Cat, Dog, Fish, Rabbit, Turtle } from "lucide-react";

const frameworksList = [
  { value: "react", label: "React" },
  { value: "angular", label: "Angular" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "ember", label: "Ember" },
];

interface MultiSelectSearchProps {
  options: { value: string; label: string }[];
  placeholder?: string;
}

function MultiSelectSearch({ options, placeholder }: MultiSelectSearchProps) {
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  return (
    // <div className=" lg:min-w-[220px] max-md:min-w-full  w-auto max-lg:min-w-[160px] h-auto bg-white">
    <MultiSelect
      options={options}
      onValueChange={setSelectedFrameworks}
      defaultValue={selectedFrameworks}
      placeholder={placeholder}
      variant="secondary"
      maxCount={1}
      className="w-auto max-md:min-w-[330px] max-w-[420px] max-lg:max-w-[320px] min-w-[240px] max-lg:min-w-[320px] bg-white hover:bg-white"
    />
  );
}

export default MultiSelectSearch;
