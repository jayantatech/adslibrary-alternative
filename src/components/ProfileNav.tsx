"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ProfileNav = () => {
  const router = usePathname();

  const currentPath = router?.split("/").pop();

  return (
    <div>
      <div className="w-full h-[44px] bg-white border-2 border-slate-200 p-3 max-md:p-2 rounded-md  hidden max-lg:flex items-center justify-between gap-3">
        <Link
          href={"/panel/profile"}
          className={`text-[16px] font-OpenSans w-full font-semibold  md:px-3 border py-1 max-md:py-[2px] rounded-md flex items-center justify-center hover:scale-[.98] transition-all duration-150 cursor-pointer ${
            currentPath === "profile"
              ? "bg-mainBlue text-white"
              : "bg-lightBlue"
          }`}
        >
          My Profile
        </Link>
        <Link
          href={" "}
          className={`text-[16px] font-OpenSans w-full font-semibold  md:px-3 border py-1 max-md:py-[2px] rounded-md items-center justify-center hover:scale-[.98] transition-all duration-150 cursor-pointer max-lg:hidden ${
            currentPath === "invoice"
              ? "bg-mainBlue text-white"
              : "bg-lightBlue"
          }`}
        >
          {" "}
          Invoice
        </Link>
        <Link
          href={"/panel/myTeam"}
          className={`text-[16px] font-OpenSans w-full font-semibold  md:px-3 border py-1 max-md:py-[2px] rounded-md flex items-center justify-center hover:scale-[.98] transition-all duration-150 cursor-pointer ${
            currentPath === "myTeam" ? "bg-mainBlue text-white" : "bg-lightBlue"
          }`}
        >
          {" "}
          My Team
        </Link>
      </div>
      {/* Large Screen Nav */}
      <div className="w-[236px] h-[220px] bg-slate-200  shadow border-2 rounded p-2 hidden lg:flex gap-1 flex-col sticky top-28 left-0">
        <Link
          href={"/panel/profile"}
          className={`w-full h-[38px] p-2 border-2 border-slate-200 rounded-md flex items-center justify-start hover:scale-[.98] transition-all duration-150 cursor-pointer  ${
            currentPath === "profile"
              ? "bg-mainBlue text-white"
              : "bg-lightBlue"
          }`}
        >
          <span className="text-[16px] font-OpenSans font-semibold">
            My Profile
          </span>
        </Link>
        <Link
          href={" "}
          className={`w-full h-[38px] p-2 border-2 border-slate-200  flex items-center justify-start hover:scale-[.98] transition-all duration-150 cursor-pointer rounded-md lg:hidden  ${
            currentPath === "invoice"
              ? "bg-mainBlue text-white"
              : "bg-lightBlue"
          }`}
        >
          <span className="text-[16px] font-OpenSans font-semibold">
            Invoice
          </span>
        </Link>
        <Link
          href={"/panel/myTeam"}
          className={`w-full h-[38px] p-2 border-2 border-slate-200  rounded-md flex items-center justify-start hover:scale-[.98] transition-all duration-150 cursor-pointer ${
            currentPath === "myTeam" ? "bg-mainBlue text-white" : "bg-lightBlue"
          }`}
        >
          <span className="text-[16px] font-OpenSans font-semibold">
            My Team
          </span>
        </Link>
      </div>{" "}
    </div>
  );
};

export default ProfileNav;
