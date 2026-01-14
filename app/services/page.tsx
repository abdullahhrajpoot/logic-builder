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
        <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 px-6 lg:px-8">
                <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 fade-in">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed fade-in" style={{ animationDelay: "0.2s" }}>
                        Automation isn't just about saving time—it's about engineering a smarter future. We provide a bespoke ecosystem of intelligence designed to scale your vision, optimize your logic, and obliterate inefficiency.
                    </p>
                    <Link href="/contact" className="btn-primary px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 glow-orange fade-in inline-block" style={{ animationDelay: "0.4s" }}>
                        Get Started
                    </Link>
                </div>
            </section>

            {/* "What Makes Us Different" Section - Revamped */}
            <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Why Choose <span className="gradient-text">Logic Builder?</span>
                        </h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            We don't just build scripts; we engineer intelligence. Experience the calm of automation in a chaotic world.
                            Our systems breathe logic into your operations, turning manual chaos into orchestrated symphony.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-[400px] flex flex-col justify-end">
                            <div className="absolute inset-0">
                                <Image src="/services/tmp79n9d12f.webp" alt="Speed" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Precision Speed</h3>
                                <p className="text-gray-400">Deploy workflows 10x faster with our pre-built logic blocks and intelligent auto-completion. Speed without sacrifice.</p>
                            </div>
                        </div>

                        {/* Card 2 - Featured */}
                        <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-orange-600/20 to-black border border-orange-500/50 hover:border-orange-400 transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-2xl shadow-orange-500/10 h-[400px] flex flex-col justify-end">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpt8erqnj1.webp" alt="AI Core" fill className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            </div>
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/30 blur-[80px] rounded-full"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/20 backdrop-blur-md">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">AI Core</h3>
                                <p className="text-gray-200">Our systems don't just execute; they think. Self-healing workflows that adapt to data anomalies in real-time. True cognitive automation.</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden h-[400px] flex flex-col justify-end">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpzueveik_.webp" alt="Visual Clarity" fill className="object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-bl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                                    <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">Visual Clarity</h3>
                                <p className="text-gray-400">Complex logic visualized beautifully. Understand your entire operation at a single glance. No black boxes.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Showcase - Creative Bento / Grid Style */}
            <section className="py-24 px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-orange-500 font-semibold tracking-wider text-sm uppercase">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-2">
                            A Suite of <span className="gradient-text">Premium Tools</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[400px]">

                        {/* Featured Service - Large */}
                        <div className="group lg:col-span-8 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500">
                            <div className="absolute inset-0">
                                <Image src="/services/tmp79n9d12f.webp" alt="Strategy Builder" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 md:p-12 z-10 w-full">
                                <h3 className="text-3xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform duration-300">Strategy Builder</h3>
                                <p className="text-gray-300 max-w-xl text-lg mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Build sophisticated automated strategies to guide your business. Whether you map out your customer journey or optimize internal workflows, our builder gives you the tactical edge.
                                </p>
                                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                                    <svg className="w-6 h-6 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Side Service - Tall */}
                        <div className="group lg:col-span-4 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpaa0b0xtb.webp" alt="Recommendation" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Recommendation Generator</h3>
                                <p className="text-sm text-gray-300 line-clamp-3 mb-4">The Recommendation Generator analyzes your processes and data to automatically suggest optimizations.</p>
                                <span className="text-orange-400 text-sm font-semibold group-hover:underline decoration-orange-500/0 hover:decoration-orange-500 transition-all">Explore</span>
                            </div>
                        </div>

                        {/* Side Service 2 */}
                        <div className="group lg:col-span-5 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpjq5m15fl.webp" alt="Deal Builder" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 z-10">
                                <h3 className="text-2xl font-bold text-white mb-2">Deal Builder</h3>
                                <p className="text-sm text-gray-300">Close deals faster with AI-driven insights and tracking.</p>
                            </div>
                        </div>

                        {/* Wide Service */}
                        <div className="group lg:col-span-7 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpkhmr3zz4.webp" alt="Outreach" fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" />
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/50 to-black"></div>
                            </div>
                            <div className="absolute top-1/2 left-8 -translate-y-1/2 z-10 max-w-sm">
                                <div className="p-3 bg-orange-500/20 backdrop-blur-md rounded-xl inline-block mb-4">
                                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Smart Outreach</h3>
                                <p className="text-gray-300 mb-6">Scale communication without losing the personal touch. Authenticity at scale.</p>
                                <button className="text-white border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all">See details</button>
                            </div>
                        </div>

                        {/* Three Small Cards */}
                        <div className="group lg:col-span-4 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500 bg-orange-950/20">
                            <div className="absolute inset-0">
                                <Image src="/services/tmprg_lcuh6.webp" alt="AI Toolkit" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-4 backdrop-blur-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">AI Toolkit</h3>
                                    <p className="text-sm text-gray-400">Complete suite of predictive utilities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group lg:col-span-4 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500 bg-blue-950/20">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpt8erqnj1.webp" alt="Talent Hub" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4 backdrop-blur-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Talent Hub</h3>
                                    <p className="text-sm text-gray-400">Connect with automation experts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="group lg:col-span-4 relative rounded-3xl overflow-hidden glass-effect border border-white/10 hover:border-orange-500/50 transition-all duration-500 bg-green-950/20">
                            <div className="absolute inset-0">
                                <Image src="/services/tmpzueveik_.webp" alt="Workflow Library" fill className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-50 mix-blend-overlay" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>
                            <div className="p-8 h-full flex flex-col justify-between relative z-10">
                                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4 backdrop-blur-md">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Workflow Library</h3>
                                    <p className="text-sm text-gray-400">Pre-built, ready to scale.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom CTA / Form Section */}
            <section className="py-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 rounded-3xl overflow-hidden shadow-2xl">

                    {/* Left Frame: Orange Gradient */}
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                See what our AI sounds like — <br /> try it now
                            </h2>
                            <p className="text-orange-100 text-lg mb-8">
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
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Phone *</label>
                                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-gray-900" placeholder="" />
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" id="consent" className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                                <label htmlFor="consent" className="text-xs text-gray-500 leading-relaxed">
                                    I agree to the <a href="#" className="underline hover:text-orange-500">Terms of Service</a> and allow Logic Builder to contact me.
                                </label>
                            </div>

                            <button className="w-full btn-primary bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg mt-4">
                                Get Started Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
