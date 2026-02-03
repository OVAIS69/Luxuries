import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { teamMembers } from "@/data/team";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <PageHero
                title="The Curators"
                subtitle="Meet the global experts dedicated to finding your perfect sanctuary."
                image="/images/hero_luxury_villa_1768556095737.png"
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="group relative">
                            <div className="relative h-[450px] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-serif text-white">{member.name}</h3>
                                    <p className="text-luxury-gold text-sm uppercase tracking-widest mb-4">{member.role}</p>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 flex flex-col gap-2">
                                        <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
                                            <Mail className="w-4 h-4" /> {member.email}
                                        </a>
                                        <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white text-sm">
                                            <Phone className="w-4 h-4" /> {member.phone}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-white/5 py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-serif mb-8">Join the Firm</h2>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        We are always seeking exceptional talent to join our global network. If you share our passion for excellence and uncompromising service, we invite you to start a conversation.
                    </p>
                    <a href="/contact" className="inline-block border border-white/20 px-8 py-3 text-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-sm">
                        Careers
                    </a>
                </div>
            </Section>
        </main>
    );
}
