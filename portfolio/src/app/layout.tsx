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
      <body className="min-h-screen overflow-x-hidden text-[var(--text)] antialiased">
        <div
          className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_12%_8%,rgba(245,165,36,0.2),transparent_40%),radial-gradient(circle_at_85%_12%,rgba(71,193,255,0.22),transparent_35%),radial-gradient(circle_at_70%_85%,rgba(26,36,46,0.75),transparent_55%)]"
          aria-hidden="true"
        ></div>
        <div
          className="fixed inset-0 -z-20 opacity-40 [mask-image:radial-gradient(circle_at_50%_25%,black,transparent_70%)]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_40%),linear-gradient(0deg,rgba(255,255,255,0.04),transparent_45%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-70" aria-hidden="true">
          <div className="absolute left-[-10%] top-16 h-72 w-72 rounded-full bg-[rgba(245,165,36,0.15)] blur-3xl float-slow"></div>
          <div className="absolute right-[-6%] top-64 h-80 w-80 rounded-full bg-[rgba(71,193,255,0.15)] blur-3xl float-slow"></div>
        </div>
        <div
          className="fixed inset-0 -z-10 opacity-20 mix-blend-soft-light"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_40%)]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
