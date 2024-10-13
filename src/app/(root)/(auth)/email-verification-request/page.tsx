import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import React from "react";
import { Logo } from "../../../../../public/images";

const EmailVerificationRequest = () => {
  return (
    <div className="bg-lightBlue">
      <ContentWrapper>
        <div className="min-w-full min-h-screen py-10">
          {/* Logo */}
          <div className="w-full h-auto py-2 flex items-center justify-center">
            <Image src={Logo} className="h-auto w-[278px]" alt="logo" />
          </div>

          {/* Email Verification Message */}
          <div className="w-auto md:max-w-[496px] max-md:max-w-full max-md:px-2 mx-auto pt-14 h-auto bg-white rounded-lg shadow-lg p-8 text-center mt-4">
            <h1 className="text-2xl font-bold text-darkBlue mb-4">
              Account Created Successfully!
            </h1>
            <p className="text-md text-gray-700 mb-6">
              Check your email for a verification link to activate your account.
              If you do not receive it, check your spam folder.
            </p>

            {/* Instructions */}
            <div className="w-full bg-lightBlue p-4 rounded-md mt-6">
              <p className="text-sm text-gray-600">
                Note: The confirmation link is valid for 24 hours. After that,
                you will need to request a new one.
              </p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default EmailVerificationRequest;
