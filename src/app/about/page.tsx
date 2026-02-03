"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-luxury-black pt-24">
            {/* Hero */}
            <Section className="text-center py-24 md:py-32">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-luxury-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block"
                >
                    Our Philosophy
                </motion.span>
                <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">
                    Redefining the Art of <br />
                    <span className="italic text-white/50">Living Well</span>.
                </h1>
                <div className="w-[1px] h-24 bg-gradient-to-b from-luxury-gold to-transparent mx-auto opacity-50" />
            </Section>

            {/* Story Section */}
            <Section fullWidth className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden">
                <div className="relative h-[60vh] md:h-auto w-full">
                    <Image
                        src="/images/abstract_architecture_detail_1768561239092.png"
                        alt="Architectural Detail"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="bg-luxury-charcoal p-12 md:p-24 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif text-white mb-8">Curating Excellence</h2>
                    <p className="text-white/70 leading-relaxed mb-6 font-light">
                        Founded on the belief that a home is more than just a structure—it is the backdrop to your life's most meaningful moments. We specialize in properties that offer not just luxury, but legacy.
                    </p>
                    <p className="text-white/70 leading-relaxed mb-8 font-light">
                        Our portfolio is strictly limited to homes that meet our exacting standards for design, location, and craftsmanship. We don't just sell real estate; we curate lifestyles.
                    </p>
                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                        <div>
                            <span className="text-4xl font-serif text-luxury-gold block mb-2">$2B+</span>
                            <span className="text-xs uppercase tracking-widest text-white/40">In Sales</span>
                        </div>
                        <div>
                            <span className="text-4xl font-serif text-luxury-gold block mb-2">15</span>
                            <span className="text-xs uppercase tracking-widest text-white/40">Global Offices</span>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Team / Expertise */}
            <Section className="py-32 text-center max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-16">The Private Office</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                    {[
                        { title: "Advisory", desc: "Data-driven insights for investors and developers globally." },
                        { title: "Acquisition", desc: "Access to off-market properties and discreet negotiation." },
                        { title: "Design", desc: "Internal design team to visualize and execute renovations." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="border-t border-white/20 pt-6"
                        >
                            <h3 className="text-xl font-serif text-luxury-gold mb-4">{item.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
