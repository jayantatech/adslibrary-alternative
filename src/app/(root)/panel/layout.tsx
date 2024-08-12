import PanelSidebar from "@/components/PanelSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-red-300 min-h-screen flex">
      <div className="max-lg:hidden max-xl:hidden block lg:min-w-[240px]">
        {" "}
        <PanelSidebar />
      </div>
      <div className="flex-grow flex flex-col">
        {/* Panel Header */}
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
