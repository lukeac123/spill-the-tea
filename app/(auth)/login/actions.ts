"use client";
import { passwordValidationSchema } from "@/validation/passwordSchema";
import { z } from "zod";
import { signIn } from "next-auth/react";

export const LoginUser = async ({
  email,
  password,
}: {
  email: any;
  password: string;
}) => {
  const loginSchema = z.object({
    email: z.email(),
    password: passwordValidationSchema,
  });

  const loginValidation = loginSchema.safeParse({ email, password });

  if (!loginValidation.success)
    return (
      { error: true, message: loginValidation.error.issues[0]?.message } ??
      "Error Occured With New User"
    );

  const signin = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });

  // Default error from sign in is 'Credentials', even if you throw new Error("Custom Error")
  if (signin.error) {
    return {
      error: true,
    };
  }

  return {
    error: false,
  };
};
