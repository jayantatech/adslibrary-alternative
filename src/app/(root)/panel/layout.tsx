import PanelSidebar from "@/components/PanelSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full max-lg:w-full max-lg: h-full bg-red-300 min-h-screen flex">
      {/* Sidebar (only visible on large screens) */}
      <div className="hidden lg:block min-w-60">
        <PanelSidebar />
      </div>
      {/* Right section (Header + Content) */}
      <div className="flex-grow flex flex-col">
        {/* Header */}
        <header className="w-full h-16 bg-blue-500 flex items-center justify-center">
          <h1 className="text-white text-lg">Header</h1>
        </header>
        {/* Main content */}
        <section className="flex-grow p-4 bg-lightBlue">{children}</section>
      </div>
    </div>
  );
};

export default RootLayout;

// import PanelSidebar from "@/components/PanelSidebar";

// const RootLayout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="w-full max-lg:w-full max-lg: h-full bg-red-300 min-h-screen flex">
//       {/* Sidebar */}
//       <div className="hidden lg:block">
//         <PanelSidebar />
//       </div>
//       {/* Right section (Header + Content) */}
//       <div className="flex-grow flex flex-col">
//         {/* Header */}
//         <header className="w-full h-16 bg-blue-500 flex items-center justify-center">
//           <h1 className="text-white text-lg">Header</h1>
//         </header>
//         {/* Main content */}
//         <main className="flex-grow p-4 bg-lightBlue">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default RootLayout;
