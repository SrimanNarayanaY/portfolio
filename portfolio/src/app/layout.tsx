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
      <body className="bg-slate-950 text-slate-100 font-sans">
        {/* Background gradient */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-950 to-black"></div>
        <div
          className="fixed inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 0% 0%, #22d3ee55 0, transparent 55%), radial-gradient(circle at 100% 100%, #4f46e555 0, transparent 55%)",
          }}
        ></div>

        {children}
      </body>
    </html>
  );
}
