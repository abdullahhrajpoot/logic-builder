import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Service Data
const services = [
    {
        title: "Strategy Builder",
        description: "Build sophisticated automated strategies to guide your business. Whether you map out your customer journey or optimize internal workflows, our builder gives you the tactical edge you need.",
        image: "/services/tmp79n9d12f.webp",
        align: "right"
    },
    {
        title: "Recommendation Generator",
        description: "The Recommendation Generator analyzes your processes and data to automatically suggest optimizations. It's like having a dedicated consultant monitoring your systems 24/7.",
        image: "/services/tmpaa0b0xtb.webp",
        align: "left"
    },
    {
        title: "Deal Builder",
        description: "Closing deals is an art and a science. Our Deal Builder structure helps you manage and track opportunities with AI-driven insights, ensuring you never miss a critical follow-up or closing signal.",
        image: "/services/tmpjq5m15fl.webp",
        align: "right"
    },
    {
        title: "Outreach",
        description: "Scale your communication without losing the personal touch. Our Outreach tools automate responses and follow-ups while maintaining authentic engagement with your audience.",
        image: "/services/tmpkhmr3zz4.webp",
        align: "left"
    },
    {
        title: "AI Toolkit",
        description: "Unlock a complete suite of AI utilities designed to enhance decision making. From predictive analytics to natural language processing, this toolkit empowers your logic like never before.",
        image: "/services/tmprg_lcuh6.webp",
        align: "right"
    },
    {
        title: "Talent Hub",
        description: "Connect with top-tier automation experts. The Talent Hub helps you find, vet, and collaborate with professionals who can translate your vision into robust automated reality.",
        image: "/services/tmpt8erqnj1.webp",
        align: "left"
    },
    {
        title: "Workflow Library",
        description: "Don't start from scratch. Access a vast library of pre-built, production-ready workflows. Customize them to fit your needs and deploy in minutes, not weeks.",
        image: "/services/tmpzueveik_.webp",
        align: "right"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 px-6 lg:px-8">
                <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in">
                        AI & Automation <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl text-slate-400 mb-6 leading-relaxed fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.2s" }}>
                        We don't just talk about AI—<span className="text-white font-semibold">we build it for you</span> or <span className="text-blue-400 font-semibold">teach you how</span>.
                        From AI Dialers and automated outreach to full-stack CRM integrations, we deliver solutions that drive real results.
                    </p>
                    <p className="text-lg text-slate-500 mb-10 fade-in" style={{ animationDelay: "0.3s" }}>
                        Whether you want us to <span className="text-white">implement it for you</span> or <span className="text-white">learn to do it yourself</span>—we've got you covered.
                    </p>
                    <Link href="/contact" className="btn-primary px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all duration-300 glow-slate fade-in inline-block border border-slate-500/30" style={{ animationDelay: "0.4s" }}>
                        Schedule Demo
                    </Link>
                </div>
            </section>

            {/* Section 1: For Businesses - Done-For-You */}
            <section className="py-24 px-6 lg:px-8 relative bg-slate-900 border-y border-slate-800/50">
                <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6 border border-blue-500/20">
                                For Businesses
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                Production-Grade <span className="text-blue-400">AI Systems</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                                <p>
                                    We build custom AI agents, automation workflows, and production-grade software that run sales, marketing, operations, and customer support without human dependency. From <span className="text-white font-semibold">AI dialing systems</span>, <span className="text-white font-semibold">CRM automation</span>, and <span className="text-white font-semibold">lead qualification engines</span> to custom web apps, internal tools, and high-performance websites, everything we build is engineered for speed, reliability, and scale.
                                </p>
                                <p>
                                    Our capabilities span AI content generation, voice and chat agents, custom integrations, API-driven systems, no-code and low-code automation, backend infrastructure, and end-to-end app development. We don’t sell tools. We build systems that work together, ship fast, and produce measurable results.
                                </p>
                                <p className="text-xl font-medium text-white pt-4 border-l-4 border-blue-500 pl-6">
                                    If it can be automated, systemized, or scaled with AI, we build it.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all font-semibold shadow-lg shadow-blue-900/20">
                                    Build Your System
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Visual / Feature Grid for Business */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Voice & Chat Agents</h3>
                                <p className="text-sm text-slate-400">Intelligent 24/7 customer interaction handling.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">CRM Automation</h3>
                                <p className="text-sm text-slate-400">Seamless data flow and lead management.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Custom Web Apps</h3>
                                <p className="text-sm text-slate-400">Tailored software solutions for your specific needs.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">High-Performance</h3>
                                <p className="text-sm text-slate-400">Engineered for speed, reliability, and scale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: For Education - Operating System */}
            <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-slate-950 pointer-events-none"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">
                        {/* Content acts as second visually on desktop for variety */}
                        <div className="order-1 lg:order-2">
                            <span className="inline-block py-1 px-3 rounded-full bg-purple-500/10 text-purple-400 text-sm font-semibold mb-6 border border-purple-500/20">
                                For Education
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                An Operating System for <span className="text-purple-400">Learning & Building</span>
                            </h2>
                            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                                <p>
                                    Our education platform is a full-scale AI and automation training system built for people who want real, deployable skills. We teach AI fundamentals, automation logic, agent workflows, CRM systems, AI dialers, app building, and real-world implementation, not theory.
                                </p>
                                <p>
                                    Members get access to a complete AI toolkit to identify profitable niches, validate opportunities, map system architecture, and deploy solutions fast. We pair training with vetted developers, proven frameworks, templates, playbooks, and step-by-step execution paths so you’re not stuck guessing or learning in isolation.
                                </p>
                                <p className="text-xl font-medium text-white pt-4 border-l-4 border-purple-500 pl-6">
                                    This isn’t a course. It’s an operating system for learning, building, and shipping AI-powered businesses.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-all font-semibold shadow-lg shadow-purple-900/20">
                                    Access the System
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </Link>
                            </div>
                        </div>

                        {/* Visual / Feature Grid for Education */}
                        <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Real Implementation</h3>
                                <p className="text-sm text-slate-400">Deployable skills, not just theory. Build real systems.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">AI Toolkit</h3>
                                <p className="text-sm text-slate-400">Everything you need to identify and validate opportunities.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Community</h3>
                                <p className="text-sm text-slate-400">Vetted developers and a network of builders.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">Playbooks</h3>
                                <p className="text-sm text-slate-400">Proven templates and step-by-step execution paths.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA / Form Section */}
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left Frame: Blue/Slate Gradient */}
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                See what our AI sounds like — <br />try it now
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Experience the difference of Logic Builder's intelligent core.
                                No commitments, just pure performance.
                            </p>
                        </div>
                    </div>

                    {/* Right Frame: Form */}
                    <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">First Name *</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Phone *</label>
                                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900" placeholder="" />
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                                    I agree to the <a href="#" className="underline hover:text-blue-500">Terms of Service</a> and allow Logic Builder to contact me.
                                </label>
                            </div>

                            <button className="w-full btn-primary bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold py-4 rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg mt-4">
                                Schedule Demo
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
