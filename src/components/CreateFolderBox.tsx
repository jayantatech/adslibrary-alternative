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

export default function CreateFolderBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const [folderName, setFolderName] = useState("");
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateFolder = (e: React.FormEvent) => {
    e.preventDefault();

    if (folderName.trim() === "") {
      setError("Please enter your folder name.");
    } else {
      // Implement the folder creation logic here
      console.log("Folder Created:", folderName);
      // Reset the input and close the dialog
      setFolderName("");
      setError("");
      setOpen(false); // Close the dialog
    }
  };

  const handleFolderNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
    if (error) {
      setError(""); // Remove the error message when typing starts
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="p-0 w-full h-auto">{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[525px] p-5">
        <DialogHeader>
          <DialogTitle className="font-OpenSans font-bold">
            Create Folder
          </DialogTitle>
          <DialogDescription>
            Folders keep your groups organized.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCreateFolder} className="flex flex-col gap-4">
          <div className="w-full h-auto min-h-[80px] flex flex-col gap-1">
            <Label
              htmlFor="folder-name"
              className="text-[16px] font-medium font-OpenSans"
            >
              Folder Name
            </Label>
            <input
              id="folder-name"
              value={folderName}
              onChange={handleFolderNameChange}
              placeholder="Enter a folder name"
              className="w-full h-[40px] px-2 py-1 text-[16px] rounded-md border border-slate-200 font-OpenSans"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full h-auto bg-mainBlue hover:bg-blue-600 hover:scale-[.98] font-bold font-OpenSans"
            >
              Create Folder
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import React from "react";

// export default function createFolderBox({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <Dialog>
//       <DialogTrigger className="p-0 w-full h-auto">{children}</DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] lg:max-w-[525px] p-5">
//         <DialogHeader>
//           <DialogTitle className="font-OpenSans font-bold">
//             Create Folder
//           </DialogTitle>
//           <DialogDescription>
//             Folders keep your groups organized.
//           </DialogDescription>
//         </DialogHeader>
//         <div className="w-full h-auto min-h-[80px] bg-rded-300 flex flex-col gap-1">
//           {" "}
//           <label htmlFor="" className="text-[16px] font-medium font-OpenSans">
//             Folder Name
//           </label>
// <input
//   placeholder="Enter a folder name"
//   className="w-full h-[40px] px-2 py-1 text-[16px] rounded-md border border-slate-200 font-OpenSans"
// />
//         </div>

//         <DialogFooter>
//           <Button
//             type="submit"
//             className="w-full h-auto bg-mainBlue hover:bg-blue-600 hover:scale-[.98] font-bold font-OpenSans"
//           >
//             Create Folder{" "}
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
