export interface Property {
    id: string;
    title: string;
    category: "Villa" | "Penthouse" | "Estate";
    location: string;
    price: string;
    image: string;
    description: string;
    specs: {
        beds: number;
        baths: number;
        sqft: string;
    };
    amenities: string[];
}

export const properties: Property[] = [
    {
        id: "villa-azure",
        title: "Villa Azure",
        category: "Villa",
        location: "Malibu, California",
        price: "$24,500,000",
        image: "/images/hero_luxury_villa_1768556095737.png",
        description: "Perched above the Pacific, Villa Azure represents the pinnacle of coastal living. Featuring an infinity edge pool that merges with the horizon, this architectural masterpiece offers seamless indoor-outdoor living.",
        specs: { beds: 6, baths: 8, sqft: "8,500" },
        amenities: ["Infinity Pool", "Private Beach Access", "Wine Cellar", "Home Theater"]
    },
    {
        id: "penthouse-one",
        title: "The Sky Penthouse",
        category: "Penthouse",
        location: "New York, NY",
        price: "$55,000,000",
        image: "/images/penthouse_interior_1768556134615.png",
        description: "Floating above the city that never sleeps, The Sky Penthouse offers unrelated views of the skyline. Designed by world-renowned architects, every detail speaks of quiet luxury and refined elegance.",
        specs: { beds: 4, baths: 5, sqft: "6,500" },
        amenities: ["Private Elevator", "360° Views", "Concierge Service", "Rooftop Terrace"]
    },
    {
        id: "estate-verona",
        title: "Estate Verona",
        category: "Estate",
        location: "Lake Como, Italy",
        price: "$18,000,000",
        image: "/images/estate_verona_lake_como_1768566822843.png",
        description: "A historic estate reimagined for modern living. Surrounded by century-old gardens and overlooking the lake, Estate Verona is a sanctuary of peace and privacy.",
        specs: { beds: 8, baths: 10, sqft: "12,000" },
        amenities: ["Boat Dock", "Guest House", "Formal Gardens", "Helipad"]
    },
    {
        id: "penthouse-royal",
        title: "Royal Penthouse",
        category: "Penthouse",
        location: "Dubai, UAE",
        price: "$42,000,000",
        image: "/images/penthouse_royal_dubai.jpg",
        description: "The crown jewel of the Palm. This triplex penthouse features double-height ceilings, a private pool on the 45th floor, and gold-leaf detailing throughout.",
        specs: { beds: 5, baths: 7, sqft: "9,000" },
        amenities: ["Private Span", "Smart Home System", "Chauffeur Service", "Cinema"]
    }
];
