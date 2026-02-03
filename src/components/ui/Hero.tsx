"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Parallax and Scale effect (Ken Burns-ish controlled by scroll + initial animation)
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const scale = useTransform(scrollY, [0, 1000], [1.1, 1]); // Zoom out on scroll? Or zoom in. Let's do zoom in initial, zoom out scroll.
    // Actually, Ken Burns is auto-zoom. Let's do auto-zoom css + scroll parallax.

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-luxury-black">
            {/* Background Image with Ken Burns Animation */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, ease: "easeOut" }}
                style={{ y }}
            >
                <Image
                    src="/images/hero_luxury_villa_1768556095737.png"
                    alt="Luxury Villa at Twilight"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/30 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                    <h2 className="text-luxury-gold tracking-[0.3em] text-sm md:text-base font-sans mb-4 uppercase">
                        Exclusive Real Estate
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="overflow-hidden"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-medium leading-tight">
                        Where <span className="italic text-luxury-gold">Luxury</span> <br /> Lives.
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-12 flex flex-col items-center gap-2"
                >
                    <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 w-full h-1/2 bg-luxury-gold"
                            animate={{ y: [0, 64] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-white/50">Explore</span>
                </motion.div>
            </div>
        </div>
    );
}
