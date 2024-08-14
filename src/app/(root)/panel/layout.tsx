import PanelHeader from "@/components/PanelHeader";
import PanelSidebar from "@/components/PanelSidebar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full bg-red-300 min-h-screen flex">
      <div className="max-lg:hidden max-xl:hidden block lg:min-w-[240px]">
        {" "}
        <PanelSidebar />
      </div>
      <div className="flex-grow flex flex-col relative">
        {/* Panel Header */}
        <PanelHeader />
        {/* Main content */}
        <section className="flex-grow p-4 bg-lightBlue">{children}</section>
      </div>
    </div>
  );
};

export default RootLayout;
