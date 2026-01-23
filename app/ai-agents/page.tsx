"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useRef } from "react";
import { Play } from "lucide-react";

export default function AiAgentsPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
            <Navbar />

            <main className="pt-32 md:pt-48 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 fade-in">
                    <div className="inline-block mb-4">
                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
                            Next Gen Automation
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        Autonomous <span className="gradient-text">AI Agents</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Deploy intelligent agents that understand context, execute complex tasks, and adapt to your business needs in real-time.
                        Experience the future of work where AI handles the heavy lifting.
                    </p>
                </div>

                {/* Video Showcase */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-effect border border-slate-700/30 shadow-2xl group mb-20">
                    {/* Ambient Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-slate-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                    <div className="relative h-full w-full bg-slate-950 rounded-3xl overflow-hidden">
                        <video
                            ref={videoRef}
                            src="/ai agents/demo.mp4"
                            poster="/ai agents/thumbnail.png"
                            controls={isPlaying}
                            className="w-full h-full object-cover"
                            style={{ boxShadow: '0 0 50px rgba(0,0,0,0.5)' }}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        >
                            Your browser does not support the video tag.
                        </video>

                        {/* Custom Play Button Overlay */}
                        {!isPlaying && (
                            <div
                                onClick={handlePlay}
                                className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer transition-all duration-300 hover:bg-black/20 z-10"
                            >
                                <div className="w-24 h-24 bg-orange-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.5)] transform group-hover:scale-110 transition-all duration-300">
                                    <Play className="w-10 h-10 text-white fill-white translate-x-1" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Context / Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Feature 1 */}
                    <div className="glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Self-Running</h3>
                        <p className="text-slate-400 leading-relaxed">Agents operate independently 24/7, handling complex workflows without human intervention or oversight.</p>
                    </div>
                    {/* Feature 2 */}
                    <div className="glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Context Aware</h3>
                        <p className="text-slate-400 leading-relaxed">Understand intent and nuance in data, allowing for smarter decision making and personalized responses.</p>
                    </div>
                    {/* Feature 3 */}
                    <div className="glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 border border-blue-500/30">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Multi-Modal</h3>
                        <p className="text-slate-400 leading-relaxed">Process text, images, and data streams simultaneously for comprehensive analysis and output generation.</p>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
}
