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

function RegisterCardComponent() {
  const [formData, setFormData] = useState<Partial<RegisterType>>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof RegisterType, string>>
  >({});

  const handleSubmit = () => {
    try {
      // Validate form data
      registerSchema.parse(formData);
      // If successful, proceed with form submission
      console.log("Form data is valid:", formData);
      setErrors({}); // Clear errors on successful submission
    } catch (e) {
      const zodErrors = e as z.ZodError<RegisterType>;
      const formattedErrors: Partial<Record<keyof RegisterType, string>> = {};
      zodErrors.errors.forEach((error) => {
        const field = error.path[0];
        if (field && typeof field === "string") {
          formattedErrors[field as keyof RegisterType] = error.message;
        }
      });
      setErrors(formattedErrors);
    }
  };

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
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="w-full h-[40px] text-[16px] font-semibold bg-mainBlue hover:scale-[.98] transition-all duration-150 hover:bg-mainBlue"
          onClick={handleSubmit}
        >
          Create account
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
