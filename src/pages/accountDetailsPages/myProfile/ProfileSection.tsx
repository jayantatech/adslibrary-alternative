"use client";
import Image from "next/image";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { PersonOne } from "../../../../public/images";
import { GiTrophy } from "react-icons/gi";
import { CgOptions } from "react-icons/cg";

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  country: string;
  state: string;
  postalCode: string;
  taxId: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "Michael",
    lastName: "Rodriguez",
    email: "Rodriguez@gmail.com",
    phone: "(213) 555-1234",
    bio: "Product Designer",
    country: "United States of America",
    state: "California, USA",
    postalCode: "ERT 62574",
    taxId: "AS56417896",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between items-center max-lg:items-start mb-6 max-md:flex-col">
        <div className="flex items-center space-x-4">
          <Image
            className="w-20 h-20 rounded shadow object-cover border border-slate-300"
            src={PersonOne}
            alt="Profile"
          />
          <div>
            <h2 className="text-[22px] max-md:text-[18px] font-semibold">{`${profileData.firstName} ${profileData.lastName}`}</h2>
            <p className="text-gray-500 text-[16px] max-md:text-[14px]">
              {profileData.email}
            </p>
          </div>
        </div>
        <button
          onClick={toggleEdit}
          className="text-blue-500 border px-2 py-1 font-OpenSans text-[15px] font-semibold hover:text-blue-700 rounded max-md:w-full mt-2"
        >
          {isEditing ? (
            <div className="flex gap-1 items-center justify-center text-gray-500 ">
              <IoCheckmarkDoneOutline />
              <span>Save</span>
            </div>
          ) : (
            <div className="flex gap-1 items-center justify-center">
              <FaRegEdit />
              <span>Edit</span>
            </div>
          )}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-gray-700 font-OpenSans text-[16px]">
            Personal Information
          </h3>
          <div className="mt-2 grid grid-cols-2 w-full h-auto gap-4">
            <div className="col-span-1 max-md:col-span-2">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                First Name
              </label>
              <div
                className={`w-full h-[40px] rounded-md border p-2 font-OpenSans text-[14px] flex items-center justify-start ${
                  isEditing ? "bg-slate-200 border-mainBlue" : ""
                }`}
              >
                {" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="firstName"
                    value={profileData.firstName}
                    onChange={handleChange}
                    className="w-full h-full border-none outline-none bg-transparent "
                  />
                ) : (
                  <span>{profileData.firstName}</span>
                )}
              </div>
            </div>

            <div className="col-span-1 max-md:col-span-2">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Last Name
              </label>
              <div
                className={`w-full h-[40px] rounded-md border p-2 font-OpenSans text-[14px] flex items-center justify-start ${
                  isEditing ? "bg-slate-200 border-mainBlue" : ""
                }`}
              >
                {" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="lastName"
                    value={profileData.lastName}
                    onChange={handleChange}
                    className="w-full h-full border-none outline-none bg-transparent"
                  />
                ) : (
                  <span>{profileData.lastName}</span>
                )}
              </div>
            </div>

            <div className="col-span-1 max-md:col-span-2">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Email
              </label>
              <div
                className={`w-full h-[40px] rounded-md border p-2 font-OpenSans text-[14px] flex items-center justify-start ${
                  isEditing ? "bg-slate-200 border-mainBlue" : ""
                }`}
              >
                {" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    className="w-full h-full border-none outline-none bg-transparent"
                  />
                ) : (
                  <span>{profileData.email}</span>
                )}
              </div>
            </div>

            <div className="col-span-1 max-md:col-span-2">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Phone
              </label>
              <div
                className={`w-full h-[40px] rounded-md border p-2 font-OpenSans text-[14px] flex items-center justify-start ${
                  isEditing ? "bg-slate-200 border-mainBlue" : ""
                }`}
              >
                {isEditing ? (
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    className="w-full h-full border-none outline-none bg-transparent"
                  />
                ) : (
                  <span>{profileData.phone}</span>
                )}
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-gray-700 font-semibold font-OpenSans text-[13px]">
                Bio
              </label>
              <div
                className={`w-full h-[40px] rounded-md border p-2 font-OpenSans text-[14px] flex items-center justify-start ${
                  isEditing ? "bg-slate-200 border-mainBlue" : ""
                }`}
              >
                {" "}
                {isEditing ? (
                  <input
                    type="text"
                    name="bio"
                    value={profileData.bio}
                    onChange={handleChange}
                    className="w-full h-full border-none outline-none bg-transparent"
                  />
                ) : (
                  <span>{profileData.bio}</span>
                )}
              </div>
            </div>
          </div>
          <div className="pt-4">
            <button className="w-full h-[38px] bg-mainBlue border-2 border-slate-200 text-white cursor-pointer hover:scale-[.99] transition-all duration-150 rounded-md flex items-center justify-center gap-1">
              <CgOptions className="text-[20px]" />
              <p className="text-[15px] font-OpenSans font-bold">Change Plan</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
