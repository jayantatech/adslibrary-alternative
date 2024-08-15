"use client";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbLogout2 } from "react-icons/tb";

const UserCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("the isvalu ", isOpen);
  }, [isOpen]);

  return (
    <DropdownMenu onOpenChange={() => setIsOpen(!isOpen)}>
      <DropdownMenuTrigger>
        <div className="w-[220px] px-2 py-2 h-[50px] border-2 border-slate-200 rounded-md bg-white flex gap-2 items-center justify-start">
          <div className="w-[38px] h-[38px] text-white bg-mainBlue rounded-md flex items-center justify-center">
            <FaUser className="text-[22px]" />
          </div>
          <div className="w-auto flex-1 h-auto bg-sdlate-100 flex flex-row items-center justify-center gap-2">
            {" "}
            <div className="w-full h-auto box-border ">
              {" "}
              <span className="text-[16px] text-gray-600 block translate-y-1">
                Jay Biswas
              </span>
              <span className="text-[14px] text-gray-600 block -translate-y-1">
                Free Account
              </span>
            </div>
            <RiArrowDownSFill
              className={`text-[28px] text-black cursor-pointer transform transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-180" : "rotate-0"
              } `}
            />
          </div>
        </div>{" "}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Keyboard shortcuts</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="w-full h-auto flex gap-1">
          {" "}
          <TbLogout2 className="text-[18px]" />
          <span className="text-[16px]">Logout </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserCard;
