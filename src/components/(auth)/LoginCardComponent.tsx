// "use client";
// import { useState } from "react";
// import { z } from "zod";
// import { Button } from "../ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { Label } from "../ui/label";
// import { HiOutlineMail } from "react-icons/hi";
// import { RiLockPasswordLine } from "react-icons/ri";
// import Image from "next/image";
// import { GoogleLogo } from "../../../public/images";
// import Link from "next/link";
// import { loginSchema, LoginType } from "@/schemas/loginSchema";
// import axios from "axios";

// function LoginCardComponent() {
//   const [formData, setFormData] = useState<Partial<LoginType>>({});
//   const [errors, setErrors] = useState<
//     Partial<Record<keyof LoginType, string>>
//   >({});

//   const handleSubmit = async () => {
//     try {
//       // Validate form data
//       loginSchema.parse(formData);
//       // If successful, proceed with form submission
//       console.log("Form data is valid:", formData);
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/auth/login",
//         {
//           email: formData.email,
//           password: formData.password,
//         },

//         { withCredentials: true }
//       );

//       console.log("response data is:", response.request.responseText);
//       setErrors({}); // Clear errors on successful submission
//     } catch (e) {
//       if (e instanceof z.ZodError) {
//         const zodErrors = e as z.ZodError<LoginType>;
//         const formattedErrors: Partial<Record<keyof LoginType, string>> = {};
//         zodErrors.errors.forEach((error) => {
//           const field = error.path[0];
//           if (field && typeof field === "string") {
//             formattedErrors[field as keyof LoginType] = error.message;
//           }
//         });
//         setErrors(formattedErrors);
//       } else {
//         console.error("An unexpected error occurred:", e);
//         // You can add additional error handling here if needed.
//       }
//     }
//   };

//   const handleChange = (field: keyof LoginType, value: string) => {
//     setFormData({ ...formData, [field]: value });
//     // Clear the error for the specific field when user types
//     if (errors[field]) {
//       setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
//     }
//   };

//   return (
//     <Card className="shadow-md">
//       <CardHeader className="space-y-1">
//         <CardTitle className="text-2xl">Sign in to your account</CardTitle>
//         <CardDescription>
//           Enter your email and password to access your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <Button
//           variant="outline"
//           className="w-full h-[38px] hover:scale-[.98] transition-all duration-150"
//         >
//           <Image
//             src={GoogleLogo}
//             className="w-[30px] h-[30px]"
//             alt="google_log"
//           />
//           Google
//         </Button>
//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs uppercase">
//             <span className="bg-background px-2 text-muted-foreground">
//               Or continue with
//             </span>
//           </div>
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="email" className="font-semibold font-OpenSans">
//             Email
//           </Label>
//           <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
//             <HiOutlineMail className="text-[18px]" />
//             <input
//               type="email"
//               placeholder="Please Enter Your Email"
//               className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
//               value={formData.email || ""}
//               onChange={(e) => handleChange("email", e.target.value)}
//             />
//           </div>
//           {errors.email && (
//             <span className="text-red-500 text-sm">{errors.email}</span>
//           )}
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password" className="font-semibold font-OpenSans">
//             Password
//           </Label>
//           <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
//             <RiLockPasswordLine className="text-[18px]" />
//             <input
//               type="password"
//               placeholder="Please Enter Your Password"
//               className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
//               value={formData.password || ""}
//               onChange={(e) => handleChange("password", e.target.value)}
//             />
//           </div>
//           {errors.password && (
//             <span className="text-red-500 text-sm">{errors.password}</span>
//           )}
//         </div>
//       </CardContent>
//       <CardFooter className="flex flex-col gap-2">
//         <Button
//           className="w-full h-[40px] text-[16px] font-semibold bg-mainBlue hover:scale-[.98] transition-all duration-150 hover:bg-mainBlue"
//           onClick={handleSubmit}
//         >
//           Sign in
//         </Button>
//         <span className="text-[15px] font-OpenSans font-semibold">
//           {`Don't have an account? `}
//           <Link
//             href={"/register"}
//             className=" text-mainBlue font-bold text-[16px] "
//           >
//             Sign Up
//           </Link>
//         </span>
//       </CardFooter>
//     </Card>
//   );
// }

// export default LoginCardComponent;

//code 06/oct/24 (06 pm)
// "use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation"; // Import useRouter for redirection
// import { z } from "zod";
// import { Button } from "../ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
// import { Label } from "../ui/label";
// import { HiOutlineMail } from "react-icons/hi";
// import { RiLockPasswordLine } from "react-icons/ri";
// import Image from "next/image";
// import { GoogleLogo } from "../../../public/images";
// import Link from "next/link";
// import { loginSchema, LoginType } from "@/schemas/loginSchema";
// import axios from "axios";
// import { Loader2 } from "lucide-react";
// import api from "@/lib/api";

