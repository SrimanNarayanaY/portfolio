export default function Skills() {
    return (
        <section id="skills" className="py-10 border-t border-slate-800/60">
            <h2 className="text-xl font-semibold text-slate-100 mb-4">Skills</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">

                {/* Programming Languages */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">Programming Languages</h3>
                    <ul className="space-y-1 text-slate-300">
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                    </ul>
                </div>

                {/* Frameworks */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">Frameworks</h3>
                    <ul className="space-y-1 text-slate-300">
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>NestJS</li>
                        <li>Hono.js</li>
                        <li>Fastify</li>
                        <li>Django</li>
                    </ul>
                </div>

                {/* Databases */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">Databases</h3>
                    <ul className="space-y-1 text-slate-300">
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Drizzle ORM</li>
                        <li>TypeORM</li>
                    </ul>
                </div>

                {/* Cloud & DevOps */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">Cloud & DevOps</h3>
                    <ul className="space-y-1 text-slate-300">
                        <li>AWS S3</li>
                        <li>AWS EC2</li>
                        <li>CI/CD pipelines</li>
                        <li>Serverless & automation</li>
                    </ul>
                </div>

                {/* Tools */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">Tools</h3>
                    <ul className="space-y-1 text-slate-300">
                        <li>Git</li>
                        <li> GitHub</li>
                        <li>Postman</li>
                    </ul>
                </div>

                {/* Concepts */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                    <h3 className="mb-2 text-sm font-semibold text-slate-100">Concepts</h3>
                    <ul className="space-y-1 text-slate-300">
                        <li>RESTful API design, Microservices</li>
                        <li>Performance Optimization, Caching</li>
                        <li>Data Migration, Security (JWT, OAuth, RBAC)</li>
                        <li>Payment Gateway Integration, Email Automation</li>
                        <li>Real-Time Events (Socket.IO)</li>
                        <li>Data Structures, Agile/Scrum</li>
                    </ul>
                </div>

            </div>
        </section >
    );
}
