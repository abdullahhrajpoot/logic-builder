import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero / Header Section */}
            <section className="relative pt-32 md:pt-48 pb-12 px-6 lg:px-8">
                <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
                {/* Spotlight Effect */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
                        Contact <span className="gradient-text">Us</span>
                    </h1>
                    <p className="text-xl text-gray-400 fade-in" style={{ animationDelay: "0.2s" }}>
                        Ready to automate your future? <span className="text-orange-500 font-semibold">Let's talk.</span> <br />
                        Our team is ready to answer your questions and help you scale.
                    </p>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="pb-20 px-6 lg:px-8 relative fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Contact Info & Visuals */}
                    <div className="space-y-12 relative">
                        {/* Decor element */}
                        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                            {/* Email Card */}
                            <div className="glass-effect p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white">Email Us</h3>
                                <p className="text-gray-400 text-sm mb-4">For general inquiries and support.</p>
                                <a href="mailto:support@logicbuilder.ai" className="text-orange-500 hover:text-orange-400 font-semibold transition-colors">support@logicbuilder.ai</a>
                            </div>

                            {/* Office Card */}
                            <div className="glass-effect p-8 rounded-2xl border border-white/5 hover:border-orange-500/30 transition-colors group">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-500 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-white">Visit Us</h3>
                                <p className="text-gray-400 text-sm mb-4">Talk to us in person.</p>
                                <span className="text-gray-300 font-medium block">19574 Hollygrape St, <br />Oregon, US</span>
                            </div>
                        </div>

                        {/* Map / Graphic Placeholder */}
                        <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass-effect border border-white/10 group">
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.399,37.781,14,0/800x600?access_token=YOUR_TOKEN')] bg-cover bg-center grayscale opacity-50 group-hover:opacity-75 transition-opacity duration-700"></div>
                            {/* Note: In a real app we'd use a real map image or component. For now, simulating a dark map theme with a gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute -inset-4 bg-orange-500/50 rounded-full animate-ping"></div>
                                    <div className="relative w-4 h-4 bg-orange-500 rounded-full border-2 border-white"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4">
                                    <div className="text-xs text-gray-400">
                                        <span className="block text-white font-bold text-sm">Logic Builder HQ</span>
                                        Oregon, US
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Interactive Form */}
                    <div className="glass-effect p-8 lg:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent blur-[60px] pointer-events-none"></div>

                        <h3 className="text-3xl font-bold mb-2">Send us a message</h3>
                        <p className="text-gray-400 mb-10">We typically respond within 2 hours during business hours.</p>

                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">First Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300 ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300 ml-1">Email</label>
                                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300 ml-1">Subject</label>
                                <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all appearance-none cursor-pointer">
                                    <option>Enterprise Solutions</option>
                                    <option>Technical Support</option>
                                    <option>Partnership Inquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-300 ml-1">Message</label>
                                <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all placeholder:text-gray-600 resize-none" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="button" className="w-full btn-primary bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg glow-orange mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
