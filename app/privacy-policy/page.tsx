"use client";
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500 selection:text-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 md:pt-48 pb-32 space-y-12">

                {/* Header */}
                <header className="border-b border-white/10 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Privacy Policy</h1>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <p>Effective Date: October 1, 2025</p>
                        <p>Last Updated: October 7, 2025</p>
                    </div>
                </header>

                {/* Contact Info Top */}
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                    <h2 className="text-lg font-semibold text-orange-400 mb-2">Logic Builder LLC</h2>
                    <p className="text-gray-300">19574 Hollygrape St Oregon, US</p>
                    <p className="text-gray-300">support@logicbuilder.ai</p>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-orange max-w-none space-y-12 text-gray-300">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. INTRODUCTION</h2>
                        <p>Logic Builder LLC ("Logic Builder," "we," "our," or "us") is a CRM and automation solutions provider that offers custom systems, AI dialing, software integrations, and consulting services to help businesses streamline operations. We value your privacy and are committed to protecting your personal information.</p>
                        <p className="mt-4">This Privacy Policy outlines how we collect, use, share, and safeguard your data when you interact with our website, platform, or services ("Services"). By using our Services, you consent to the practices outlined in this Policy.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. INFORMATION WE COLLECT</h2>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">A. Personal Information</h3>
                        <p>We may collect:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Business name and address</li>
                            <li>Billing and payment information</li>
                            <li>Login credentials (if applicable)</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">B. Technical & Usage Data</h3>
                        <p>We may automatically collect:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>IP address</li>
                            <li>Device type and browser</li>
                            <li>Cookies, session tokens, and analytics data</li>
                            <li>Pages visited, time spent, and navigation paths</li>
                        </ul>

                        <h3 className="text-xl font-semibold text-white mt-6 mb-3">C. Customer Data (via Services)</h3>
                        <p>When using our Services, including CRM and automation tools, we may process your customer data on your behalf. You maintain ownership of this data, and we act solely as a data processor under applicable Data Processing Agreements (DPAs), if required by law.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. HOW WE USE YOUR INFORMATION</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Provide and maintain Services</li>
                            <li>Respond to support inquiries</li>
                            <li>Process transactions and billing</li>
                            <li>Monitor usage and improve functionality</li>
                            <li>Deliver updates, offers, and service notices</li>
                            <li>Ensure platform security and compliance</li>
                            <li>Customize your user experience</li>
                        </ul>
                        <p className="mt-4">We may use embedded pixels in our emails to track open rates and link clicks. This helps us improve future communications and understand engagement.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. SHARING YOUR INFORMATION</h2>
                        <p>We do not sell your personal information. We may share it under these circumstances:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>With trusted service providers, contractors, or partners (such as web hosts, CRM platforms, developers, marketing teams, or billing processors) who assist us in delivering the Services, under confidentiality agreements</li>
                            <li>To comply with legal requests, subpoenas, or court orders</li>
                            <li>To protect the rights, property, or safety of Logic Builder, our users, or others</li>
                            <li>With your explicit consent</li>
                        </ul>
                        <p className="mt-4">If legally allowed, we will provide at least ten (10) days' notice before complying with third-party legal requests for your data to give you the opportunity to respond or object. We are not responsible for legal representation and encourage you to seek counsel if needed.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. COOKIES & TRACKING</h2>
                        <p>We use cookies, pixels, and similar tracking technologies to enhance performance, analyze usage, and personalize your experience. You can manage cookies through your browser settings. Disabling cookies may affect certain features.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. THIRD-PARTY SERVICES</h2>
                        <p>Our Services may integrate with third-party platforms like Google, Retell.ai, QuickBooks, Stripe, and others. These third-party providers have their own privacy policies and terms, which govern your use of their tools. Logic Builder is not responsible for their practices or performance.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. PAYMENT PROCESSING</h2>
                        <p>Payments are processed through secure third-party processors (e.g., Stripe). Logic Builder does not store credit card or payment information without your explicit consent. All payment data is encrypted and handled in accordance with industry standards.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. DATA STORAGE & SECURITY</h2>
                        <p>All personal and customer data is stored on secure, U.S.-based servers using commercially reasonable physical and digital safeguards. While no method is 100% secure, we follow industry best practices to protect your data from unauthorized access, alteration, or disclosure.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. DATA RETENTION</h2>
                        <p>We retain your data only as long as necessary to provide our Services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion at any time (see Section 10).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. YOUR RIGHTS</h2>
                        <p>Depending on your jurisdiction, you may have the right to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Access or correct your personal information</li>
                            <li>Request data portability or deletion</li>
                            <li>Object to or restrict processing</li>
                            <li>Opt out of marketing communications</li>
                            <li>File a complaint with a data protection authority</li>
                        </ul>
                        <p className="mt-4">To exercise your rights, please email us at <a href="mailto:support@logicbuilder.ai" className="text-orange-400 hover:text-orange-300">support@logicbuilder.ai</a>. For security, we may request proof of identity before fulfilling certain requests.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. UNSUBSCRIBE & COMMUNICATION CHOICES</h2>
                        <p>To unsubscribe from our email list, simply click the link at the bottom of our emails or contact us at <a href="mailto:support@logicbuilder.ai" className="text-orange-400 hover:text-orange-300">support@logicbuilder.ai</a> with "unsubscribe" in the subject line. Unsubscribing may take up to 10 business days to process.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. USER-GENERATED CONTENT & LICENSE</h2>
                        <p>If you upload or provide content (e.g., data, media, testimonials) via our Services, you retain ownership of that content. However, you grant Logic Builder a limited, non-exclusive, royalty-free license to use, store, and process it for the purpose of delivering Services.</p>
                        <p className="mt-4">You represent that you have the legal rights to share such content and that it does not infringe the rights of others.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. CHILDREN'S PRIVACY</h2>
                        <p>Our Services are intended for users 18 and older. We do not knowingly collect personal information from children. If you believe a child has provided data, please contact us to have it deleted.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. LINKS TO OTHER SITES</h2>
                        <p>Our website may include links to third-party websites. We are not responsible for their privacy practices or content. Use those sites at your own discretion.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">15. LEGAL NOTICE & WEBSITE USE</h2>
                        <p>By using our website, you agree to be bound by this Privacy Policy and our Terms & Conditions. You may only use our Services and website for lawful purposes.</p>
                        <p className="mt-4">We do not guarantee uninterrupted or error-free operation of our site. While we strive to ensure a bug-free experience, we are not liable for downtime, device incompatibility, or performance issues.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">16. GOVERNING LAW</h2>
                        <p>This Privacy Policy shall be governed by the laws of the State of Oregon. Any disputes shall be resolved exclusively in the courts of Oregon.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">17. CHANGES TO THIS POLICY</h2>
                        <p>We may revise this Policy from time to time. Any updates will be posted on this page with a new "Last Updated" date. Continued use of our Services after such changes indicates your acceptance.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">18. CONTACT US</h2>
                        <p>If you have questions, concerns, or requests related to your privacy or data:</p>
                        <div className="mt-4 bg-white/5 p-6 rounded-xl inline-block border border-white/10">
                            <p className="font-semibold text-white">Logic Builder LLC</p>
                            <p className="text-gray-300">19574 Hollygrape St Oregon, US</p>
                            <a href="mailto:support@logicbuilder.ai" className="text-orange-400 hover:text-orange-300 block mt-2">support@logicbuilder.ai</a>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
