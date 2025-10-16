import type { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import { Appheader } from "../components/AppHeader/AppHeader";
import { ThemeProvider } from "../components/providers";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Spill The Tea",
  description: "Queer Community Platform",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/spill-the-tea.svg" type="image/svg+xml" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Appheader userId={session?.user?.email} />
          <main className={styles.layout}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
