import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/themeProvider";

const operator = localFont({ src: "./fonts/OperatorMonoLig-Book.otf" });

export const metadata: Metadata = {
  title: "ArsenalKit | Cybersecurity Toolkit",
  description:
    "A comprehensive toolkit for cybersecurity professionals and ethical hackers",
  keywords: [
    "cybersecurity",
    "hacking tools",
    "penetration testing",
    "reconnaissance",
    "vulnerability assessment",
  ],
  openGraph: {
    title: "ArsenalKit",
    description:
      "A comprehensive toolkit for cybersecurity professionals and ethical hackers",
    images: [{ url: "/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ArsenalKit",
    description:
      "A comprehensive toolkit for cybersecurity professionals and ethical hackers",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${operator.className} antialiased bg-[#05070a] text-white min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
