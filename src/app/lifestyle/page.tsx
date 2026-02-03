"use client";

import Section from "@/components/ui/Section";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LifestylePage() {
    const containerRef = useRef(null);

    return (
        <main className="min-h-screen bg-luxury-black text-white">
            {/* Hero */}
            <div className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/luxury_spa_wellness_1768561199777.png"
                    alt="Wellness SPA"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-luxury-black" />
                <div className="relative z-10 text-center">
                    <h1 className="text-5xl md:text-9xl font-serif mb-4">Wellness</h1>
                    <p className="text-xl font-light text-white/80 tracking-wide">Balance. Serenity. You.</p>
                </div>
            </div>

            {/* Concierge Section */}
            <Section fullWidth className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
                <div className="bg-luxury-charcoal p-12 md:p-24 flex flex-col justify-center order-2 md:order-1">
                    <span className="text-luxury-gold text-xs uppercase tracking-widest mb-6">24/7 Access</span>
                    <h3 className="text-4xl md:text-6xl font-serif mb-8">The Concierge</h3>
                    <p className="text-white/60 leading-relaxed text-lg mb-8">
                        Your time is your most valuable asset. Our dedicated lifestyle managers handle everything from private aviation bookings to last-minute reservations at the world's most exclusive venues.
                    </p>
                    <ul className="space-y-4 font-light text-white/80">
                        <li className="flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-luxury-gold" /> Private Aviation
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-luxury-gold" /> Event Access
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="w-8 h-[1px] bg-luxury-gold" /> Personal Shopping
                        </li>
                    </ul>
                </div>
                <div className="relative h-[50vh] md:h-full w-full order-1 md:order-2">
                    <Image
                        src="/images/penthouse_interior_1768556134615.png"
                        alt="Concierge Lifestyle"
                        fill
                        className="object-cover"
                    />
                </div>
            </Section>

            {/* Culinary Section */}
            <Section fullWidth className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
                <div className="relative h-[50vh] md:h-full w-full">
                    <Image
                        src="/images/fine_dining_table_1768561218385.png"
                        alt="Fine Dining"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="bg-luxury-black border-l border-white/5 p-12 md:p-24 flex flex-col justify-center">
                    <span className="text-luxury-gold text-xs uppercase tracking-widest mb-6">Culinary</span>
                    <h3 className="text-4xl md:text-6xl font-serif mb-8">Epicurean Journeys</h3>
                    <p className="text-white/60 leading-relaxed text-lg mb-8">
                        From private chefs in your villa to exclusive tastings at Michelin-starred establishments. Experience the finest flavors the world has to offer, curated just for you.
                    </p>
                </div>
            </Section>

            {/* Closing Statement */}
            <Section className="text-center py-32">
                <h2 className="text-3xl font-serif italic text-white/50">"Luxury is not just what you own,<br /> it's how you live."</h2>
            </Section>
        </main>
    );
}
