import { FaRegEdit } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri";
import { MdRemoveCircleOutline } from "react-icons/md";

const SubscriptionSection = () => {
  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700 font-OpenSans text-[16px]">
            Subscription{" "}
          </h3>
          <div className="mt-2 grid grid-cols-2 w-full h-auto gap-4">
            <div className="col-span-1">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Subscription Plan{" "}
              </label>
              <div
                className={`w-full h-[40px] rounded-md font-OpenSans text-[14px] flex items-center justify-start `}
              >
                {" "}
                <div className="flex gap-1 px-2 py-1 items-center justify-center font-OpenSans bg-blue-200 rounded">
                  <RiUser3Line className="text-[16px]" />
                  <span className="font-semibold">Free Plan</span>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Subscription Card{" "}
              </label>
              <div
                className={`w-full h-[40px] rounded-md font-OpenSans text-[14px] flex items-center justify-start `}
              >
                {" "}
                <div className="flex gap-1 px-2 py-1 items-center justify-center font-OpenSans rounded">
                  <span className="font-semibold">No Data</span>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Next Charge Amount{" "}
              </label>
              <div
                className={`w-full h-[40px] rounded-md font-OpenSans text-[14px] flex items-center justify-start `}
              >
                {" "}
                <div className="flex gap-1 px-2 py-1 items-center justify-center font-OpenSans rounded">
                  <span className="font-semibold">No Data</span>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Next Charge Date:{" "}
              </label>
              <div
                className={`w-full h-[40px] rounded-md font-OpenSans text-[14px] flex items-center justify-start `}
              >
                {" "}
                <div className="flex gap-1 px-2 py-1 items-center justify-center font-OpenSans rounded">
                  <span className="font-semibold">No Data</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full min-h-[44px] h-auto  flex items-center justify-start gap-3 mt-4 max-md:flex-col">
            <button className="w-auto h-[32px] min-w-[100px] px-2 py-2 flex items-center justify-center text-mainBlue hover:bg-lightBlue border border-mainBlue font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
              <FaRegEdit className="text-[18px] -mt-1 " />
              <span className="text-[15px] ">Change Card</span>
            </button>
            <button className="w-auto h-[32px] min-w-[100px] px-2 py-2 flex items-center justify-center text-red-500 hover:bg-lightBlue border border-red-400 font-medium gap-1 rounded hover:scale-[.98] transition-all duration-150 max-md:w-full">
              <MdRemoveCircleOutline className="text-[18px] " />
              <span className="text-[15px]">Unsubscribe</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
