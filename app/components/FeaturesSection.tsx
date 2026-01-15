"use client";
import Link from "next/link";

export default function FeaturesSection() {
    const features = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Lightning Fast",
            description: "Build complex workflows in minutes with our intuitive drag-and-drop interface. No coding required."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Enterprise Security",
            description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
            ),
            title: "Smart Automation",
            description: "AI-powered suggestions and auto-optimization to make your workflows even more efficient."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            ),
            title: "Visual Builder",
            description: "Visualize your entire logic flow with our beautiful, interactive canvas."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            ),
            title: "Real-time Analytics",
            description: "Track performance, monitor executions, and optimize your workflows with live insights."
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Team Collaboration",
            description: "Work together seamlessly with version control, comments, and shared workspaces."
        },
    ];

    return (
        <section id="features" className="relative py-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <div className="inline-block mb-4">
                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
                            Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Everything You Need to
                        <br />
                        <span className="gradient-text">Automate Smarter</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Powerful features designed to make automation accessible to everyone,
                        from startups to enterprises.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                            style={{
                                animation: `fade-in 0.6s ease-out forwards`,
                                animationDelay: `${index * 0.1}s`,
                                opacity: 0
                            }}
                        >
                            {/* Icon */}
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-600 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                                <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-slate-600/20 rounded-xl border border-blue-500/30 group-hover:border-blue-400 transition-all duration-300 text-blue-400 group-hover:text-blue-300">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-all duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>

                            {/* Hover Arrow */}
                            <div className="mt-6 flex items-center text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                                <span className="text-sm font-medium">Learn more</span>
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 text-center">
                    <Link href="/services" className="btn-primary px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-lg font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 glow-slate shadow-2xl inline-flex items-center border border-slate-500/30">
                        Explore All Features
                        <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
