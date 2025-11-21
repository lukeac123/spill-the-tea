import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { SpillTheTeaSVG } from "../Icons/SpillTheTea";
import { LinksGroup } from "./LinksGroup";
import { LogoutButton } from "./LogoutButton";
import styles from "./AppHeader.module.css";

const links: Record<string, { label: string; link: string }[]> = {
  "/": [
    { label: "Events", link: "/events" },
    { label: "Queer Businesses", link: "/businesses" },
    { label: "Our Mission", link: "/mission" },
  ],
  "/events": [
    { label: "Home", link: "/" },
    { label: "Create an Event", link: "/create" },
    { label: "Queer Businesses", link: "/businesses" },
    { label: "Our Mission", link: "/mission" },
  ],
  "/login": [
    { label: "Home", link: "/" },
    { label: "Events", link: "/events" },
    { label: "Queer Businesses", link: "/businesses" },
  ],
  "/profile": [
    { label: "Home", link: "/" },
    { label: "Queer Businesses", link: "/businesses" },
    { label: "Our Mission", link: "/mission" },
    { label: "Events", link: "/events" },
  ],
};

export const Appheader = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <header className={styles.appheaderContainer}>
      <Link href="/">
        <SpillTheTeaSVG className={styles.appheaderSVG} viewBox="0 0 300 450" />
      </Link>
      <div className={styles.appheaderAction}>
        <LinksGroup links={links} />
        {isLoggedIn ? <LogoutButton /> : <Link href="/login">Login</Link>}
        <ThemeToggle />
      </div>
    </header>
  );
};
