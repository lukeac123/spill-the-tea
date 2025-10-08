"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./themeToggle.module.css";

import { Button } from "@/components/ui/button";

export const ThemeToggle = ({ className }: { className: string }) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      aria-label="Toggle Theme"
      className={className}
      onClick={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
    >
      <Sun className={styles.sun} aria-hidden />
      <Moon className={styles.moon} aria-hidden />
    </Button>
  );
};
