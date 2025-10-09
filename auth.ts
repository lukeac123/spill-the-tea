import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { usersSchema } from "./db/usersSchema";
import { eq } from "drizzle-orm";
import db from "@/db/drizzle";
import { compare } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const [user] = await db // always gets an array of results
          .select()
          .from(usersSchema)
          .where(eq(usersSchema.email, credentials.email as string));

        if (!user) return null;

        const passwordCorrect = await compare(
          credentials.password as string,
          user.password as string
        );

        if (!passwordCorrect) return null;

        console.log(
          "Auth*************************************************************"
        );

        return {
          id: user.id.toString(),
          email: user.email,
        };
      },
    }),
  ],
});
