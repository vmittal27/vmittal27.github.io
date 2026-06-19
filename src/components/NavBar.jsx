"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "../siteData";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/publications/", label: "Publications" },
  { href: "/projects/", label: "Projects" },
  { href: siteData.resume, label: "Resume" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="nav-bar">
      <Link className="site-title" href="/">
        {siteData.siteTitle}
      </Link>
      <nav aria-label="Primary">
        {navItems.map((item) => {
          const isActive =
            item.href === "/" ? pathname === "/" : item.href.startsWith("/") && pathname?.startsWith(item.href);

          const shouldOpenInNewTab = item.href == siteData.resume;
          const externalLinkTarget = shouldOpenInNewTab ? "_blank" : "_self";

          return (
            <Link
              key={item.href}
              className={isActive ? "nav-link active" : "nav-link"}
              href={item.href}
              target={externalLinkTarget}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
