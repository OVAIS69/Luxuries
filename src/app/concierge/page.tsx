import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { conciergeServices } from "@/data/concierge";
import Image from "next/image";
import { Plane, Home, Palette, Globe, ArrowRight } from "lucide-react";

const iconMap: Record<string, any> = {
    "Plane": Plane,
    "Home": Home,
    "Palette": Palette,
    "Globe": Globe
};

export default function ConciergePage() {
    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <PageHero
                title="Concierge Services"
                subtitle="Elevating your lifestyle beyond the expected. Our dedicated team handles the details, so you can enjoy the extraordinary."
                image="/images/hero_luxury_villa_1768556095737.png" // Reuse existing high-quality image for now
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {conciergeServices.map((service) => {
                        const Icon = iconMap[service.icon] || Home;
                        return (
                            <div key={service.id} className="group relative overflow-hidden rounded-sm bg-white/5 border border-white/10 hover:border-luxury-gold/50 transition-colors duration-500">
                                <div className="h-64 relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                                    <div className="absolute top-6 left-6 bg-luxury-gold/20 backdrop-blur-md p-3 rounded-full border border-luxury-gold/30">
                                        <Icon className="w-6 h-6 text-luxury-gold" />
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-serif text-white mb-4">{service.title}</h3>
                                    <p className="text-white/60 leading-relaxed mb-6">{service.description}</p>
                                    <button className="flex items-center gap-2 text-sm uppercase tracking-widest text-luxury-gold hover:text-white transition-colors">
                                        Request Service <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            <Section className="text-center border-t border-white/10">
                <h2 className="text-3xl font-serif mb-6">Bespoke Requests</h2>
                <p className="text-white/60 max-w-2xl mx-auto mb-8">
                    Our capabilities are limited only by your imagination. For specialized requests not listed here, please contact our private office directly.
                </p>
                <a href="/contact" className="inline-block px-8 py-4 bg-luxury-gold text-black hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm font-medium">
                    Contact Private Office
                </a>
            </Section>
        </main>
    );
}
