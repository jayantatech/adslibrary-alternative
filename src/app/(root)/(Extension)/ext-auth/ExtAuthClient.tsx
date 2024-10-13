"use client";

import { useEffect } from "react";

interface ExtAuthClientProps {
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

export default function ExtAuthClient({
  accessToken,
  refreshToken,
}: ExtAuthClientProps) {
  useEffect(() => {
    if (accessToken && refreshToken) {
      console.log("accessToken", accessToken, "refreshToken", refreshToken);
      window.postMessage({ type: "EXT_AUTH", accessToken, refreshToken }, "*");
    }
  }, [accessToken, refreshToken]);

  return (
    <div className="text-center h-screen flex items-center justify-center text-[44px]">
      Authenticating extension...
    </div>
  );
}
