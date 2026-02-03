export interface ConciergeService {
    id: string;
    title: string;
    description: string;
    image: string;
    icon: string;
}

export const conciergeServices: ConciergeService[] = [
    {
        id: "private-aviation",
        title: "Private Aviation",
        description: "Seamless global travel arrangements through our exclusive partnerships with leading private jet charters. From light jets to ultra-long-range aircraft, we ensure your journey is as exceptional as your destination.",
        image: "/images/service_private_jet_1770146162761.png",
        icon: "Plane"
    },
    {
        id: "estate-management",
        title: "Estate Management",
        description: "Comprehensive property care for the absent owner. Our dedicated teams oversee security, maintenance, landscaping, and staff management, ensuring your residence is always pristine and welcome-ready.",
        image: "/images/service_estate_management_1770146179006.png",
        icon: "Home"
    },
    {
        id: "interior-curation",
        title: "Interior Curation",
        description: "Access to world-class interior designers and art advisors. We facilitate the transformation of your space into a personalized sanctuary, sourcing rare furniture and investment-grade art.",
        image: "/images/service_interior_design_1770146196959.png",
        icon: "Palette"
    },
    {
        id: "relocation-concierge",
        title: "Global Relocation",
        description: "A white-glove relocation service handling every detail of your move. From school admissions to banking setups and vehicle transport, we ensure a smooth transition to your new life.",
        image: "/images/service_relocation_1770146212937.png",
        icon: "Globe"
    }
];
