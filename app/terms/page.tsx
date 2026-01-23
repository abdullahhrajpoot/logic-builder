"use client";
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 md:pt-48 pb-32 space-y-12">

                {/* Header */}
                <header className="border-b border-slate-800/50 pb-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Terms and Conditions</h1>
                    <div className="flex gap-6 text-sm text-slate-400">
                        <p>Effective Date: August 1, 2025</p>
                    </div>
                </header>

                <p className="text-lg text-slate-300 leading-relaxed">
                    By using the products, software, or services ("Services") offered by Logic Builder LLC ("Logic Builder," "we," or "us"), you ("Client" or "you") agree to the following Terms and Conditions.
                </p>

                {/* Content */}
                <div className="prose prose-invert prose-blue max-w-none space-y-12 text-slate-300">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. SERVICES</h2>
                        <p>Logic Builder provides CRM development, AI-based sales automations, dialing systems, and custom integrations. These Services may be delivered as software, subscription access, consulting, or a combination thereof. We may update or modify Services at any time, with or without notice.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. SOFTWARE & LICENSE</h2>
                        <p>All software and systems developed or provided by Logic Builder are licensed, not sold. You are granted a limited, non-exclusive, non-transferable license to use the Services for your internal business operations only.</p>
                        <p className="mt-4 mb-2 font-semibold text-white">You may not:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Copy, resell, or sublicense any part of our software</li>
                            <li>Modify, reverse-engineer, or attempt to extract source code</li>
                            <li>Use Services in violation of applicable laws</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. INTELLECTUAL PROPERTY</h2>
                        <p>All content, code, processes, templates, and proprietary systems developed or delivered by Logic Builder remain our exclusive intellectual property. Use of our Services does not grant you any ownership rights.</p>
                        <p className="mt-4">Any trademarks, service marks, or branding associated with Logic Builder are also owned by us and may not be used without express written permission.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. CLIENT DATA & PRIVACY</h2>
                        <p>You retain full ownership of all your customer records, data, and business information input into our systems. By using our Services, you grant Logic Builder a limited right to access, process, and store this data solely to fulfill our obligations to you.</p>
                        <p className="mt-4">Logic Builder employs reasonable security practices, but you acknowledge no system is immune from breach, and you accept this inherent risk.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. PAYMENT & FEES</h2>
                        <p>All fees are due according to the agreed pricing and billing terms at the time of purchase or contract execution. These may include:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>One-time setup or onboarding fees</li>
                            <li>Monthly or recurring service charges</li>
                            <li>Usage or feature-based fees</li>
                        </ul>
                        <p className="mt-4">Failure to pay may result in suspension or termination of Services. All fees are non-refundable unless otherwise agreed in writing.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. THIRD-PARTY SERVICES</h2>
                        <p>Logic Builder may integrate with third-party software platforms (e.g., Google, QuickBooks, Retell.ai). We are not liable for the terms, performance, or availability of these third-party services. You are solely responsible for your compliance with their terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. TERMINATION</h2>
                        <p>You may cancel Services at any time, subject to any agreed minimum term or notice period. Logic Builder may suspend or terminate access at our discretion for violation of these Terms or misuse of Services.</p>
                        <p className="mt-4">Upon termination, all licenses immediately expire. Any outstanding fees remain payable.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. DISCLAIMER OF WARRANTIES</h2>
                        <p>Services are provided "as is" and "as available," without warranties of any kind. We do not guarantee specific outcomes, uptime, or uninterrupted access.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. LIMITATION OF LIABILITY</h2>
                        <p>To the maximum extent permitted by law, Logic Builder shall not be liable for any indirect, incidental, or consequential damages. Our total liability, if any, shall not exceed the fees paid by you in the 90 days prior to the event giving rise to the claim.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. INDEMNIFICATION</h2>
                        <p>You agree to defend, indemnify, and hold harmless Logic Builder LLC from any claims, damages, or liabilities arising from your misuse of the Services, violation of these Terms, or infringement of any third-party rights.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. GOVERNING LAW</h2>
                        <p>These Terms are governed by the laws of the State of Oregon, without regard to conflict of law principles. Any legal action shall be brought exclusively in state or federal courts located in Oregon.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. MODIFICATIONS</h2>
                        <p>We may update these Terms at any time. Updates become effective immediately upon posting. Continued use of Services constitutes acceptance of any revised Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. CONTACT</h2>
                        <p>For questions, contact us at:</p>
                        <div className="mt-4 bg-white/5 p-6 rounded-xl inline-block border border-slate-700/50">
                            <a href="mailto:support@logicbuilder.ai" className="text-blue-400 hover:text-blue-300 font-semibold mb-1 block">support@logicbuilder.ai</a>
                            <p className="font-semibold text-white">Logic Builder LLC</p>
                            <p className="text-slate-300">19574 Hollygrape St Oregon, US</p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}
