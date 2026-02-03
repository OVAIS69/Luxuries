import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { journalArticles } from "@/data/journal";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

export default function JournalPage() {
    return (
        <main className="min-h-screen bg-luxury-black text-white">
            <PageHero
                title="The Journal"
                subtitle="Curated narratives on architecture, design, and the art of living well."
                image="/images/hero_luxury_villa_1768556095737.png"
            />

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {journalArticles.map((article) => (
                        <Link href={`/journal/${article.id}`} key={article.id} className="group block">
                            <article className="bg-white/5 border border-white/10 h-full flex flex-col hover:border-luxury-gold/30 transition-colors duration-500">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-xs uppercase tracking-widest text-luxury-gold">
                                        {article.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {article.date}</span>
                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {article.author}</span>
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-4 leading-snug group-hover:text-luxury-gold transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                                        {article.excerpt}
                                    </p>
                                    <span className="text-luxury-gold text-sm uppercase tracking-widest group-hover:underline underline-offset-4">
                                        Read Story
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </Section>
        </main>
    );
}
