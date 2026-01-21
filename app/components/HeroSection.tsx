"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { Volume2, VolumeX, Play, ArrowRight } from "lucide-react";

import { GridScan } from "./GridScan";

export default function HeroSection() {
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-28 md:pt-20">
            {/* Grid Scan Background - Updated to blue/slate tones */}
            <div className="absolute inset-0 z-0">
                <GridScan
                    sensitivity={0.55}
                    lineThickness={1}
                    linesColor="#eb5f0e"
                    gridScale={0.1}
                    scanColor="#eb5f0e"
                    scanOpacity={0.3}
                    enablePost={true}
                    bloomIntensity={0.4}
                    chromaticAberration={0.002}
                    noiseIntensity={0.01}
                    className="w-full h-full"
                />
            </div>

            {/* Radial Gradient Overlay - Blue/Slate tones */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-eb5f0e/8 rounded-full blur-3xl spotlight"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-eb5f0e/10 rounded-full blur-3xl spotlight" style={{ animationDelay: "2s" }}></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pointer-events-none flex flex-col justify-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="pointer-events-auto text-center lg:text-left fade-in">
                        {/* Main Heading */}
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            Build Logic That
                            <br />
                            <span className="gradient-text">
                                Thinks For You
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light tracking-wide">
                            Create powerful automation workflows with drag-and-drop simplicity.
                            <span className="text-white font-medium"> Infinite possibilities.</span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
                            <Link href="/contact" className="btn-primary group relative px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white text-lg font-bold rounded-xl hover:from-slate-500 hover:to-slate-600 transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(100,116,139,0.4)] hover:shadow-[0_0_40px_rgba(100,116,139,0.6)] min-w-[200px] flex items-center justify-center overflow-hidden border border-slate-500/40">
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Building
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-white" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-slate-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>

                            <Link href="/ai-agents" className="group px-8 py-4 glass-effect text-white text-lg font-semibold rounded-xl border border-slate-700/50 hover:border-blue-500/50 hover:bg-blue-500/10 transform hover:scale-105 transition-all duration-300 min-w-[200px] flex items-center justify-center gap-3 backdrop-blur-xl">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                Watch Demo
                                <Play className="w-4 h-4 fill-current" />
                            </Link>
                        </div>

                        {/* Stats - Compact Grid for Split Layout */}
                        {/* <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
                            <div className="glass-effect p-4 rounded-xl border border-slate-700/30">
                                <div className="text-2xl font-bold gradient-text">50K+</div>
                                <div className="text-xs text-slate-400">Active Users</div>
                            </div>
                            <div className="glass-effect p-4 rounded-xl border border-slate-700/30">
                                <div className="text-2xl font-bold gradient-text">2M+</div>
                                <div className="text-xs text-slate-400">Workflows</div>
                            </div>
                        </div> */}
                    </div>

                    {/* Right: Video Content */}
                    <div className="pointer-events-auto relative mt-8 lg:mt-0 fade-in" style={{ animationDelay: "0.2s" }}>
                        <div className="relative group cursor-pointer" onClick={handlePlayPause}>
                            {/* Glow Background - Blue/Slate */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 to-slate-600/40 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

                            {/* Video Frame */}
                            <div className="relative rounded-2xl overflow-hidden glass-effect border border-slate-700/30 shadow-2xl transform transition-all duration-500 hover:shadow-blue-500/10 group-hover:border-blue-500/30">
                                <video
                                    ref={videoRef}
                                    src="/home video/demo.mp4"
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="w-full h-auto object-cover"
                                />

                                {/* Play Button Overlay */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/20">
                                        <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.5)] transform group-hover:scale-110 transition-all duration-300">
                                            <Play className="w-8 h-8 text-white fill-white translate-x-1" />
                                        </div>
                                    </div>
                                )}

                                {/* Overlay Tint (hidden when playing) */}
                                {!isPlaying && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none"></div>
                                )}

                                {/* Audio Control */}
                                {isPlaying && (
                                    <button
                                        onClick={toggleMute}
                                        className="absolute bottom-4 right-4 p-3 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-700/50 text-white hover:bg-blue-600 hover:text-white transition-all duration-300 z-20 group/audio"
                                    >
                                        {isMuted ? (
                                            <VolumeX className="w-5 h-5 group-hover/audio:scale-110 transition-transform" />
                                        ) : (
                                            <Volume2 className="w-5 h-5 group-hover/audio:scale-110 transition-transform" />
                                        )}
                                    </button>
                                )}
                            </div>

                            {/* Floating UI Elements (Optional Decor) */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/15 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-slate-500/10 rounded-full blur-2xl"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pulse-animation pointer-events-auto z-10">
                <svg
                    className="w-6 h-6 text-slate-500/50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
