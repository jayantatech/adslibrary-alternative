"use client";
import { useState } from "react";
import { FaFolder, FaFileAlt, FaPlus, FaLayerGroup } from "react-icons/fa";
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdFolderCopy,
} from "react-icons/md";
import { RiAddBoxFill } from "react-icons/ri";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CreateFolderBox from "./CreateFolderBox";
import CreateGroupBox from "./CreateGroupBox";

interface Folder {
  name: string;
  files: string[];
  subFolders: Folder[];
  isOpen: boolean;
}

const FolderTree = () => {
  const [folders, setFolders] = useState<Folder[]>([]);

  const createFolder = (parentIndex: number | null = null) => {
    const folderName = prompt("Enter the folder name:");
    if (!folderName) return;

    const newFolder: Folder = {
      name: folderName,
      files: [],
      subFolders: [],
      isOpen: false,
    };

    if (parentIndex === null) {
      setFolders([...folders, newFolder]);
    } else {
      const updatedFolders = [...folders];
      const addFolderToParent = (folders: Folder[], index: number) => {
        if (index === parentIndex) {
          folders[index].subFolders.push(newFolder);
        } else {
          folders.forEach((folder, idx) =>
            addFolderToParent(folder.subFolders, index)
          );
        }
      };
      addFolderToParent(updatedFolders, parentIndex);
      setFolders(updatedFolders);
    }
  };

  const createFile = (parentIndex: number) => {
    const fileName = prompt("Enter the file name:");
    if (!fileName) return;

    const updatedFolders = [...folders];
    const addFileToFolder = (folders: Folder[], index: number) => {
      if (index === parentIndex) {
        folders[index].files.push(fileName);
      } else {
        folders.forEach((folder, idx) =>
          addFileToFolder(folder.subFolders, index)
        );
      }
    };
    addFileToFolder(updatedFolders, parentIndex);
    setFolders(updatedFolders);
  };

  const toggleFolder = (index: number) => {
    const updatedFolders = [...folders];
    updatedFolders[index].isOpen = !updatedFolders[index].isOpen;
    setFolders(updatedFolders);
  };

  const renderFolderTree = (folders: Folder[], parentIndex: number | null) =>
    folders.map((folder, index) => (
      <div key={index} className=" mt-2 bg-red-300 py-2">
        <div
          className="flex items-center gap-2 cursor-pointer bg-blue-200 py-2"
          onClick={() => toggleFolder(index)}
        >
          {folder.isOpen ? (
            <MdKeyboardArrowDown className="text-mainBlue" />
          ) : (
            <MdKeyboardArrowRight className="text-mainBlue" />
          )}
          <FaFolder className="text-yellow-500" />
          <span className="font-semibold text-white">{folder.name}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              createFolder(index);
            }}
            className="ml-2 text-blue-500 hover:text-blue-400"
          >
            <FaPlus />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              createFile(index);
            }}
            className="text-green-500 hover:text-green-400"
          >
            <FaPlus />
          </button>
        </div>
        {folder.isOpen && (
          <div className="pl-6">
            {folder.files.map((file, fileIndex) => (
              <div key={fileIndex} className="flex items-center gap-2 mt-2">
                <FaFileAlt className="text-gray-400" />
                <span className="text-gray-300">{file}</span>
              </div>
            ))}
            {renderFolderTree(folder.subFolders, index)}
          </div>
        )}
      </div>
    ));

  return (
    <div>
      <Popover>
        <div className="flex items-center justify-between py-2 border-t-2 border-slate-200">
          <span className="font-OpenSans text-[16px] font-semibold">
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

      <button
        onClick={() => createFolder(null)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition-all"
      >
        Create Folder
      </button>
      <div className="mt-4">{renderFolderTree(folders, null)}</div>
    </div>
  );
};

export default FolderTree;
