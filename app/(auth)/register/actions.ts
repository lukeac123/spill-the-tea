"use server";
import { passwordMatchValidationSchema } from "@/validation/passwordMatchSchema";
import { z } from "zod";
import { hash } from "bcrypt";
import db from "@/db/drizzle";
import { usersSchema } from "@/db/usersSchema";

export const registerUser = async ({
  email,
  password,
  passwordConfirm,
}: {
  email: string;
  password: string;
  passwordConfirm: string;
}) => {
  try {
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

    const hashedPassword = await hash(password, 10);

    await db.insert(usersSchema).values({ email, password: hashedPassword });
  } catch (error: any) {
    // error code for duplicate user - https://www.postgresql.org/docs/current/errcodes-appendix.html
    if (error.cause.code === "23505") {
      console.log("yes");
      return {
        ok: false,
        message: "Email already exists",
      };
    } else {
      return {
        ok: false,
        message: "Error",
      };
    }
  }
};
