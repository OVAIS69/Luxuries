"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-dark py-4" : "bg-transparent py-8"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-2xl font-serif font-bold tracking-widest text-luxury-white z-50 relative">
                            LUXURIES
                            <span className="text-luxury-gold">.</span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-6 text-xs font-sans tracking-widest opacity-80">
                            <Link href="/projects" className="hover:text-luxury-gold transition-colors">PROPERTIES</Link>
                            <Link href="/neighborhoods" className="hover:text-luxury-gold transition-colors">NEIGHBORHOODS</Link>
                            <Link href="/concierge" className="hover:text-luxury-gold transition-colors">CONCIERGE</Link>
                            <Link href="/journal" className="hover:text-luxury-gold transition-colors">JOURNAL</Link>
                            <Link href="/team" className="hover:text-luxury-gold transition-colors">TEAM</Link>
                            <Link href="/about" className="hover:text-luxury-gold transition-colors">ABOUT</Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 z-50 relative">
                        <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-luxury-gold transition-colors group">
                            <span className="w-8 h-[1px] bg-white group-hover:bg-luxury-gold transition-colors"></span>
                            Inquire
                        </button>

                        <Link href="/portal" className="hidden md:flex p-2 hover:bg-white/10 rounded-full transition-colors" title="Client Portal">
                            <Lock className="w-4 h-4 text-white" />
                        </Link>

                        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                            <Search className="w-5 h-5 text-white" />
                        </button>

                        <button
                            className="p-2 hover:bg-white/10 rounded-full transition-colors md:hidden text-white"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-luxury-black flex flex-col justify-center items-center"
                    >
                        <div className="flex flex-col items-center gap-8 text-2xl font-serif text-white">
                            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">HOME</Link>
                            <Link href="/projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">PROPERTIES</Link>
                            <Link href="/neighborhoods" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">NEIGHBORHOODS</Link>
                            <Link href="/concierge" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">CONCIERGE</Link>
                            <Link href="/journal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">JOURNAL</Link>
                            <Link href="/team" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">TEAM</Link>
                            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">ABOUT</Link>
                            <Link href="/portal" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors text-white/50">CLIENT PORTAL</Link>
                            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-luxury-gold transition-colors">CONTACT</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
