import "./globals.css";
import type { Viewport } from "next";

export const metadata = {
  title: "Sriman Narayana Yendluri | Backend Developer",
  description:
    "Portfolio of Sriman Narayana Yendluri, Backend Developer specializing in scalable RESTful APIs, microservices, Node.js, NestJS, TypeScript, PostgreSQL, Docker, AWS, and AI integration.",
  keywords: [
    "Sriman Narayana Yendluri",
    "Backend Developer",
    "Node.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Microservices",
    "RAG",
    "pgvector",
  ],
  authors: [{ name: "Sriman Narayana Yendluri" }],
  openGraph: {
    title: "Sriman Narayana Yendluri | Backend Developer",
    description:
      "Backend Developer with 3+ years experience building scalable APIs, distributed microservices, and AI integrations (Node.js, NestJS, AWS, PostgreSQL).",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sriman Narayana Yendluri | Backend Developer",
    description:
      "Backend Developer with 3+ years experience building scalable APIs, microservices, and AI integrations.",
  },
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
      <body
        className="min-h-screen overflow-x-hidden antialiased bg-white text-gray-900 transition-colors duration-200"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
