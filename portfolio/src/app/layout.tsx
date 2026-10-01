import "./globals.css";
import type { Viewport } from "next";

export const metadata = {
  title: "Sriman Narayana Yendluri | Backend Developer",
  description:
    "Portfolio of Sriman Narayana Yendluri, Backend Developer specializing in Node.js, NestJS (NX monorepo), TypeORM, PostgreSQL, MongoDB, AWS, Utho Cloud VPS, and CI/CD.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" style={{ colorScheme: "light", backgroundColor: "#ffffff" }}>
      <body style={{ backgroundColor: "#ffffff", color: "#111827" }} className="min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