// function LoginCardComponent() {
//   const [formData, setFormData] = useState<Partial<LoginType>>({});
//   const [errors, setErrors] = useState<
//     Partial<Record<keyof LoginType, string>>
//   >({});
//   const [apiError, setApiError] = useState<string | null>(null); // State for API error messages
//   const [isLoading, setIsLoading] = useState(false);

//   const router = useRouter(); // Initialize the useRouter hook

//   const handleSubmit = async () => {
//     try {
//       // Validate form data
//       loginSchema.parse(formData);

//       // Clear any previous errors
//       setErrors({});
//       setApiError(null);
//       setIsLoading(true);

//       // Make the API request to log in
//       const response = await api.post("/auth/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       // If login is successful, redirect to the dashboard
//       if (response.data.success) {
//         router.push("/panel/exploreAds"); // Redirect to dashboard on success
//       }
//     } catch (e) {
//       if (e instanceof z.ZodError) {
//         // Handle validation errors from Zod
//         const zodErrors = e as z.ZodError<LoginType>;
//         const formattedErrors: Partial<Record<keyof LoginType, string>> = {};
//         zodErrors.errors.forEach((error) => {
//           const field = error.path[0];
//           if (field && typeof field === "string") {
//             formattedErrors[field as keyof LoginType] = error.message;
//           }
//         });
//         setErrors(formattedErrors);
//       } else if (axios.isAxiosError(e)) {
//         // Handle Axios error (including 500 status code)
//         const axiosError = e as any;
//         setApiError(
//           axiosError.response?.data?.message ||
//             "Login failed. Please try again."
//         );
//       } else {
//         console.error("An unexpected error occurred:", e);
//       }
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleChange = (field: keyof LoginType, value: string) => {
//     setFormData({ ...formData, [field]: value });
//     if (errors[field]) {
//       setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
//     }
//   };

//   return (
//     <Card className="shadow-md">
//       <CardHeader className="space-y-1">
//         <CardTitle className="text-2xl">Sign in to your account</CardTitle>
//         <CardDescription>
//           Enter your email and password to access your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4 pb-3">
//         <Button
//           variant="outline"
//           className="w-full h-[38px] hover:scale-[.98] transition-all duration-150"
//         >
//           <Image
//             src={GoogleLogo}
//             className="w-[30px] h-[30px]"
//             alt="google_log"
//           />
//           Google
//         </Button>
//         <div className="relative">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t" />
//           </div>
//           <div className="relative flex justify-center text-xs uppercase">
//             <span className="bg-background px-2 text-muted-foreground">
//               Or continue with
//             </span>
//           </div>
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="email" className="font-semibold font-OpenSans">
//             Email
//           </Label>
//           <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
//             <HiOutlineMail className="text-[18px]" />
//             <input
//               type="email"
//               placeholder="Please Enter Your Email"
//               className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
//               value={formData.email || ""}
//               onChange={(e) => handleChange("email", e.target.value)}
//             />
//           </div>
//           {errors.email && (
//             <span className="text-red-500 text-sm">{errors.email}</span>
//           )}
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password" className="font-semibold font-OpenSans">
//             Password
//           </Label>
//           <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
//             <RiLockPasswordLine className="text-[18px]" />
//             <input
//               type="password"
//               placeholder="Please Enter Your Password"
//               className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
//               value={formData.password || ""}
//               onChange={(e) => handleChange("password", e.target.value)}
//             />
//           </div>
//           {errors.password && (
//             <span className="text-red-500 text-sm">{errors.password}</span>
//           )}
//           <div className="flex items-center justify-between">
//             <span className="flex gap-1 items-center justify-center">
//               <input type="checkbox" className="w-[14px] h-[14px]" />
//               <span className="text-[14px]">Remember me</span>
//             </span>
//             <span className="text-right">
//               <Link
//                 href={"/request-password"}
//                 className=" text-mainBlue font-bold text-[13px] "
//               >
//                 Forgot Password
//               </Link>
//             </span>
//           </div>
//         </div>

//         {apiError && <span className="text-red-500 text-sm">{apiError}</span>}
//       </CardContent>
//       <CardFooter className="flex flex-col gap-2">
//         <Button
//           className="w-full h-[40px] text-[16px] font-semibold bg-mainBlue hover:scale-[.98] transition-all duration-150 hover:bg-mainBlue"
//           onClick={handleSubmit}
//         >
//           {isLoading ? (
//             <>
//               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//               Signing in...
//             </>
//           ) : (
//             "Sign in"
//           )}
//         </Button>
//         <div className="flex justify-center w-full h-auto">
//           <span className="text-[15px] font-OpenSans font-semibold">
//             {`Don't have an account? `}
//             <Link
//               href={"/register"}
//               className=" text-mainBlue font-bold text-[16px] "
//             >
//               Sign Up
//             </Link>
//           </span>
//         </div>
//       </CardFooter>
//     </Card>
//   );
// }

// export default LoginCardComponent;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { z } from "zod";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
// import { GoogleLogo } from "@/public/images";
import { loginSchema, LoginType } from "@/schemas/loginSchema";
import api from "@/lib/api";
import { GoogleLogo } from "../../../public/images";

const EXTENSION_ID = "pbciemhpmegpkiilhamnoidieeoldkcb";

const LoginCardComponent = () => {
  const [formData, setFormData] = useState<Partial<LoginType>>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginType, string>>
  >({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [extensionConnected, setExtensionConnected] = useState(false);

  const router = useRouter();

  useEffect(() => {
    checkExtensionConnection();
  }, []);

  const checkExtensionConnection = () => {
    if (
      typeof chrome !== "undefined" &&
      chrome.runtime &&
      chrome.runtime.sendMessage
    ) {
      chrome.runtime.sendMessage(
        EXTENSION_ID,
        { action: "ping" },
        (response) => {
          if (chrome.runtime.lastError) {
            console.log("Extension not connected:", chrome.runtime.lastError);
            setExtensionConnected(false);
          } else {
            console.log("Extension connected:", response);
            setExtensionConnected(true);
          }
        }
      );
    }
  };

  const sendTokensToExtension = (accessToken: string, refreshToken: string) => {
    if (
      typeof chrome !== "undefined" &&
      chrome.runtime &&
      chrome.runtime.sendMessage
    ) {
      chrome.runtime.sendMessage(
        EXTENSION_ID,
        {
          action: "setTokens",
          accessToken,
          refreshToken,
        },
        (response) => {
          if (chrome.runtime.lastError) {
            console.log(
              "Failed to send tokens to extension:",
              chrome.runtime.lastError
            );
          } else {
            console.log("Tokens sent to extension:", response);
          }
        }
      );
    } else {
      console.log("Chrome extension not detected");
    }
  };

  const handleSubmit = async () => {
    try {
      loginSchema.parse(formData);
      setErrors({});
      setApiError(null);
      setIsLoading(true);

      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        const { accessToken, refreshToken } = response.data.data;

        // Set cookies
        document.cookie = `access_token=${accessToken}; path=/; max-age=900; SameSite=Strict; Secure`;
        document.cookie = `refresh_token=${refreshToken}; path=/; max-age=604800; SameSite=Strict; Secure`;

        console.log("Access token:", accessToken);
        console.log("Refresh token:", refreshToken);
        // Send tokens to extension if connected
        if (extensionConnected) {
          console.log("Extension connected. Sending tokens...");
          sendTokensToExtension(accessToken, refreshToken);
        }

        router.push("/panel/exploreAds");
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        const zodErrors = e as z.ZodError<LoginType>;
        const formattedErrors: Partial<Record<keyof LoginType, string>> = {};
        zodErrors.errors.forEach((error) => {
          const field = error.path[0];
          if (field && typeof field === "string") {
            formattedErrors[field as keyof LoginType] = error.message;
          }
        });
        setErrors(formattedErrors);
      } else if (axios.isAxiosError(e)) {
        const axiosError = e as any;
        setApiError(
          axiosError.response?.data?.message ||
            "Login failed. Please try again."
        );
      } else {
        console.error("An unexpected error occurred:", e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (field: keyof LoginType, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
    }
  };
  return (
    <Card className="shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign in to your account</CardTitle>
        <CardDescription>
          Enter your email and password to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 pb-3">
        <Button
          variant="outline"
          className="w-full h-[38px] hover:scale-[.98] transition-all duration-150"
        >
          <Image
            src={GoogleLogo}
            className="w-[30px] h-[30px]"
            alt="google_logo"
          />
          Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="font-semibold font-OpenSans">
            Email
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <HiOutlineMail className="text-[18px]" />
            <input
              type="email"
              id="email"
              placeholder="Please Enter Your Email"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={formData.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password" className="font-semibold font-OpenSans">
            Password
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <RiLockPasswordLine className="text-[18px]" />
            <input
              type="password"
              id="password"
              placeholder="Please Enter Your Password"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={formData.password || ""}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
          <div className="flex items-center justify-between">
            <span className="flex gap-1 items-center justify-center">
              <input
                type="checkbox"
                id="remember"
                className="w-[14px] h-[14px]"
              />
              <label htmlFor="remember" className="text-[14px]">
                Remember me
              </label>
            </span>
            <span className="text-right">
              <Link
                href="/request-password"
                className="text-mainBlue font-bold text-[13px]"
              >
                Forgot Password
              </Link>
            </span>
          </div>
        </div>
        {apiError && <span className="text-red-500 text-sm">{apiError}</span>}
        {extensionConnected && (
          <span className="text-green-500 text-sm">
            Chrome extension connected
          </span>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="w-full h-[40px] text-[16px] font-semibold bg-mainBlue hover:scale-[.98] transition-all duration-150 hover:bg-mainBlue"
          onClick={handleSubmit}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign in"
          )}
        </Button>
        <div className="flex justify-center w-full h-auto">
          <span className="text-[15px] font-OpenSans font-semibold">
            {`Don't have an account? `}
            <Link
              href="/register"
              className="text-mainBlue font-bold text-[16px]"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginCardComponent;
