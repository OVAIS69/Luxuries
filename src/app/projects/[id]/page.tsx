"use client";

import { useParams } from "next/navigation";
import { properties } from "@/data/properties";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetail() {
    const params = useParams();
    const id = params.id as string;
    const project = properties.find((p) => p.id === id);

    if (!project) return <div className="h-screen flex items-center justify-center text-white">Project not found</div>;

    return (
        <main className="min-h-screen bg-luxury-black pb-24">
            {/* Hero */}
            <div className="relative h-[80vh] w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-black/30" />
                <div className="absolute bottom-0 left-0 p-8 md:p-24 w-full">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-serif text-white mb-4"
                    >
                        {project.title}
                    </motion.h1>
                    <p className="text-white/60 text-xl md:text-2xl font-light">{project.location}</p>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-24 grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Sidebar / Key Specs */}
                <div className="md:col-span-1 border-t border-white/20 pt-8">
                    <div className="grid grid-cols-2 gap-8 mb-12">
                        <div>
                            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Price</span>
                            <span className="text-2xl font-serif text-luxury-gold">{project.price}</span>
                        </div>
                        <div>
                            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Area</span>
                            <span className="text-2xl font-serif text-white">{project.specs.sqft} sq.ft</span>
                        </div>
                        <div>
                            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Bedrooms</span>
                            <span className="text-2xl font-serif text-white">{project.specs.beds}</span>
                        </div>
                        <div>
                            <span className="block text-white/40 text-xs uppercase tracking-widest mb-1">Bathrooms</span>
                            <span className="text-2xl font-serif text-white">{project.specs.baths}</span>
                        </div>
                    </div>

                    <Button className="w-full">Schedule a Visit</Button>
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-serif text-white mb-8">Overview</h2>
                    <p className="text-white/70 leading-relaxed text-lg mb-12">{project.description}</p>

                    <h3 className="text-xl font-serif text-luxury-gold mb-6">Amenities</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.amenities.map(amenity => (
                            <li key={amenity} className="flex items-center gap-3 text-white/80">
                                <span className="w-1.5 h-1.5 bg-luxury-gold rounded-full" />
                                {amenity}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}
