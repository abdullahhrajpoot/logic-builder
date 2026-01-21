import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white overflow-hidden">
            <Navbar />

            {/* Hero / Header Section */}
            <section className="relative pt-32 md:pt-48 pb-12 px-6 lg:px-8">
                <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
                {/* Spotlight Effect */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center relative z-10 mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
                        Contact <span className="gradient-text">Us</span>
                    </h1>
                    <p className="text-xl text-slate-400 fade-in" style={{ animationDelay: "0.2s" }}>
                        Ready to automate your future? <span className="text-blue-400 font-semibold">Let's talk.</span> <br />
                        Our team is ready to answer your questions and help you scale.
                    </p>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="pb-20 px-6 lg:px-8 relative fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Left Column: Book a Demo Form */}
                    <div className="glass-effect p-8 lg:p-12 rounded-3xl border border-slate-700/30 relative overflow-hidden group h-full flex flex-col">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent blur-[60px] pointer-events-none"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <h3 className="text-3xl font-bold mb-2">Book a Demo</h3>
                            <p className="text-slate-400 mb-8">See our AI agents in action by scheduling a personalized demo.</p>

                            <form className="space-y-6 flex-1 flex flex-col">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" placeholder="Jane Smith" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Work Email</label>
                                    <input type="email" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" placeholder="jane@company.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Company Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" placeholder="Acme Inc." />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Preferred Time</label>
                                    <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                        <option>Morning (9AM - 12PM)</option>
                                        <option>Afternoon (12PM - 4PM)</option>
                                        <option>Evening (4PM - 6PM)</option>
                                    </select>
                                </div>

                                <button type="button" className="w-full btn-primary bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg glow-blue mt-auto border border-blue-500/30">
                                    Schedule Demo
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: General Contact Form */}
                    <div className="glass-effect p-8 lg:p-12 rounded-3xl border border-slate-700/30 relative overflow-hidden h-full flex flex-col">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent blur-[60px] pointer-events-none"></div>

                        <h3 className="text-3xl font-bold mb-2">Send us a message</h3>
                        <p className="text-slate-400 mb-8">For general support, partnerships, or technical inquiries.</p>

                        <form className="space-y-6 relative z-10 flex-1 flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">First Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-300 ml-1">Last Name</label>
                                    <input type="text" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Email</label>
                                <input type="email" className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Subject</label>
                                <select className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all appearance-none cursor-pointer">
                                    <option>Technical Support</option>
                                    <option>Partnership Inquiry</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
                                <textarea rows={5} className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 resize-none" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full btn-primary bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold py-4 rounded-xl hover:from-slate-500 hover:to-slate-600 transition-all duration-300 shadow-lg glow-slate mt-auto border border-slate-500/30">
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
