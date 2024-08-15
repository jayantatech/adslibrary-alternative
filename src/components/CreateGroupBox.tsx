"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateGroupBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const [groupName, setGroupName] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const [groupNameError, setGroupNameError] = useState("");
  const [selectedFolderError, setSelectedFolderError] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (groupName.trim() === "") {
      setGroupNameError("Please enter a group name.");
      hasError = true;
    }

    if (!selectedFolder) {
      setSelectedFolderError("Please select a folder.");
      hasError = true;
    }

    if (!hasError) {
      console.log("Group Created:", {
        groupName,
        groupDescription,
        selectedFolder,
      });
      setGroupName("");
      setGroupDescription("");
      setSelectedFolder(null);
      setOpen(false); // Close the dialog
    }
  };

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
    if (groupNameError) {
      setGroupNameError(""); // Remove error message when typing starts
    }
  };

  const handleGroupDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGroupDescription(e.target.value);
  };

  const handleFolderSelectChange = (value: string) => {
    setSelectedFolder(value);
    if (selectedFolderError) {
      setSelectedFolderError(""); // Remove error message when a folder is selected
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="p-0 w-full h-auto">{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[525px] p-5">
        <DialogHeader>
          <DialogTitle className="font-OpenSans font-bold">
            Create Group
          </DialogTitle>
          <DialogDescription>
            Folders keep your groups organized.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateGroup} className="flex flex-col gap-1">
          <div className="w-full h-auto min-h-[80px] flex flex-col gap-1">
            <Label
              htmlFor="group-name"
              className="text-[16px] font-medium font-OpenSans"
            >
              Group Name
            </Label>
            <input
              id="group-name"
              value={groupName}
              onChange={handleGroupNameChange}
              placeholder="Enter a group name"
              className="w-full h-[40px] px-2 py-1 text-[16px] rounded-md border border-slate-200 font-OpenSans"
            />
            {groupNameError && (
              <p className="text-red-500 text-sm">{groupNameError}</p>
            )}
          </div>

          <div className="w-full h-auto min-h-[80px] flex flex-col gap-1">
            <Label
              htmlFor="group-description"
              className="text-[16px] font-medium font-OpenSans"
            >
              Group Description (Optional)
            </Label>
            <input
              id="group-description"
              value={groupDescription}
              onChange={handleGroupDescriptionChange}
              placeholder="Enter a group description"
              className="w-full h-[40px] px-2 py-1 text-[16px] rounded-md border border-slate-200 font-OpenSans"
            />
          </div>

          <div className="w-full h-auto min-h-[80px] flex flex-col gap-1">
            <Label className="text-[16px] font-medium font-OpenSans">
              Select Folder
            </Label>
            <Select onValueChange={handleFolderSelectChange}>
              <SelectTrigger className="w-full h-[40px] font-semibold font-OpenSans">
                <SelectValue placeholder="Select Your Folder" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select Folder</SelectLabel>
                  <SelectItem value="default-folder">Default Folder</SelectItem>
                  <SelectItem value="folder_one">Folder One</SelectItem>
                  <SelectItem value="folder_two">Folder Two</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {selectedFolderError && (
              <p className="text-red-500 text-sm">{selectedFolderError}</p>
            )}
          </div>

          <DialogFooter>
            <Button
              type="submit"
              className="w-full h-auto bg-mainBlue hover:bg-blue-600 hover:scale-[.98] font-bold font-OpenSans"
            >
              Save Group
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
