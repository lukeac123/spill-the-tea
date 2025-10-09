import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import styles from "./AppHeader.module.css";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

export const Appheader = ({
  userId,
}: {
  userId: string | null | undefined;
}) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Spill The Tea</h1>
      <div>you are beautiful{userId}</div>
      <div className={styles.action}>
        {userId ? (
          <LogoutButton />
        ) : (
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>
        )}
        <ThemeToggle />
      </div>
    </header>
  );
};
