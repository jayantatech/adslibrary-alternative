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
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";
import { Loader2 } from "lucide-react";
import api from "@/lib/api";

// Define a schema for the reset password form
const resetPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

function PasswordResetRequestComponent() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof ResetPasswordType, string>>
  >({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      // Validate form data
      resetPasswordSchema.parse({ email });

      // Clear any previous errors and messages
      setErrors({});
      setApiError(null);
      setSuccessMessage(null);
      setIsLoading(true);

      // Make the API request to send password reset email
      const response = await api.post(
        "/auth/request-password-reset",
        { email },
        { withCredentials: true }
      );

      // If request is successful, show success message
      if (response.data.success) {
        setSuccessMessage("Password reset link sent to your email address.");
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        // Handle validation errors from Zod
        const zodErrors = e as z.ZodError<ResetPasswordType>;
        const formattedErrors: Partial<
          Record<keyof ResetPasswordType, string>
        > = {};
        zodErrors.errors.forEach((error) => {
          const field = error.path[0];
          if (field && typeof field === "string") {
            formattedErrors[field as keyof ResetPasswordType] = error.message;
          }
        });
        setErrors(formattedErrors);
      } else if (axios.isAxiosError(e)) {
        // Handle Axios error (including 500 status code)
        const axiosError = e as any;
        setApiError(
          axiosError.response?.data?.message ||
            "Failed to send reset password link. Please try again."
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
        <CardTitle className="text-2xl">Reset Your Password</CardTitle>
        <CardDescription>
          Enter your email address to receive a password reset link.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email" className="font-semibold font-OpenSans">
            Email
          </Label>
          <div className="w-full h-[37px] border rounded px-2 flex items-center justify-center gap-2 focus-within:border-mainBlue">
            <HiOutlineMail className="text-[18px]" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full h-full font-OpenSans text-[14px] font-medium outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
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
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Reset Link...
            </>
          ) : (
            "Send Reset Link"
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

export default PasswordResetRequestComponent;
