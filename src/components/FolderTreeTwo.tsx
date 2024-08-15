import { FaLayerGroup } from "react-icons/fa";
import { MdFolderCopy } from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CreateFolderBox from "./CreateFolderBox";
import CreateGroupBox from "./CreateGroupBox";
import SidebarFileAndFolder from "./SidebarFileAndFolder";

interface Folder {
  name: string;
  files: string[];
  subFolders: Folder[];
  isOpen: boolean;
}

const FolderTreeTwo = () => {
  const folders = [
    {
      folderName: "Default Folder",
      files: [
        { fileName: "FileOne", url: "/" },
        { fileName: "FileTwo", url: "/" },
      ],
    },
    {
      folderName: "Folder One",
      files: [
        { fileName: "FileThree", url: "/" },
        { fileName: "FileFour", url: "/" },
      ],
    },
    {
      folderName: "Folder Two",
      files: [
        { fileName: "FileThree", url: "/" },
        { fileName: "FileFour", url: "/" },
      ],
    },
  ];
  return (
    <div>
      <Popover>
        <div className="flex items-center justify-between py-2 border-t border-gray-200 ">
          <span className="font-OpenSans text-[16px] font-semibold pt-1">
            My Folders
          </span>
          <PopoverTrigger>
            {" "}
            <RiAddBoxFill className="text-[22px]" />
          </PopoverTrigger>{" "}
        </div>

        <PopoverContent className="w-[148px] p-1.5 border ">
          <div className="w-full  h-auto rounded-md overflow-hidden">
            <CreateFolderBox>
              <div className="w-full h-auto min-h-[44px] hover:bg-lightBlue transition-all duration-150 flex items-center justify-center gap-1 border-b border-gray-300">
                <MdFolderCopy className="text-[18px]" />
                <span className="font-OpenSans text-[14px] font-semibold">
                  Create Folder
                </span>
              </div>
            </CreateFolderBox>
            <CreateGroupBox>
              <div className="w-full h-auto min-h-[44px] hover:bg-lightBlue transition-all duration-150 flex items-center justify-center gap-1">
                <FaLayerGroup className="text-[18px] " />
                <span className="font-OpenSans text-[14px] font-semibold">
                  Create Group{" "}
                </span>
              </div>{" "}
            </CreateGroupBox>
          </div>
        </PopoverContent>
      </Popover>
      <SidebarFileAndFolder folders={folders} />
    </div>
  );
};

export default FolderTreeTwo;
