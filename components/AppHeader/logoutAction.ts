import { signOut } from "next-auth/react";

export const logoutAction = async () => {
  signOut();
};
