"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
import { RiLockPasswordLine } from "react-icons/ri";
import Link from "next/link";
import axios from "axios";
import { Loader2 } from "lucide-react";
import api from "@/lib/api";

// Define a schema for the new password form
const newPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type NewPasswordType = z.infer<typeof newPasswordSchema>;

function NewPasswordComponent({ token }: { token: string }) {
  const [formData, setFormData] = useState<NewPasswordType>({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof NewPasswordType, string>>
  >({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (field: keyof NewPasswordType, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Validate form data
      newPasswordSchema.parse(formData);

      // Clear any previous errors and messages
      setErrors({});
      setApiError(null);
      setSuccessMessage(null);

      // Make the API request to set new password
      const response = await api.post(
        "/auth/reset-password",
        {
          access_token: token,
          password: formData.password,
        },
        { withCredentials: true }
      );

      // If request is successful, show success message and redirect
      if (response.data.success) {
        setSuccessMessage("Password reset successful. Redirecting to login...");
        setTimeout(() => router.push("/login"), 3000);
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        // Handle validation errors from Zod
        const zodErrors = e as z.ZodError<NewPasswordType>;
        const formattedErrors: Partial<Record<keyof NewPasswordType, string>> =
          {};
        zodErrors.errors.forEach((error) => {
          const field = error.path[0];
          if (field && typeof field === "string") {
            formattedErrors[field as keyof NewPasswordType] = error.message;
          }
        });
        setErrors(formattedErrors);
      } else if (axios.isAxiosError(e)) {
        // Handle Axios error (including 500 status code)
        const axiosError = e as any;
        setApiError(
          axiosError.response?.data?.message ||
            "Failed to reset password. Please try again."
        );
      } else {
        console.error("An unexpected error occurred:", e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create New Password</CardTitle>
        <CardDescription>
          Enter and confirm your new password below.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="password" className="font-semibold font-OpenSans">
            New Password
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <RiLockPasswordLine className="text-[18px]" />
            <input
              type="password"
              placeholder="Enter New Password"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>

        <div className="grid gap-2">
          <Label
            htmlFor="confirmPassword"
            className="font-semibold font-OpenSans"
          >
            Confirm New Password
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <RiLockPasswordLine className="text-[18px]" />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        {apiError && <span className="text-red-500 text-sm">{apiError}</span>}
        {successMessage && (
          <span className="text-green-500 text-sm">{successMessage}</span>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button
          className="w-full h-[40px] text-[16px] font-semibold bg-mainBlue hover:scale-[.98] transition-all duration-150 hover:bg-mainBlue"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Resetting Password...
            </>
          ) : (
            "Reset Password"
          )}
        </Button>
        <div className="flex justify-center w-full h-auto">
          <span className="text-[15px] font-OpenSans font-semibold">
            Remember your password?{" "}
            <Link
              href={"/login"}
              className="text-mainBlue font-bold text-[16px]"
            >
              Sign In
            </Link>
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default NewPasswordComponent;
