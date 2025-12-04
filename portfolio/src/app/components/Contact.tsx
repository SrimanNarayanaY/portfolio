export default function Contact() {
    return (
        <section id="contact" className="py-10 border-t border-slate-800/60">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Contact</h2>

            <p className="text-sm text-slate-300">
                If you're looking for a backend developer to build scalable APIs, optimize database performance,
                or design secure microservices, I'd be happy to connect.
            </p>

            <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm">

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs text-slate-400">Email</p>
                    <a href="mailto:sriman793@gmail.com" className="text-sm font-medium text-cyan-300 hover:underline">
                        sriman793@gmail.com
                    </a>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs text-slate-400">LinkedIn</p>
                    <a
                        href="https://linkedin.com/in/sriman-narayana-yendluri-14b34022a"
                        target="_blank"
                        className="text-sm font-medium text-cyan-300 hover:underline"
                    >
                        linkedin.com/in/sriman-narayana-yendluri-14b34022a
                    </a>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="text-sm font-medium text-slate-200">+91 74168 99753</p>
                </div>

            </div>
        </section>
    );
}
