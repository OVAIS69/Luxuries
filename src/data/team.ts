export interface TeamMember {
    id: string;
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
    bio: string;
}

export const teamMembers: TeamMember[] = [
    {
        id: "alexander-sterling",
        name: "Alexander Sterling",
        role: "Founder & CEO",
        image: "/images/team_alexander_sterling_1770146312020.png",
        phone: "+91 8828906337",
        email: "ovais.0404@gmail.com",
        bio: "With over 20 years in the luxury market, Alexander has facilitated some of the most significant property transactions in California and New York history."
    },
    {
        id: "victoria-chambers",
        name: "Victoria Chambers",
        role: "Head of International Sales",
        image: "/images/team_victoria_chambers_1770146330903.png",
        phone: "+91 8828906337",
        email: "ovais.0404@gmail.com",
        bio: "Based in London, Victoria oversees our European portfolio. Her deep connections in the art and fashion worlds provide unique access to off-market gems."
    },
    {
        id: "marcus-chen",
        name: "Marcus Chen",
        role: "Director of Asia-Pacific",
        image: "/images/team_marcus_chen_1770146346861.png",
        phone: "+91 8828906337",
        email: "ovais.0404@gmail.com",
        bio: "specializing in investment properties and high-rise developments, Marcus bridges the gap between Eastern and Western luxury markets with impeccable precision."
    },
    {
        id: "isabella-rossi",
        name: "Isabella Rossi",
        role: "Senior Estate Agent",
        image: "/images/team_isabella_rossi_1770146361794.png",
        phone: "+91 8828906337",
        email: "ovais.0404@gmail.com",
        bio: "An expert in historic Italian palazzos and French chateaux, Isabella brings a curator's eye to every property she represents."
    }
];
