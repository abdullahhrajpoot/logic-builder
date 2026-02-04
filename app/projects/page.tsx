"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectsPage() {

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <div className="inline-block mb-4">
                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
                            Our Portfolio
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Discover our cutting-edge automation solutions and AI-powered workflows
                        that are transforming businesses across industries.
                    </p>
                </div>

                {/* First Video Section - Partnership Opportunity */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Bring the Leads, <span className="gradient-text">We Handle the Rest</span>
                    </h2>
                    <p className="text-lg text-slate-400 text-center mb-8 max-w-2xl mx-auto">
                        Partner with us — you bring the business, we cover the costs and deliver the results.
                    </p>
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-effect border border-slate-700/30 shadow-2xl group">
                        {/* Ambient Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-slate-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient"></div>

                        <div className="relative h-full w-full bg-slate-950 rounded-3xl overflow-hidden">
                            {/* Google Drive Video Iframe */}
                            <iframe
                                src="https://drive.google.com/file/d/1UfI2I216EE-H5tBOJlcl975dRumk3wlr/preview"
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                style={{
                                    border: 'none',
                                    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Second Video Section - Projects We've Worked On */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        Projects That We Have <span className="gradient-text">Worked On</span>
                    </h2>
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-effect border border-slate-700/30 shadow-2xl group">
                        {/* Ambient Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-slate-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-gradient"></div>

                        <div className="relative h-full w-full bg-slate-950 rounded-3xl overflow-hidden">
                            {/* Google Drive Video Iframe */}
                            <iframe
                                src="https://drive.google.com/file/d/11rL4SRBrpDTh5elWGNwokbrICk9qVDGw/preview"
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                style={{
                                    border: 'none',
                                    boxShadow: '0 0 50px rgba(0,0,0,0.5)',
                                }}
                            ></iframe>
                        </div>
                    </div>
                </div>


                {/* CTA Section */}
                <div className="mt-20 text-center fade-in">
                    <div className="glass-effect p-12 rounded-3xl border border-slate-700/30 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Build Your <span className="gradient-text">Dream Project</span>?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
                            Let's collaborate to create something extraordinary. Our team is ready to
                            bring your vision to life with cutting-edge technology.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-lg font-semibold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 glow-slate border border-slate-500/30"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
