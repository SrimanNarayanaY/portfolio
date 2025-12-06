export default function About() {
    return (
        <section id="about" className="py-10 border-t border-slate-800/60">
            <h2 className="text-xl font-semibold text-slate-100">About Me</h2>

            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                I specialize in building <span className="text-cyan-300">robust backend systems</span> with clean architecture,
                strong security, and efficient data flows. From designing database schemas and optimizing queries to deploying
                cloud-native services on AWS, I enjoy solving complex engineering problems and making systems faster and more reliable.
                I’ve worked with authentication (JWT, OAuth, RBAC), payment gateway integrations, automated email workflows,
                and real-time event streams using Socket.IO. I actively contribute to open source and follow Agile practices,
                code reviews, and best engineering standards.
            </p>
        </section>
    );
}
