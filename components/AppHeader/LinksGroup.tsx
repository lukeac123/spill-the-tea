"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Separator } from "../Separator/Separator";

export const LinksGroup = ({
  links,
}: {
  links: Record<string, { label: string; link: string }[]>;
}) => {
  const pathName = usePathname() ?? "/";

  return (
    <>
      {pathName in links ? (
        links[pathName]?.map((link) => {
          return (
            <Link key={link.label} href={link.link}>
              {link.label}
            </Link>
          );
        })
      ) : (
        <Link href={"/"}>Home</Link>
      )}
      <Separator />
    </>
  );
};
