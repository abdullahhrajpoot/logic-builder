"use client";

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "Product Manager @ TechCorp",
            image: "SC",
            content: "Logic Builder transformed how our team handles automation. What used to take weeks now takes minutes. The visual interface is incredibly intuitive.",
            rating: 5
        },
        {
            name: "Marcus Johnson",
            role: "CTO @ StartupXYZ",
            image: "MJ",
            content: "We've automated 80% of our workflows using Logic Builder. The ROI was immediate. Our team loves how easy it is to create complex logic without code.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Operations Lead @ Enterprise Inc",
            image: "ER",
            content: "The best automation platform we've tried. The drag-and-drop interface combined with powerful features makes it perfect for both beginners and experts.",
            rating: 5
        }
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-10"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-500/30">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Loved by Teams
                        <br />
                        <span className="gradient-text">Around the World</span>
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Join thousands of teams already building smarter with Logic Builder
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group glass-effect p-8 rounded-2xl border border-slate-700/30 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer fade-in"
                            style={{
                                animationDelay: `${index * 0.2}s`,
                                opacity: 0
                            }}
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-amber-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-slate-300 leading-relaxed mb-8 italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-slate-600 flex items-center justify-center text-white font-bold text-lg">
                                    {testimonial.image}
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Badges */}
                <div className="mt-20 glass-effect p-8 rounded-2xl border border-slate-700/30">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">4.9/5</div>
                            <div className="text-sm text-slate-400">Average Rating</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">10K+</div>
                            <div className="text-sm text-slate-400">Reviews</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">500+</div>
                            <div className="text-sm text-slate-400">Enterprises</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-2">99%</div>
                            <div className="text-sm text-slate-400">Would Recommend</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
