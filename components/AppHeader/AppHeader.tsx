import styles from "./AppHeader.module.css";
import { ThemeToggle } from "./ThemeToggle";

export const Appheader = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Spill The Tea</h1>
      <ThemeToggle className={styles.toggle} />
    </header>
  );
};
