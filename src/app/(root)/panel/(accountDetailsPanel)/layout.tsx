import ProfileNav from "@/components/ProfileNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full sticky top-0 left-0 px-3 py-2">
      <div className="w-full h-auto pb-1 max-w-[898px] m-desktop:max-w-[968px] max-lg:max-w-[728px] flex items-center justify-start  mx-auto max-lg:justify-center max-lg:pt-6 lg:sticky top-16 left-0">
        <span className="text-[28px] max-md:text-[24px] max-lg:text-[26px] font-OpenSans font-bold">
          My Account
        </span>
      </div>
      <div className="w-full max-w-[1028px] max-lg:max-w-[728px] max-md:w-full flex flex-row h-auto mx-auto px-4 lg:px-6 mt-4  gap-3 max-lg:flex-col">
        <ProfileNav />
        <div className="w-full h-auto flex-1 ">{children}</div>
      </div>{" "}
    </div>
  );
};

export default layout;
