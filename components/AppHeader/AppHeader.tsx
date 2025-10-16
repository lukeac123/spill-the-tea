import { Button } from "@/components/ui/button";
import styles from "./AppHeader.module.css";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";
import { SpillTheTeaSVG } from "../Icons/SpillTheTea";

export const Appheader = ({
  userId,
}: {
  userId: string | null | undefined;
}) => {
  return (
    <header className={styles.appheaderContainer}>
      <Link href="/">
        <SpillTheTeaSVG className={styles.appheaderSVG} viewBox="0 0 300 450" />
      </Link>

      <div className={styles.appheaderAction}>
        <Button asChild variant="outline">
          <Link href={"/events"}>Check out our upcoming events</Link>
        </Button>
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
