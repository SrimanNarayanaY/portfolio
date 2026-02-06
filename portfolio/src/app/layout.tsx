import "./globals.css";

export const metadata = {
  title: "Sriman Narayana Yendluri | Backend Developer",
  description:
    "Portfolio of Sriman Narayana Yendluri, Backend Developer specializing in Node.js, NestJS, Django, PostgreSQL, MongoDB, AWS, and microservices.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen text-[var(--text)]">
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_15%_10%,rgba(245,165,36,0.18),transparent_45%),radial-gradient(circle_at_80%_15%,rgba(71,193,255,0.18),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(26,36,46,0.8),transparent_55%)]"></div>
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-60">
          <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-[rgba(245,165,36,0.15)] blur-3xl float-slow"></div>
          <div className="absolute right-[-6%] top-64 h-80 w-80 rounded-full bg-[rgba(71,193,255,0.15)] blur-3xl float-slow"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
