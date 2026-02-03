"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PortalPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        setTimeout(() => {
            setIsLoading(false);
            alert("This is a demo portal.");
        }, 1500);
    };

    return (
        <main className="min-h-screen relative flex items-center justify-center bg-luxury-black overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero_luxury_villa_1768556095737.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-30 blur-sm"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-md p-8 md:p-12 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-luxury-gold/20">
                        <Lock className="w-5 h-5 text-luxury-gold" />
                    </div>
                    <h1 className="text-3xl font-serif text-white mb-2">Private Client Access</h1>
                    <p className="text-white/40 text-sm">Enter your credentials to view off-market listings.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Client ID / Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-white/60 mb-2">Passcode</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 p-3 text-white focus:outline-none focus:border-luxury-gold transition-colors placeholder:text-white/20"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-luxury-gold text-black font-medium py-3 px-6 uppercase tracking-widest hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Authenticating..." : "Access Portal"}
                    </button>

                    <div className="text-center mt-6">
                        <Link href="/contact" className="text-xs text-white/30 hover:text-luxury-gold transition-colors">
                            Request Access Invitation
                        </Link>
                    </div>
                </form>
            </motion.div>
        </main>
    );
}
