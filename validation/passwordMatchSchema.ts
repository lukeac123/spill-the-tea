import { z } from "zod";
import { passwordValidationSchema } from "./passwordSchema";

export const passwordMatchValidationSchema = z
  .object({
    password: passwordValidationSchema,
    passwordConfirm: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords do not match",
        path: ["passwordConfirm"],
      });
    }
  });
