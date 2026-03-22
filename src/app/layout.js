import "./globals.css";
import { Lato, Merriweather } from "next/font/google";
import { siteData } from "../siteData";
import { SiteChrome } from "../components/SiteChrome";

const siteUrl = "https://vmittal27.github.io";
const description =
  "Viresh Mittal personal website.";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Viresh Mittal",
    template: "%s | Viresh Mittal",
  },
  description,
  authors: [{ name: "Viresh Mittal" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: "oBABwhRXTTzgdETy2Alyt3p3W0vjRUzf6YDrUpjGFSA",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Viresh Mittal",
    title: "Viresh Mittal",
    description,
    images: [
      {
        url: "/logo512.png",
        alt: "Viresh Mittal website logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Viresh Mittal",
    description,
    images: ["/logo512.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${merriweather.variable}`}>
        <SiteChrome siteData={siteData}>{children}</SiteChrome>
      </body>
    </html>
  );
}
