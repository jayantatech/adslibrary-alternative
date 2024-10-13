"use client";
import { useState } from "react";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import Image from "next/image";
import { GoogleLogo } from "../../../public/images";
import Link from "next/link";
import { registerSchema, RegisterType } from "@/schemas/registerSchema";
import axios from "axios";
import { LoginType } from "@/schemas/loginSchema";
import { useGoogleLogin } from "@react-oauth/google";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
function RegisterCardComponent() {
  const [formData, setFormData] = useState<Partial<RegisterType>>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterType, string>>
  >({});

  const [apiError, setApiError] = useState<string | null>(null); // State for API error messages
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      // Validate form data
      registerSchema.parse(formData);
      setIsLoading(true);
      setErrors({});
      setApiError(null);

      // If successful, proceed with form submission
      const response = await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Response:", response.data);

      if (response.data.success) {
        router.push("/email-verification-request");
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        // Handle validation errors from Zod
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
        // Handle Axios error (including 500 status code)
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

  // const handleGoogleLoginSuccess = async (tokenResponse: any) => {
  //   try {
  //     const { access_token } = tokenResponse;

  //     // Send the access token to your backend
  //     const response = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/google-login`,
  //       { access_token },
  //       { withCredentials: true } // Include cookies for access/refresh tokens
  //     );

  //     if (response.data.success) {
  //       // Handle successful login, e.g., redirect to dashboard
  //       console.log("Login successful", response.data);
  //     } else {
  //       setApiError("Login failed: " + response.data.message);
  //     }
  //   } catch (error: any) {
  //     setApiError("Login failed: " + error.message);
  //   }
  // };

  // const googleLogin = useGoogleLogin({
  //   onSuccess: handleGoogleLoginSuccess,
  //   onError: (errorResponse) => {
  //     console.error("Google login error:", errorResponse);
  //     setApiError("Failed to login with Google.");
  //   },
  //   redirect_uri: window.location.origin,
  // });

  const handleGoogleLoginSuccess = async (tokenResponse: any) => {
    try {
      const { access_token } = tokenResponse;

      const response = await axios.post(
        `http://localhost:4000/api/v1/auth/google-login`,
        { access_token },
        { withCredentials: true }
      );

      if (response.data.success) {
        console.log("Google login successful", response.data);
        // Redirect to dashboard or handle successful login
        // You might want to use Next.js router here

        // Redirect to Note page
      } else {
        setApiError("Login failed: " + response.data.message);
      }
    } catch (error: any) {
      setApiError(
        "Login failed: " + (error.response?.data?.message || error.message)
      );
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLoginSuccess,
    onError: (errorResponse) => {
      console.error("Google login error:", errorResponse);
      setApiError("Failed to login with Google.");
    },
  });
  const handleChange = (field: keyof RegisterType, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Clear the error for the specific field when user types
    if (errors[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button
          variant="outline"
          className="w-full h-[38px] hover:scale-[.98] transition-all duration-150"
          onClick={() => googleLogin()}
        >
          <Image
            src={GoogleLogo}
            className="w-[30px] h-[30px]"
            alt="google_log"
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
          <Label htmlFor="name" className="font-semibold font-OpenSans">
            Name
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <FaRegUser className="text-[14px] -mt-[2px]" />
            <input
              type="text"
              placeholder="Please Enter Your Name"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={formData.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email" className="font-semibold font-OpenSans">
            Email
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <HiOutlineMail className="text-[18px]" />
            <input
              type="email"
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
              placeholder="Please Enter Your Password"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={formData.password || ""}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          <span className="font-OpenSans font-semibold">
            {`Password must be 6+ chars: A-Z, a-z, 0-9, @$!%*?&#`}
          </span>
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>
        {apiError && <span className="text-red-500 text-sm">{apiError}</span>}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="w-full h-[40px] text-[16px] font-semibold bg-mainBlue hover:scale-[.98] transition-all duration-150 hover:bg-mainBlue"
          onClick={handleSubmit}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create account"
          )}
        </Button>
        <span className="text-[15px] font-OpenSans font-semibold">
          Already have an account?{" "}
          <Link
            href={"/login"}
            className=" text-mainBlue font-bold text-[16px] "
          >
            Log in
          </Link>
        </span>
      </CardFooter>
    </Card>
  );
}

export default RegisterCardComponent;
