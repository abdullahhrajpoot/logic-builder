"use client";

import Image from 'next/image';

const logos = [
    {
        name: 'Partner 1',
        url: '/icons/partner-1.png'
    },
    {
        name: 'Partner 2',
        url: '/icons/partner-2.png'
    },
    {
        name: 'Partner 3',
        url: '/icons/partner-3.png'
    },
    {
        name: 'Partner 4',
        url: '/icons/partner-4.jfif'
    },
    {
        name: 'Partner 5',
        url: '/icons/partner-5.jfif'
    },
    {
        name: 'Partner 6',
        url: '/icons/partner-6.png'
    },
    {
        name: 'Instantly',
        url: '/icons/instantly.png'
    },
];

export default function LogoLoop() {
    return (
        <section className="py-24 overflow-hidden relative w-full bg-slate-950">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/10 via-transparent to-transparent opacity-40" />

            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-slate-700/50 backdrop-blur-sm text-xs font-medium text-slate-400 tracking-wider uppercase mb-4">
                    Ecosystem
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Powered by world-class AI
                </h3>
            </div>

            <div className="relative flex overflow-hidden mask-gradient-x w-full">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 items-center gap-12 animate-scroll pl-12 min-w-full">
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="relative w-48 h-32 flex items-center justify-center group bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={192}
                                height={128}
                                unoptimized
                                className="object-contain w-full h-full p-4 transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
                <div className="flex shrink-0 items-center gap-12 animate-scroll pl-12 min-w-full" aria-hidden="true">
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={`${logo.name}-duplicate-${index}`}
                            className="relative w-48 h-32 flex items-center justify-center group bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10"
                        >
                            <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={192}
                                height={128}
                                unoptimized
                                className="object-contain w-full h-full p-4 transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
