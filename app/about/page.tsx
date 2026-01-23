import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 md:pt-48 pb-20 px-6 lg:px-8">
                <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
                {/* Spotlight Effect */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 mb-8">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
                        About <span className="gradient-text">Us</span>
                    </h1>
                    <p className="text-xl text-slate-400 fade-in" style={{ animationDelay: "0.2s" }}>
                        Start and grow your business with Logic Builder's <span className="text-blue-400 font-semibold">AI systems</span> built for everyone.
                    </p>
                </div>
            </section>

            {/* Vision Section */}
            <section className="py-20 px-6 lg:px-8 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="glass-effect rounded-3xl p-1 md:p-2 relative overflow-hidden group">
                        {/* Glowing border via gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-transparent to-slate-500/40 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <div className="bg-slate-950/80 rounded-2xl p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 backdrop-blur-sm">

                            <div className="fade-in">
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                    Artificial Intelligence represents the next technological <br />
                                    <span className="gradient-text">breakthrough</span>.
                                </h2>
                                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                                    <p>
                                        Our vision is to help entrepreneurs and organizations embrace the future of business powered by AI.
                                    </p>
                                    <p>
                                        Logic Builder is a global leader in AI enablement, offering the platforms and tools needed to accelerate success.
                                    </p>
                                    <p>
                                        By connecting businesses with automation that drives efficiency, we allow them to dedicate energy to growth, creativity, and the innovations that make a difference.
                                    </p>
                                </div>
                            </div>

                            <div className="relative h-[400px] w-full flex items-center justify-center float-animation">
                                {/* Placeholder matching assumption: Image 2 is Globe/Tech */}
                                <div className="relative w-full h-full rounded-2xl overflow-hidden glass-effect border border-blue-500/20 shadow-[0_0_50px_rgba(96,165,250,0.15)]">
                                    <Image
                                        src="/about/tmprk9uairb.webp"
                                        alt="Global AI Network"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 fade-in">
                        Meet Our <span className="gradient-text">Team</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
                        {/* Team Member 1: CEO */}
                        <div className="group relative fade-in" style={{ animationDelay: "0.2s" }}>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-2xl border border-slate-700/30">
                                {/* Placeholder matching assumption: Image 3 is CEO */}
                                <Image
                                    src="/about/tmpgl37crao.webp"
                                    alt="Joseph Carter"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-100"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-1 group-hover:text-blue-400 transition-colors">Joseph Carter</h3>
                                <p className="text-blue-400 font-semibold mb-4 tracking-wide text-sm uppercase">Co-Founder and CEO</p>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                                    Joseph brings a mission-driven mindset shaped by his time in the Navy. He has built multiple seven-figure businesses scaled real estate ventures using AI, and creates solutions that help businesses stay ahead.
                                </p>
                            </div>
                        </div>

                        {/* Team Member 2: CTO */}
                        <div className="group relative fade-in" style={{ animationDelay: "0.4s" }}>
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-2xl border border-slate-700/30">
                                {/* Placeholder matching assumption: Image 4 is CTO */}
                                <Image
                                    src="/about/tmp2ub0zqgo.webp"
                                    alt="Marc Shuster"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-100"></div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-3xl font-bold mb-1 group-hover:text-blue-400 transition-colors">Marc Shuster</h3>
                                <p className="text-blue-400 font-semibold mb-4 tracking-wide text-sm uppercase">Co-Founder and CTO</p>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
                                    Marc is an AI and automation expert who builds practical systems that help businesses work smarter. With experience growing multiple brands, he brings a hands-on approach to turning complex workflows into revenue-driving engines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reused Bottom CTA Section */}
            <section className="py-20 px-6 lg:px-8 mb-20 fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Left Frame: Blue/Slate Gradient */}
                    <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 grid-pattern opacity-30 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                See what our AI sounds like — <br />try it now
                            </h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Experience the difference of Logic Builder's intelligent core.
                                No commitments, just pure performance.
                            </p>
                        </div>
                    </div>

                    {/* Right Frame: Form */}
                    <div className="bg-white p-12 lg:p-20 flex flex-col justify-center">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                                <input type="text" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Email *</label>
                                <input type="email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900" placeholder="" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-semibold mb-2">Phone *</label>
                                <input type="tel" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-gray-900" placeholder="" />
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <input type="checkbox" id="consent_about" className="mt-1 w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500" />
                                <label htmlFor="consent_about" className="text-xs text-gray-500 leading-relaxed">
                                    I agree to the <a href="#" className="underline hover:text-blue-500">Terms of Service</a> and allow Logic Builder to contact me.
                                </label>
                            </div>

                            <button className="w-full btn-primary bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold py-4 rounded-lg hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg mt-4">
                                Get A Call Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
