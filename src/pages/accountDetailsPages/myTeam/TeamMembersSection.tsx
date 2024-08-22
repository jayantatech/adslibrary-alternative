import { RiAddBoxFill } from "react-icons/ri";
import { MyTeamMemberList } from "@/components/TeamMemberList";

const TeamMembersSection = () => {
  const teamMembers = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "Developer" },
    // Add more team members as needed
  ];

  return (
    <div className="w-full mx-auto flex-1 bg-white shadow-lg rounded-lg p-4 max-md:w-full overflow-hidden">
      <div className="w-full h-auto min-h-[66px] flex  items-center justify-between max-md:flex-col gap-3 ">
        <div className="w-1/2 h-full max-md:w-full flex items-start justify-center flex-col max-md:items-center">
          <h4 className="font-OpenSans text-[18px] font-bold text-mainBlue">
            My Team Member
          </h4>
          <p className="font-OpenSans text-[14px]">Manage your team members.</p>
        </div>
        <div className="w-1/2 h-full flex items-end justify-center flex-col gap-1 max-md:w-full max-md:items-center max-md:flex-col-reverse">
          {" "}
          <button className="w-auto h-[34px] min-w-[100px] px-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
            <RiAddBoxFill className="text-[20px] " />
            <span className="text-[16px]">Invite</span>
          </button>
          <span className="font-OpenSans text-[14px] font-semibold ">
            User Limit: <span className="font-bold text-[16px]">2/2</span>
          </span>
        </div>
      </div>
      <div className="mt-3 w-full h-auto flex items-center justify-center max-[680px]:w-[290px] max-sm:w-[20px] overflow-hidden max-md:mt-8">
        <MyTeamMemberList TeamMember={teamMembers} />
      </div>
    </div>
  );
};

export default TeamMembersSection;
