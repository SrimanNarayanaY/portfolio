import { Mail, Link2, Phone, GitBranch } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-blue-700 mt-0.5 flex-shrink-0"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            />
        </svg>
    );
}

const contacts = [
    { label: "Email", value: "sriman793@gmail.com", href: "mailto:sriman793@gmail.com", Icon: Mail },
    { label: "LinkedIn", value: "sriman-narayana-yendluri", href: "https://linkedin.com/in/sriman-narayana-yendluri-14b34022a", Icon: Link2 },
    { label: "GitHub", value: "SrimanNarayanaY", href: "https://github.com/SrimanNarayanaY", customIcon: true },
    { label: "Phone & Location", value: "+91 74168 99743 · Noida", href: "tel:+917416899743", Icon: Phone },
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
                            Available for backend engineering roles — RESTful API design, database optimisation, payment integrations, and secure microservices.
                        </p>
                    </div>

                    <a
                        href="mailto:sriman793@gmail.com"
                        className="inline-flex items-center justify-center gap-1.5 bg-blue-700 hover:bg-blue-800 text-white rounded-md px-4 py-2.5 text-xs font-semibold transition-colors w-full sm:w-auto flex-shrink-0"
                    >
                        <Mail size={13} /> Get in Touch
                    </a>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {contacts.map(({ label, value, href, Icon, customIcon }) => (
                        <a
                            key={label}
                            href={href}
                            target={label === "LinkedIn" || label === "GitHub" ? "_blank" : undefined}
                            rel={label === "LinkedIn" || label === "GitHub" ? "noopener noreferrer" : undefined}
                            className="flex items-start gap-2.5 border border-gray-200 hover:border-blue-300 rounded-lg bg-white p-3 text-inherit no-underline transition-colors"
                        >
                            {customIcon ? (
                                <GithubIcon size={14} />
                            ) : (
                                Icon && <Icon size={14} className="text-blue-700 mt-0.5 flex-shrink-0" />
                            )}
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
