import "./globals.css";
import type { Viewport } from "next";

export const metadata = {
  title: "Sriman Narayana Yendluri | Software Engineer",
  description:
    "Portfolio of Sriman Narayana Yendluri, Software Engineer specializing in scalable backend systems, full-stack web applications, Node.js, NestJS (NX monorepo), Next.js, PostgreSQL, and AWS cloud architecture.",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen overflow-x-hidden antialiased bg-white text-gray-900 transition-colors duration-200">
        {children}
      </body>
    </html>
  );
}
