"use client";
import Link from "next/link";

export default function WorkflowShowcase() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl spotlight"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-block mb-6">
                            <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
                                Workflow Builder
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Design Complex Logic
                            <br />
                            <span className="gradient-text">With Simple Clicks</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            Our visual workflow builder transforms complex automation into an
                            intuitive, drag-and-drop experience. Build, test, and deploy in minutes.
                        </p>

                        {/* Feature List */}
                        <div className="space-y-4 mb-10">
                            {[
                                "Drag-and-drop interface for effortless workflow creation",
                                "Pre-built templates for common automation tasks",
                                "Real-time validation and error detection",
                                "One-click deployment to production"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3 fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-slate-600 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-slate-300">{item}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className="btn-primary px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-lg font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 glow-slate inline-block text-center border border-slate-500/30">
                            Try It Now
                        </Link>
                    </div>

                    {/* Right Visual */}
                    <div className="relative">
                        {/* Main Card */}
                        <div className="glass-effect p-8 rounded-3xl border border-slate-700/30 glow-slate transform hover:scale-105 transition-all duration-500">
                            {/* Workflow Nodes */}
                            <div className="space-y-6">
                                {/* Start Node */}
                                <div className="flex items-center gap-4 fade-in">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-bold">
                                        S
                                    </div>
                                    <div className="flex-1">
                                        <div className="glass-effect px-4 py-3 rounded-lg border border-green-500/30">
                                            <p className="text-sm font-semibold text-white">Start Trigger</p>
                                            <p className="text-xs text-slate-400 mt-1">When form is submitted</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="pl-6">
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-slate-600"></div>
                                </div>

                                {/* Process Node */}
                                <div className="flex items-center gap-4 fade-in" style={{ animationDelay: "0.2s" }}>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                                        P
                                    </div>
                                    <div className="flex-1">
                                        <div className="glass-effect px-4 py-3 rounded-lg border border-blue-500/30">
                                            <p className="text-sm font-semibold text-white">Process Data</p>
                                            <p className="text-xs text-slate-400 mt-1">Validate and transform</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="pl-6">
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-500 to-slate-600"></div>
                                </div>

                                {/* Decision Node */}
                                <div className="flex items-center gap-4 fade-in" style={{ animationDelay: "0.4s" }}>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                                        D
                                    </div>
                                    <div className="flex-1">
                                        <div className="glass-effect px-4 py-3 rounded-lg border border-purple-500/30">
                                            <p className="text-sm font-semibold text-white">Decision Point</p>
                                            <p className="text-xs text-slate-400 mt-1">If condition is true</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector */}
                                <div className="pl-6">
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-slate-500 to-slate-600"></div>
                                </div>

                                {/* Action Node */}
                                <div className="flex items-center gap-4 fade-in" style={{ animationDelay: "0.6s" }}>
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-slate-600 flex items-center justify-center text-white font-bold glow-slate">
                                        A
                                    </div>
                                    <div className="flex-1">
                                        <div className="glass-effect px-4 py-3 rounded-lg border border-slate-500/30">
                                            <p className="text-sm font-semibold text-white">Execute Action</p>
                                            <p className="text-xs text-slate-400 mt-1">Send notification</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="mt-8 pt-6 border-t border-slate-700/30 grid grid-cols-3 gap-4 fade-in" style={{ animationDelay: "0.8s" }}>
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text">4</p>
                                    <p className="text-xs text-slate-400 mt-1">Nodes</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text">2.5s</p>
                                    <p className="text-xs text-slate-400 mt-1">Exec Time</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold gradient-text">100%</p>
                                    <p className="text-xs text-slate-400 mt-1">Success</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 glass-effect p-4 rounded-xl border border-blue-500/30 float-animation">
                            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-xl border border-slate-600/30 float-animation" style={{ animationDelay: "1s" }}>
                            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
