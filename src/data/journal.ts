export interface JournalArticle {
    id: string;
    title: string;
    category: string;
    date: string;
    image: string;
    excerpt: string;
    author: string;
}

export const journalArticles: JournalArticle[] = [
    {
        id: "eco-luxury-rise",
        title: "The Rise of Eco-Luxury: Sustainability Meets Opulence",
        category: "Market Trends",
        date: "October 12, 2025",
        image: "/images/journal_eco_luxury_1770146238795.png",
        excerpt: "Modern high-net-worth individuals are increasingly demanding homes that are not only beautiful but also environmentally responsible. We explore the latest green technologies in super-prime real estate.",
        author: "Eleanor Rigby"
    },
    {
        id: "architectural-spotlight-penthouse-one",
        title: "Architectural Spotlight: The Making of Penthouse One",
        category: "Architecture",
        date: "September 28, 2025",
        image: "/images/journal_penthouse_architect_1770146290393.png",
        excerpt: "An exclusive look behind the scenes of New York's most talked-about development. Interview with lead architect Julian Vance on the challenges of building in the clouds.",
        author: "Julian Vance"
    },
    {
        id: "art-investment-homes",
        title: "Curating a Collection: Living with Art",
        category: "Lifestyle",
        date: "September 15, 2025",
        image: "/images/journal_art_collection_1770146254834.png",
        excerpt: "How to design your home around your art collection. Expert tips on lighting, humidity control, and security for showcasing investment-grade pieces.",
        author: "Sienna Miller"
    },
    {
        id: "global-market-watch-2026",
        title: "Global Market Watch: 2026 Forecast",
        category: "Investment",
        date: "August 30, 2025",
        image: "/images/journal_market_watch_1770146271478.png",
        excerpt: "From Miami to Monaco, we analyze the shifting landscapes of global real estate investment. Where are the next safe havens for capital preservation?",
        author: "Marcus Sterling"
    }
];
