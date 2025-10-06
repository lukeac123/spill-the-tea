"use server";
import { passwordMatchValidationSchema } from "@/validation/passwordMatchSchema";
import { z } from "zod";

export const registerUser = async ({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  const newUserSchema = z
    .object({
      email: z.email(),
    })
    .and(passwordMatchValidationSchema);

  const newUserValidation = newUserSchema.safeParse({
    email,
    password,
    passwordConfirm,
  });

  if (!newUserValidation.success)
    return (
      { error: true, message: newUserValidation.error.issues[0]?.message } ??
      "Error Occured With New User"
    );
};
