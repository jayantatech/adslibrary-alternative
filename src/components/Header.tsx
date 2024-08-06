// "use client";
// import React, { useState } from "react";
// import ContentWrapper from "./ContentWrapper";
// import Image from "next/image";
// import { Logo } from "../../public/images/index";
// import { ChromeIcon } from "../../public/icon/index";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { IoIosMenu, IoMdClose } from "react-icons/io";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full h-auto py-2 bg-amber-300s shadow-md z-50 ">
//       <ContentWrapper>
//         <div className="relative ">
//           <div className="w-full h-[66px] max-lg:h-[58px] bgd-cyan-200 flex items-center justify-between ">
//             <div className="w-[220px] h-full bgd-cyan-300 flex items-center justify-start">
//               <Image src={Logo} alt="logo" className="w-auto h-[34px]" />
//             </div>
//             <nav className="w-[46%] bgd-fuchsia-500 h-full flex items-center justify-start pl-3 max-lg:hidden shrink">
//               <ul className="flex gap-4 font-OpenSans text-[16px] font-medium text-gray-600">
//                 <li className="flex items-center justify-center cursor-pointer gap-1">
//                   Product
//                   <MdOutlineKeyboardArrowDown className="text-[20px]" />
//                 </li>
//                 <li className="cursor-pointer">Pricing</li>
//                 <li className="cursor-pointer">Tutorial</li>
//               </ul>
//             </nav>
//             <div className="w-[530px] h-full flex gap-6 items-center justify-center max-lg:hidden relative">
//               <div className="bg-white w-[44%] h-[40px] flex items-center justify-start px-2 py-1 gap-2 rounded-[4px] border border-black hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500">
//                 <Image
//                   src={ChromeIcon}
//                   alt="logo"
//                   className="w-[26px] h-[26px]"
//                 />
//                 <span className="text-[15px] font-OpenSans">
//                   Install Chrome Extension
//                 </span>
//               </div>
//               <div className="absolute w-[2px] gap-0 h-[40px] border-l border-gray-400"></div>
//               <div className="w-[44%] h-full flex items-center justify-center gap-2">
//                 <button className="w-[110px] h-[40px] bgd-blue-500 text-[15px] rounded-[4px] font-semibold font-OpenSans hover:text-blue-500 border hover:scale-[.98] transition-all duration-200 border-blue-500">
//                   Login
//                 </button>
//                 <button className="w-[110px] h-[40px] bg-blue-600 text-white rounded-[4px] text-[15px] font-semibold font-OpenSans hover:scale-[.98] transition-all duration-200 hover:bg-blue-500">
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//             <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
//               {menuOpen ? (
//                 <IoMdClose className="text-[34px] text-mainBlue cursor-pointer" />
//               ) : (
//                 <IoIosMenu className="text-[34px] text-mainBlue cursor-pointer" />
//               )}
//             </div>
//           </div>
//         </div>
//       </ContentWrapper>
//       <div
//         className={`w-full max-lg:h-full max-md:h-full h-auto bg-lightBlue fixed top-[76px] py-2 px-4 max-md:px-2 lg:hidden transition-all duration-200 z-50 ${
//           menuOpen ? "-translate-y-1" : "-translate-y-[140%]"
//         }`}
//       >
//         <div className="w-full max-lg:h-[280px] max-md:h-[312px] h-auto">
//           <nav className="w-full bgd-fuchsia-500 h-[170px] flex items-start px-1 justify-start">
//             <ul className="flex gap-2 font-OpenSans text-[16px] flex-col w-full h-auto">
//               <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
//                 Product
//                 <MdOutlineKeyboardArrowDown className="text-[20px]" />
//               </li>
//               <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
//                 Pricing
//               </li>
//               <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
//                 Tutorial
//               </li>
//             </ul>
//           </nav>
//           <div className="w-full max-lg:h-[68px] max-md:h-[110px] flex flex-row gap-6 max-md:gap-3 items-center justify-center max-md:flex-col">
//             <div className="bg-white w-1/2 max-md:w-full h-[40px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-gray-300 shadow hover:border-mainBlue hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500">
//               <Image
//                 src={ChromeIcon}
//                 alt="logo"
//                 className="w-[26px] h-[26px]"
//               />
//               <span className="text-[15px] font-OpenSans">
//                 Install Chrome Extension
//               </span>
//             </div>
//             <div className="w-1/2 max-md:w-full h-auto bgd-red-500 flex items-center justify-center gap-2">
//               <button className="w-[50%] h-[40px] bgd-blue-500 text-[15px] rounded-[4px] font-semibold font-OpenSans hover:text-blue-500 border hover:scale-[.98] transition-all duration-200 border-mainBlue shadow">
//                 Login
//               </button>
//               <button className="w-[50%] h-[40px] bg-mainBlue text-white rounded-[4px] text-[15px] font-semibold font-OpenSans hover:scale-[.98] transition-all duration-200 hover:bg-blue-500 shadow">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

