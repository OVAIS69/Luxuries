import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { neighborhoods } from "@/data/neighborhoods";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function NeighborhoodsPage() {
    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <PageHero
                title="Neighborhood Guides"
                subtitle="Discover the world's most coveted zip codes. Beyond the property, explore the lifestyle."
                image="/images/hero_luxury_villa_1768556095737.png"
            />

            <Section>
                <div className="grid grid-cols-1 gap-12">
                    {neighborhoods.map((hood, index) => (
                        <div key={hood.id} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px] overflow-hidden group">
                                <Image
                                    src={hood.image}
                                    alt={hood.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                            <div className="w-full md:w-1/2">
                                <span className="flex items-center gap-2 text-luxury-gold uppercase tracking-widest text-xs mb-4">
                                    <MapPin className="w-4 h-4" /> {hood.location}
                                </span>
                                <h2 className="text-4xl font-serif text-white mb-6">{hood.name}</h2>
                                <p className="text-white/60 text-lg leading-relaxed mb-8">
                                    {hood.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {hood.vibe.map((tag) => (
                                        <span key={tag} className="px-3 py-1 border border-white/20 rounded-full text-xs uppercase tracking-wider text-white/80">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="space-y-2 mb-8">
                                    <h4 className="text-white font-medium uppercase tracking-wide text-sm">Highlights:</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {hood.highlights.map((highlight) => (
                                            <li key={highlight} className="text-white/50 text-sm flex items-center gap-2">
                                                <span className="w-1 h-1 bg-luxury-gold rounded-full"></span> {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <button className="text-white border-b border-white/30 pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors">
                                    Explore Listings in {hood.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
