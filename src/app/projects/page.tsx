"use client";

import Section from "@/components/ui/Section";
import { properties } from "@/data/properties";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-luxury-black pt-24">
            <Section className="text-center py-24">
                <h1 className="text-4xl md:text-7xl font-serif text-white mb-6">The Collection</h1>
                <div className="w-24 h-[1px] bg-luxury-gold mx-auto" />
            </Section>

            <section className="container mx-auto px-4 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {properties.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[4/3] overflow-hidden"
                        >
                            <Link href={`/projects/${project.id}`} className="block w-full h-full">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-luxury-gold text-xs uppercase tracking-widest block mb-2">{project.category}</span>
                                    <h3 className="text-2xl md:text-4xl font-serif text-white mb-2">{project.title}</h3>
                                    <p className="text-white/60 text-sm">{project.location}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
