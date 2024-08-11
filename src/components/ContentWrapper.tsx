import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1488px] h-auto mx-auto px-4 lg:px-6">
      {children}
    </div>
  );
};

export default ContentWrapper;
