"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-luxury-black text-white pt-24 pb-12 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-3xl font-serif font-bold tracking-widest text-white mb-8 block">
                            LUXURIES<span className="text-luxury-gold">.</span>
                        </Link>
                        <p className="text-white/50 max-w-sm font-sans font-light leading-relaxed">
                            The world's most exclusive portfolio of properties.
                            We connect exceptional individuals with extraordinary spaces.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-luxury-gold text-sm uppercase tracking-widest mb-8">Collection</h4>
                        <ul className="space-y-4 text-sm text-white/70 font-light">
                            <li><Link href="/projects" className="hover:text-white transition-colors">Penthouses</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition-colors">Villas</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition-colors">Estates</Link></li>
                            <li><Link href="/projects" className="hover:text-white transition-colors">Private Islands</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-luxury-gold text-sm uppercase tracking-widest mb-8">Contact</h4>
                        <ul className="space-y-4 text-sm text-white/70 font-light">
                            <li><a href="mailto:ovais.0404@gmail.com" className="hover:text-white transition-colors">ovais.0404@gmail.com</a></li>
                            <li>+91 8828906337</li>
                            <li className="pt-4 flex gap-4">
                                <Facebook className="w-5 h-5 hover:text-luxury-gold cursor-pointer transition-colors" />
                                <Instagram className="w-5 h-5 hover:text-luxury-gold cursor-pointer transition-colors" />
                                <Twitter className="w-5 h-5 hover:text-luxury-gold cursor-pointer transition-colors" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30 uppercase tracking-widest">
                    <p>&copy; 2026 Luxuries Real Estate. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
