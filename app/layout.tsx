import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Sudhanva Patil — Backend Engineer & Software Engineer",
    template: "%s | Sudhanva Patil",
  },
  description:
    "Sudhanva Patil — Computer Science graduate building full-stack applications, REST APIs, and database-driven systems using Python, FastAPI, React, JavaScript, SQL, and PostgreSQL. Available for full-time roles.",
  keywords: [
    "Sudhanva Patil",
    "Backend Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Python",
    "FastAPI",
    "React",
    "PostgreSQL",
    "Docker",
    "REST APIs",
  ],
  authors: [{ name: "Sudhanva Patil" }],
  openGraph: {
    title: "Sudhanva Patil — Backend Engineer & Software Engineer",
    description:
      "Backend Engineer | Software Engineer · Full-Stack Applications · REST APIs · PostgreSQL",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sora.variable} suppressHydrationWarning>
      <body
        style={{
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-sora), system-ui, sans-serif",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
