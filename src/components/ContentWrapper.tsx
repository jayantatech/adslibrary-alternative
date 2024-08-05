// import React from "react";

// const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="w-[1488px] max-lg:w-full h-auto mx-auto px-3 max-lg:px-4">
//       {children}
//     </div>
//   );
// };

// export default ContentWrapper;
import React from "react";

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-w-[1488px] h-auto mx-auto px-4 lg:px-6">
      {children}
    </div>
  );
};

export default ContentWrapper;
