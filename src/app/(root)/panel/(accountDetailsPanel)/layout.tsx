import ContentWrapper from "@/components/ContentWrapper";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-red-300 sticky top-0 left-0">
      <div className="w-full max-w-[1088px] h-auto mx-auto px-4 lg:px-6 pt-28">
        <div className="w-full h-auto bg-gray-300 px-3 py-2 ">
          <div className="w-full h-[160px] bg-gray-300 flex items-center justify-start gap-3">
            <div className="w-[98px] h-[98px] bg-red-200"></div>
            <div className="w-full h-[98px] bg-green-200 flex-1 ">
              <div className="flex flex-col">
                <span className="text-[20px] font-OpenSans font-bold">
                  Jay Biswas
                </span>
                <span className="text-[16px]">Jaybiswas@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default layout;
