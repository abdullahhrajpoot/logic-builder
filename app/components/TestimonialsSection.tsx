"use client";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "William G.",
            role: "Gold Standard Coverage",
            image: "WG",
            content: "This AI dialer cut my dialing time way down and I already closed a deal from a live transfer. Most people don’t even realize it’s AI. It’s working better than I expected.",
            rating: 5
        },
        {
            name: "Bryan H.",
            role: "Ikonic Marketing",
            image: "BH",
            content: "The AI ad platform and Facebook scraper together are a game changer. We can pull high-performing creatives and spin up ads fast without guessing.",
            rating: 5
        },
        {
            name: "Connor T.",
            role: "Family Health One",
            image: "CT",
            content: "Between the AI dialer and the CRM, we’re talking to the right people faster and wasting way less time. It’s made a real difference.",
            rating: 5
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-pattern opacity-[0.05]"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-24">
                    <div className="inline-block mb-6">
                        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl">
                                Client Success Stories
                            </span>
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-8">
                        Real Results from
                        <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                            Real Clients
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        See how our AI solutions are transforming businesses and driving real growth.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative p-[1px] rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                        >
                            {/* Gradient Border on Hover */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:from-blue-500/50 group-hover:to-purple-500/50 transition-all duration-500" />

                            <div className="relative h-full bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 overflow-hidden">
                                {/* Decorate Blob */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

                                {/* Quote Icon */}
                                <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif select-none">
                                    "
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-8">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-slate-300 leading-relaxed mb-8 text-lg font-light relative z-10">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-white/10">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-lg">{testimonial.name}</p>
                                        <p className="text-blue-400 text-sm font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
