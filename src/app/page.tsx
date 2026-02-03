import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Intro Section */}
      <Section className="bg-luxury-black text-center max-w-4xl mx-auto">
        <p className="text-luxury-gold text-lg font-serif italic mb-6">The Collection</p>
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-relaxed">
          We curate the world's most exceptional properties for those who accept nothing but the <span className="text-luxury-gold-light opacity-80 decoration-luxury-gold underline underline-offset-8">extraordinary</span>.
        </h2>
      </Section>

      {/* Featured Project Teaser (Penthouse) */}
      <Section fullWidth className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[80vh]">
        <div className="relative h-full w-full group overflow-hidden">
          <Image
            src="/images/penthouse_interior_1768556134615.png"
            alt="Penthouse Interior"
            fill
            className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link href="/projects/penthouse-one" className="w-32 h-32 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <span className="sr-only">View Project</span>
              <span className="text-white text-sm uppercase tracking-widest">View</span>
            </Link>
          </div>
        </div>
        <div className="bg-luxury-charcoal p-8 md:p-24 flex flex-col justify-center items-start">
          <span className="text-luxury-gold uppercase tracking-widest text-xs mb-4">New Listing</span>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8">The Sky Penthouse</h3>
          <p className="text-white/60 text-lg leading-relaxed mb-12 max-w-md">
            Experience elevated living in the heart of the metropolis. Floor-to-ceiling glass, panoramic skyline views, and bespoke interiors defined by quiet luxury.
          </p>

          <ul className="grid grid-cols-2 gap-8 mb-12 w-full max-w-md">
            <li className="flex flex-col">
              <span className="text-luxury-gold font-serif text-2xl">4</span>
              <span className="text-white/40 text-sm uppercase tracking-wider">Bedrooms</span>
            </li>
            <li className="flex flex-col">
              <span className="text-luxury-gold font-serif text-2xl">6,500</span>
              <span className="text-white/40 text-sm uppercase tracking-wider">Sq. Ft.</span>
            </li>
          </ul>

          <Link href="/projects/penthouse-one" className="flex items-center gap-2 text-white border-b border-white/30 pb-2 hover:border-luxury-gold hover:text-luxury-gold transition-colors">
            VIEW DETAILS <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      {/* Lifestyle Parallax Section */}
      <Section fullWidth className="h-[60vh] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/luxury_texture_marble_1768556152223.png"
            alt="Marble Texture"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-luxury-black/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl md:text-7xl font-serif text-white mb-6 break-words">Designed for <br /> <span className="text-gold-gradient">Timelessness</span></h2>
          <Link href="/lifestyle" className="inline-block px-8 py-4 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-colors uppercase tracking-widest text-sm mt-8">
            Discover the Lifestyle
          </Link>
        </div>
      </Section>

      {/* Footer Teaser */}
      <Section className="py-32 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-serif mb-8">Ready to find your sanctuary?</h2>
        <Link href="/contact" className="text-4xl md:text-8xl font-serif text-white/20 hover:text-luxury-gold transition-colors duration-500 cursor-pointer">
          Get in Touch
        </Link>
      </Section>
    </main>
  );
}
