"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <main className="min-h-screen bg-luxury-black pt-32 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <Section className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">Begin Your Journey</h1>
                    <p className="text-white/60 font-light text-lg">
                        Our private client team is available 24/7 to assist with your acquisition requirements.
                    </p>
                </motion.div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white/5 border border-white/10 p-12 text-center backdrop-blur-md"
                    >
                        <h3 className="text-2xl font-serif text-luxury-gold mb-4">Inquiry Received</h3>
                        <p className="text-white/70">A senior consultant will contact you shortly.</p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40">First Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="John" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-white/40">Last Name</label>
                                <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="Doe" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40">Email Address</label>
                            <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors" placeholder="john@example.com" required />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40">Interest</label>
                            <select className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors text-white/50">
                                <option className="bg-luxury-black">Buying a property</option>
                                <option className="bg-luxury-black">Selling a property</option>
                                <option className="bg-luxury-black">General Inquiry</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs uppercase tracking-widest text-white/40">Message</label>
                            <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-luxury-gold transition-colors resize-none" placeholder="Tell us about your requirements..." />
                        </div>

                        <div className="pt-8 text-center">
                            <Button type="submit" className="w-full md:w-auto min-w-[200px]">Send Inquiry</Button>
                        </div>
                    </form>
                )}
            </Section>
        </main>
    );
}
