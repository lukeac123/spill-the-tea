"use client";
import { Button } from "../ui/button";
import { logoutAction } from "./logoutAction";

export const LogoutButton = () => {
  return (
    <Button variant="outline" onClick={async () => logoutAction()}>
      Logout
    </Button>
  );
};
