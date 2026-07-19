import "./globals.css";

export const metadata = {
  title: "Sriman Narayana Yendluri | Backend Developer",
  description:
    "Portfolio of Sriman Narayana Yendluri, Backend Developer specializing in Node.js, NestJS (NX monorepo), TypeORM, PostgreSQL, MongoDB, AWS, Utho Cloud VPS, and CI/CD.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen overflow-x-hidden text-[var(--text)] antialiased">

        {/* Ambient gradient blobs */}
        <div
          className="pointer-events-none fixed inset-0 -z-30 overflow-hidden"
          aria-hidden="true"
        >
          <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(71,193,255,0.12),transparent_65%)] blur-3xl" />
          <div className="absolute -top-20 right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,165,36,0.1),transparent_65%)] blur-3xl" />
          <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.08),transparent_65%)] blur-3xl" />
        </div>

        {/* Animated floating glows */}
        <div className="pointer-events-none fixed inset-0 -z-20 opacity-60" aria-hidden="true">
          <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[rgba(245,165,36,0.12)] blur-3xl float-slow" />
          <div className="absolute right-[-5%] top-80 h-80 w-80 rounded-full bg-[rgba(71,193,255,0.12)] blur-3xl float-slow" style={{ animationDelay: "3s" }} />
        </div>

        {/* Subtle noise texture */}
        <div
          className="pointer-events-none fixed inset-0 -z-10 opacity-[0.025] mix-blend-overlay"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}
          aria-hidden="true"
        />

        {children}
      </body>
    </html>
  );
}
