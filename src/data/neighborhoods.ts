export interface Neighborhood {
    id: string;
    name: string;
    location: string;
    description: string;
    image: string;
    vibe: string[];
    highlights: string[];
}

export const neighborhoods: Neighborhood[] = [
    {
        id: "beverly-hills",
        name: "Beverly Hills",
        location: "California, USA",
        description: "The epitome of Hollywood glamour. Tree-lined streets, world-class shopping on Rodeo Drive, and some of the most private and secure estates in the world.",
        image: "/images/neighborhood_beverly_hills.jpg",
        vibe: ["Glamorous", "Private", "Iconic"],
        highlights: ["Rodeo Drive", "Beverly Hills Hotel", "Greystone Mansion"]
    },
    {
        id: "tribeca",
        name: "Tribeca",
        location: "New York, USA",
        description: "Industrial chic meets quiet luxury. Cobblestone streets, converted loft buildings, and a thriving arts scene make this one of Manhattan's most desirable zip codes.",
        image: "/images/neighborhood_tribeca.jpg",
        vibe: ["Artistic", "Sophisticated", "Urban"],
        highlights: ["The Odeon", "Hudson River Park", "Tribeca Film Festival"]
    },
    {
        id: "monaco-ville",
        name: "Monaco-Ville",
        location: "Monaco",
        description: "Perched on 'The Rock', this historic district offers medieval charm with Mediterranean views. A sovereign city-state known for its safety, luxury, and tax benefits.",
        image: "/images/neighborhood_monaco.jpg",
        vibe: ["Historic", "Exclusive", "Mediterranean"],
        highlights: ["Prince's Palace", "Oceanographic Museum", "Saint Martin Gardens"]
    },
    {
        id: "palm-jumeirah",
        name: "Palm Jumeirah",
        location: "Dubai, UAE",
        description: "A man-made wonder. This palm-shaped archipelago is home to some of Dubai's most lavish resorts and beachfront villas, offering an island lifestyle in a bustling metropolis.",
        image: "/images/neighborhood_palm_jumeirah.jpg",
        vibe: ["Futuristic", "Beachfront", "Lavish"],
        highlights: ["Atlantis The Royal", "The Pointe", "West Beach"]
    }
];
