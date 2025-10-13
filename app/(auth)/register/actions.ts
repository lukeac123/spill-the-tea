import { passwordMatchValidationSchema } from "@/validation/passwordMatchSchema";
import { z } from "zod";
import { hash } from "bcryptjs";
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
      return {
        error: true,
        message: newUserValidation.error.issues[0]?.message,
      };

    const hashedPassword = await hash(password, 10);

    await db.insert(usersSchema).values({ email, password: hashedPassword });
  } catch (error) {
    // error code for duplicate user - https://www.postgresql.org/docs/current/errcodes-appendix.html
    //@ts-expect-error error instanceof Error not working, does Postgres have an Error type ?
    if (error.cause.code === "23505" && error instanceof Error) {
      return {
        error: true,
        message: "Email already exists",
      };
    } else {
      return {
        error: true,
        message: "Error",
      };
    }
  }
};
