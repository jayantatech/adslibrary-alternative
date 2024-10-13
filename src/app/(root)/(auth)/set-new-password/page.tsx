"use client";
import ContentWrapper from "@/components/ContentWrapper";
import Image from "next/image";
import { Logo } from "../../../../../public/images";
import NewPasswordComponent from "@/components/(auth)/NewPasswordComponent";
import { useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const PasswordReset = () => {
  const [token, setToken] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    const accessToken = hash.split("access_token=")[1]?.split("&")[0];
    setToken(accessToken || null);
  }, []);

  console.log("the token is", token);
  return (
    <div className="bg-lightBlue">
      <ContentWrapper>
        <div className="min-w-full min-h-screen py-10">
          <div className="w-full h-auto py-2 flex items-center justify-center">
            <Image src={Logo} className="h-auto w-[278px] " alt="logo" />
          </div>
          <div className="w-auto md:max-w-[496px] max-md:max-w-full max-md:px-2 mx-auto pt-14 h-auto ">
            {token ? (
              <NewPasswordComponent token={token} />
            ) : (
              <div className="text-center text-red-500">
                Invalid or missing reset token. Please request a new password
                reset.
              </div>
            )}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default PasswordReset;
