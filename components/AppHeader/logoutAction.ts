import { signOut } from "next-auth/react";

export const logoutAction = async () => {
  console.log("logout");
  signOut();
};
