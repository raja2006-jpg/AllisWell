// Portfolio / Featured Work data
// Replace image URLs with actual project assets when available

export type PortfolioCategory =
    | "Shops"
    | "Hotels"
    | "Restaurants"
    | "Brands"
    | "Events"
    | "Travel"
    | "Entertainment";

export interface PortfolioItem {
    id: string;
    title: string;
    client: string;
    category: PortfolioCategory;
    imageUrl: string;
    description: string;
    platform: string[];
    featured?: boolean;
}

export const portfolioItems: PortfolioItem[] = [
    {
        id: "p1",
        title: "Local Restaurant Promotion",
        client: "Featured Restaurant", // Replace with client name
        category: "Restaurants",
        imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        description:
            "A complete restaurant promotion featuring signature dishes, ambience, and chef story — reaching thousands on Instagram and YouTube.",
        platform: ["Instagram", "YouTube"],
        featured: true,
    },
    {
        id: "p2",
        title: "Hotel Experience Coverage",
        client: "Featured Hotel", // Replace with client name
        category: "Hotels",
        imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
        description:
            "Cinematic walkthrough of hotel rooms, pool, and dining — showcasing a premium guest experience to our travel audience.",
        platform: ["Instagram", "YouTube"],
        featured: true,
    },
    {
        id: "p3",
        title: "Retail Shop Spotlight",
        client: "Featured Shop", // Replace with client name
        category: "Shops",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
        description:
            "Social media spotlight for a local retail shop, featuring new arrivals and behind-the-scenes of daily operations.",
        platform: ["Instagram"],
        featured: true,
    },
    {
        id: "p4",
        title: "Event Grand Opening",
        client: "Local Business Event", // Replace with client name
        category: "Events",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
        description:
            "Complete event coverage from setup to inauguration, capturing the energy and excitement for social sharing.",
        platform: ["Instagram", "YouTube"],
    },
    {
        id: "p5",
        title: "Brand Promotion Campaign",
        client: "Featured Brand", // Replace with client name
        category: "Brands",
        imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        description:
            "Multi-post brand campaign with consistent visual storytelling and audience engagement strategy.",
        platform: ["Instagram"],
    },
    {
        id: "p6",
        title: "Travel Vlog Series",
        client: "AllIsWellMSVlogsz Original",
        category: "Travel",
        imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
        description:
            "Original travel content exploring local destinations and hidden gems — bringing travel stories to our audience.",
        platform: ["YouTube", "Instagram"],
    },
];

export const portfolioCategories: PortfolioCategory[] = [
    "Shops",
    "Hotels",
    "Restaurants",
    "Brands",
    "Events",
    "Travel",
    "Entertainment",
];
