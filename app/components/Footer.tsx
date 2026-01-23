"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/people/Logic-Builder-AI/61580976901754/" },
    { icon: Instagram, href: "https://www.instagram.com/logicbuilder.ai" },
    { icon: Youtube, href: "https://www.youtube.com/@LogicBuilder-ai" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

export default function Footer() {
    const text = "LOGIC BUILDER";

    return (
        <footer className="relative bg-slate-950 border-t border-slate-800/50 pt-24 pb-0 overflow-hidden">
            {/* Ambient Background Glow - Blue/Slate */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-30 pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[500px] h-[500px] bg-slate-600/10 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-20"
            >
                <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-24 mb-16">
                    {/* Brand Section */}
                    <motion.div variants={itemVariants} className="flex-1 max-w-sm">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-12 h-12 flex items-center justify-center bg-white/5 rounded-xl border border-slate-700/50 shadow-lg group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 transition-all duration-300">
                                <Image
                                    src="/images/logo-footer.png"
                                    alt="Logic Builder Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain w-8 h-8"
                                />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">Logic Builder</span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            Empowering businesses with AI & automation solutions.
                            <br />
                            <span className="text-white font-medium">Pure logic. Infinite scale.</span>
                        </p>

                        <div className="flex gap-4">
                            {socialLinks.map((Social, index) => (
                                <a
                                    key={index}
                                    href={Social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-slate-700/50 hover:bg-blue-600 hover:border-blue-600 text-slate-400 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                >
                                    <Social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-12 md:gap-24">
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
                            <ul className="space-y-4">
                                {['About', 'Contact', 'AI Agents'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold text-lg mb-6">Legal</h4>
                            <ul className="space-y-4">
                                {['Privacy Policy', 'Terms of Service'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-blue-400 transition-colors">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar Details */}
                <motion.div variants={itemVariants} className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 border-t border-slate-800/50 pt-8">
                    <p>© {new Date().getFullYear()} Logic Builder. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Made with logic.</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Giant Typography Reveal */}
            <div className="w-full overflow-hidden flex justify-center items-end opacity-20 pointer-events-none select-none bg-gradient-to-t from-slate-950 via-transparent to-transparent absolute bottom-0 left-0 right-0">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex translate-y-[20%]"
                >
                    {text.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { y: "100%", opacity: 0 },
                                visible: { y: 0, opacity: 1 }
                            }}
                            transition={{
                                duration: 1,
                                delay: i * 0.05,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-[15vw] md:text-[18vw] leading-[0.8] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-400 to-slate-400/0"
                            style={{
                                WebkitTextStroke: '1px rgba(148,163,184,0.1)'
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.div>
            </div>
            {/* Spacer for the text to sit in */}
            <div className="h-[15vw] md:h-[18vw] pointer-events-none" aria-hidden="true" />
        </footer>
    );
}
