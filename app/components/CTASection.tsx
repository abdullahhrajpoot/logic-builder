"use client";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Effects - Blue/Slate tones */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl spotlight"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-500/15 rounded-full blur-3xl spotlight" style={{ animationDelay: "2s" }}></div>
            </div>
            <div className="absolute inset-0 grid-pattern opacity-20"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="glass-effect p-8 md:p-16 rounded-3xl border border-slate-700/40 glow-slate text-center overflow-hidden relative">
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 animated-gradient opacity-10"></div>

                    {/* Content */}
                    <div className="relative z-10">
                        {/* Badge */}
                        {/* <div className="inline-block mb-6 fade-in">
                            <div className="glass-effect px-6 py-2 rounded-full border border-blue-500/30 inline-flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                </span>
                                <span className="text-sm text-blue-400 font-medium">
                                    Join 50,000+ Users Today
                                </span>
                            </div>
                        </div> */}

                        {/* Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-in" style={{ animationDelay: "0.2s" }}>
                            Ready to Build
                            <br />
                            <span className="gradient-text">Smarter Workflows?</span>
                        </h2>

                        {/* Subheading */}
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in" style={{ animationDelay: "0.4s" }}>
                            Start automating your processes today. No credit card required.
                            <br />
                            Setup takes just minutes.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 fade-in" style={{ animationDelay: "0.6s" }}>
                            <Link href="/contact" className="btn-primary group px-10 py-5 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-lg font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 glow-slate-strong shadow-2xl min-w-[220px] flex items-center justify-center border border-slate-500/30">
                                Get in Touch
                                <svg
                                    className="inline-block ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                                    />
                                </svg>
                            </Link>
                            <Link href="/contact" className="group px-10 py-5 glass-effect text-white text-lg font-semibold rounded-xl border border-slate-700/50 hover:border-blue-500/50 transform hover:scale-105 transition-all duration-300 min-w-[220px] flex items-center justify-center">
                                Schedule Demo
                                <svg
                                    className="inline-block ml-2 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
