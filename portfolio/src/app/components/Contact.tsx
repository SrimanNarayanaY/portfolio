import { Mail, Link2, Phone } from "lucide-react";

const contacts = [
    { label: "Email", value: "sriman793@gmail.com", href: "mailto:sriman793@gmail.com", Icon: Mail },
    { label: "LinkedIn", value: "sriman-narayana-yendluri", href: "https://linkedin.com/in/sriman-narayana-yendluri-14b34022a", Icon: Link2 },
    { label: "Phone", value: "+91 74168 99743", href: "tel:+917416899743", Icon: Phone },
];

export default function Contact() {
    return (
        <section id="contact" className="py-8 sm:py-10 border-t border-gray-200 bg-white">
            <div className="border border-gray-200 rounded-xl bg-white p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                        <span className="inline-block text-[10px] font-semibold uppercase tracking-wider border border-gray-200 rounded px-2 py-0.5 text-gray-500 bg-gray-100">
                            Contact
                        </span>
                        <h2 className="mt-2 text-lg font-bold text-gray-900 leading-snug">
                            Let&apos;s build something resilient.
                        </h2>
                        <p className="mt-1 max-w-md text-xs text-gray-500 leading-relaxed">
                            Available for backend engineering roles — API design, database optimisation, and secure microservice delivery.
                        </p>
                    </div>

                    <a
                        href="mailto:sriman793@gmail.com"
                        className="inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2.5 text-xs font-semibold transition-colors w-full sm:w-auto flex-shrink-0"
                    >
                        <Mail size={13} /> Get in Touch
                    </a>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {contacts.map(({ label, value, href, Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={label === "LinkedIn" ? "_blank" : undefined}
                            rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
                            className="flex items-start gap-2.5 border border-gray-200 hover:border-blue-300 rounded-lg bg-white p-3 text-inherit no-underline transition-colors"
                        >
                            <Icon size={14} className="text-blue-700 mt-0.5 flex-shrink-0" />
                            <div className="min-w-0">
                                <p className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">{label}</p>
                                <p className="text-xs font-medium text-gray-900 mt-0.5 truncate">{value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