"use client";
import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";
import Image from "next/image";
import { Logo } from "../../public/images/index";
import { ChromeIcon } from "../../public/icon/index";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-auto py-2 shadow-sm z-50 sticky top-0 left-0 max-lg:pb-0 bg-lightBlue">
      <ContentWrapper>
        <div className="relative">
          <div className="w-full h-[66px] max-lg:h-[58px] bgd-cyan-200 flex items-center justify-between">
            <div className="w-[220px] h-full bgd-cyan-300 flex items-center justify-start">
              <Image src={Logo} alt="logo" className="w-auto h-[34px]" />
            </div>
            <nav className="w-[46%] bgd-fuchsia-500 h-full flex items-center justify-start pl-3 max-lg:hidden shrink">
              <ul className="flex gap-4 font-OpenSans text-[16px] font-medium text-gray-600">
                <li className="flex items-center justify-center cursor-pointer gap-1">
                  Product
                  <MdOutlineKeyboardArrowDown className="text-[20px]" />
                </li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Tutorial</li>
              </ul>
            </nav>
            <div className="w-[530px] h-full flex gap-6 items-center justify-center max-lg:hidden relative">
              <div className="bg-white w-[44%] h-[40px] flex items-center justify-start px-2 py-1 gap-2 rounded-[4px] border border-gray-300 hover:border-blue-500 hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500">
                <Image
                  src={ChromeIcon}
                  alt="logo"
                  className="w-[26px] h-[26px]"
                />
                <span className="text-[15px] font-OpenSans">
                  Install Chrome Extension
                </span>
              </div>
              <div className="absolute w-[2px] gap-0 h-[40px] border-l border-gray-400"></div>
              <div className="w-[44%] h-full flex items-center justify-center gap-2">
                <button className="w-[110px] h-[40px] bgd-blue-500 text-[15px] rounded-[4px] font-semibold font-OpenSans hover:text-blue-500 border hover:scale-[.98] transition-all duration-200 border-blue-500">
                  Login
                </button>
                <button className="w-[110px] h-[40px] bg-blue-600 text-white rounded-[4px] text-[15px] font-semibold font-OpenSans hover:scale-[.98] transition-all duration-200 hover:bg-blue-500">
                  Sign Up
                </button>
              </div>
            </div>
            <div className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <IoMdClose className="text-[34px] text-mainBlue cursor-pointer" />
              ) : (
                <IoIosMenu className="text-[34px] text-mainBlue cursor-pointer" />
              )}
            </div>
          </div>
        </div>
      </ContentWrapper>
      <div
        className={`w-full max-lg:h-full max-md:h-full h-auto bg-lightBlue fixed top-[76px] py-2 px-4 max-md:px-2 lg:hidden transition-all duration-200 z-50 ${
          menuOpen ? "-translate-y-3" : "-translate-y-[140%]"
        }`}
      >
        <div className="w-full max-lg:h-[280px] max-md:h-[312px] h-auto">
          <nav className="w-full bgd-fuchsia-500 h-[170px] flex items-start px-1 justify-start">
            <ul className="flex gap-2 font-OpenSans text-[16px] flex-col w-full h-auto">
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Product
                <MdOutlineKeyboardArrowDown className="text-[20px]" />
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Pricing
              </li>
              <li className="flex items-center justify-start cursor-pointer gap-1 w-full h-auto py-2 pl-3 border-b">
                Tutorial
              </li>
            </ul>
          </nav>
          <div className="w-full max-lg:h-[68px] max-md:h-[110px] flex flex-row gap-6 max-md:gap-3 items-center justify-center max-md:flex-col">
            <div className="bg-white w-1/2 max-md:w-full h-[40px] flex items-center justify-center px-2 py-1 gap-2 rounded-[4px] border border-gray-300 shadow hover:border-mainBlue hover:scale-[.98] transition-all duration-200 cursor-pointer hover:text-blue-500">
              <Image
                src={ChromeIcon}
                alt="logo"
                className="w-[26px] h-[26px]"
              />
              <span className="text-[15px] font-OpenSans">
                Install Chrome Extension
              </span>
            </div>
            <div className="w-1/2 max-md:w-full h-auto bgd-red-500 flex items-center justify-center gap-2">
              <button className="w-[50%] h-[40px] bgd-blue-500 text-[15px] rounded-[4px] font-semibold font-OpenSans hover:text-blue-500 border hover:scale-[.98] transition-all duration-200 border-mainBlue shadow">
                Login
              </button>
              <button className="w-[50%] h-[40px] bg-mainBlue text-white rounded-[4px] text-[15px] font-semibold font-OpenSans hover:scale-[.98] transition-all duration-200 hover:bg-blue-500 shadow">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
