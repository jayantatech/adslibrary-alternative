import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AiFillFolderOpen } from "react-icons/ai";
import { BsFileEarmarkPlay } from "react-icons/bs";
import { MdMoreHoriz } from "react-icons/md";

interface FileItem {
  fileName: string;
  url: string;
}

interface Folder {
  folderName: string;
  files: FileItem[];
}

type SidebarFileAndFolderProps = {
  folders: Folder[];
};

function SidebarFileAndFolder({ folders }: SidebarFileAndFolderProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {folders.map((folder, folderIndex) => (
        <AccordionItem
          key={folderIndex}
          value={`item-${folderIndex}`}
          className="border-0"
        >
          <AccordionTrigger className="border-0 h-[36px] rounded no-underline hover:no-underline">
            <div className="w-full h-[28px] flex justify-start gap-1 items-center px-1 font-bold font-OpenSans">
              <AiFillFolderOpen className="text-[22px]" />
              <span className="no-underline hover:no-underline text-[14px]">
                {folder.folderName}
              </span>
            </div>
          </AccordionTrigger>

          <div className="flex flex-col">
            {folder.files.map((file, fileIndex) => (
              <AccordionContent
                key={fileIndex}
                className="no-animation flex flex-col gap-1 pb-1.5 pl-5"
              >
                <div className="w-full h-[28px] hover:bg-slate-200 hover:text-black cursor-pointer pb-1 flex justify-between gap-1 items-center px-1 rounded py-1">
                  <div className="flex gap-1 items-center justify-center">
                    <BsFileEarmarkPlay className="text-[16px]" />
                    <span className="text-[13px]">{file.fileName}</span>
                  </div>
                  <div className="w-auto h-auto flex items-center justify-center px-1 hover:border border border-transparent hover:border-blue-500 cursor-pointer rounded">
                    <MdMoreHoriz className="text-[18px]" />
                  </div>
                </div>
              </AccordionContent>
            ))}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default SidebarFileAndFolder;
