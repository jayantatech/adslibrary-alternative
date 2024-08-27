"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TopBarTabsProp = {
  firstTabLabel: string;
  firstTabLink: string;
  firstTabMatchUrl: string;
  secondTabLabel: string;
  secondTabLink: string;
  secondTabMatchUrl: string;
};
const TopBarTabs = ({
  firstTabLabel,
  firstTabLink,
  firstTabMatchUrl,
  secondTabLabel,
  secondTabLink,
  secondTabMatchUrl,
}: TopBarTabsProp) => {
  const currentPath = usePathname()?.split("/")[2];

  return (
    <>
      <Link
        href={firstTabLink}
        className={`text-[18px] font-OpenSans font-semibold px-3 h-[36px]  rounded-md flex items-center justify-center cursor-pointer max-md:w-3/5 ${
          currentPath === firstTabMatchUrl
            ? "bg-mainBlue text-white "
            : "bg-lightBlue text-black"
        }`}
      >
        {firstTabLabel}{" "}
      </Link>
      <Link
        href={secondTabLink}
        className={`text-[18px] font-OpenSans font-semibold px-3 h-[36px] rounded-md flex items-center justify-center cursor-pointer  max-md:w-1/3 ${
          currentPath === secondTabMatchUrl
            ? "bg-mainBlue text-white "
            : "bg-lightBlue text-black"
        }`}
      >
        {secondTabLabel}{" "}
      </Link>
    </>
  );
};

export default TopBarTabs;
