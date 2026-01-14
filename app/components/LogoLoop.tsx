"use client";

import Image from 'next/image';

const logos = [
    {
        name: 'Perplexity',
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Perplexity_AI_logo.svg'
    },
    {
        name: 'Lovable',
        url: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&flavor=SQUARE&size=256&x=0&y=0&u=https://lovable.dev'
    },
    {
        name: 'GoHighLevel',
        url: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&flavor=SQUARE&size=256&x=0&y=0&u=https://gohighlevel.com'
    },
    {
        name: 'Eleven Labs',
        url: 'https://upload.wikimedia.org/wikipedia/commons/8/88/ElevenLabs_logo_2023.svg'
    },
    {
        name: 'HeyGen',
        url: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&flavor=SQUARE&size=256&x=0&y=0&u=https://heygen.com'
    },
    {
        name: 'SubMagic',
        url: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&flavor=SQUARE&size=256&x=0&y=0&u=https://submagic.co'
    },
    {
        name: 'GenSpark',
        url: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&flavor=SQUARE&size=256&x=0&y=0&u=https://genspark.ai'
    },
    {
        name: 'ManyChat',
        url: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Manychat-logo-blue.svg'
    },
    {
        name: 'Instantly',
        url: 'https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&flavor=SQUARE&size=256&x=0&y=0&u=https://instantly.ai'
    },
];

export default function LogoLoop() {
    return (
        <section className="py-24 overflow-hidden relative w-full bg-[#0a0a0a]">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-40" />

            <div className="container mx-auto px-4 mb-16 text-center relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium text-white/50 tracking-wider uppercase mb-4">
                    Ecosystem
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    Powered by world-class AI
                </h3>
            </div>

            <div className="relative flex overflow-hidden mask-gradient-x w-full">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

                <div className="flex shrink-0 items-center gap-20 animate-scroll pl-20 min-w-full">
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="relative w-40 h-16 flex items-center justify-center group"
                        >
                            <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4 blur-xl" />
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={160}
                                height={64}
                                unoptimized
                                className="object-contain w-full h-full filter grayscale opacity-50 contrast-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-500 transform hover:scale-110"
                                style={{
                                    // Invert dark logos like ElevenLabs/Perplexity for better visibility on dark bg
                                    // but keep colored ones like ManyChat as is when hovered?
                                    // Actually, a simple distinct filter for dark mode usually works best:
                                    // Brightness 0 Invert 1 makes everything white.
                                    // But user complained about "colors way off".
                                    // So we stick to: Grayscale -> Color.
                                    // If a logo is black (ElevenLabs), Grayscale is black.
                                    // We add brightness-200 to pop it out against dark background.
                                }}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex shrink-0 items-center gap-20 animate-scroll pl-20 min-w-full" aria-hidden="true">
                    {logos.concat(logos).map((logo, index) => (
                        <div
                            key={`${logo.name}-duplicate-${index}`}
                            className="relative w-40 h-16 flex items-center justify-center group"
                        >
                            <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4 blur-xl" />
                            <Image
                                src={logo.url}
                                alt={logo.name}
                                width={160}
                                height={64}
                                unoptimized
                                className="object-contain w-full h-full filter grayscale opacity-50 contrast-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 transition-all duration-500 transform hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
