// Packages data — edit this file to update pricing and features
// NOTE: Prices are intentionally left as "Contact Us" pending client confirmation

export interface PackageFeature {
    label: string;
    included: boolean;
    note?: string;
}

export interface Package {
    id: string;
    name: string;
    badge?: string;
    tagline: string;
    price: string; // "Contact Us" or "Custom Quote" until finalized
    description: string;
    features: PackageFeature[];
    cta: string;
    highlighted?: boolean; // Visually elevated (does not imply it is "best")
}

export const packages: Package[] = [
    {
        id: "starter",
        name: "Starter",
        tagline: "Perfect for getting your business noticed",
        price: "Contact Us",
        description:
            "A focused promotional package for local shops, restaurants, and small businesses that want to take their first step into digital visibility.",
        features: [
            { label: "1 × Instagram Story promotion", included: true },
            { label: "1 × Instagram Post feature", included: true },
            { label: "Short-form Reel spotlight", included: true },
            { label: "Business profile mention", included: true },
            { label: "WhatsApp follow-up & report", included: true },
            { label: "YouTube dedicated video", included: false },
            { label: "Event / location coverage", included: false },
            { label: "Brand collaboration", included: false },
            { label: "Multi-platform campaign", included: false },
        ],
        cta: "Get a Quote",
    },
    {
        id: "business-growth",
        name: "Business Growth",
        badge: "Popular Choice",
        tagline: "For businesses ready to scale their reach",
        price: "Contact Us",
        description:
            "A comprehensive promotion across Instagram and YouTube — ideal for hotels, restaurants, showrooms, and established local businesses.",
        features: [
            { label: "Instagram Story + Post promotions", included: true },
            { label: "Multi-Reel social spotlight", included: true },
            { label: "YouTube video feature", included: true },
            { label: "On-location content shoot", included: true },
            { label: "Business storytelling coverage", included: true },
            { label: "Social media analytics share", included: true },
            { label: "Branded caption & hashtag strategy", included: true },
            { label: "Brand collaboration", included: false },
            { label: "Long-term ambassador plan", included: false },
        ],
        cta: "Get a Quote",
        highlighted: true,
    },
    {
        id: "premium-brand",
        name: "Premium Brand",
        tagline: "Full-scale brand presence and visibility",
        price: "Contact Us",
        description:
            "An all-inclusive brand partnership for businesses, startups, and brands that want maximum visibility and a consistent creator-brand presence.",
        features: [
            { label: "Dedicated multi-platform campaign", included: true },
            { label: "YouTube dedicated promotion video", included: true },
            { label: "Instagram Reels + Posts series", included: true },
            { label: "On-location professional coverage", included: true },
            { label: "Brand collaboration inclusion", included: true },
            { label: "Long-term visibility partnership", included: true },
            { label: "Priority scheduling", included: true },
            { label: "Campaign analytics & reporting", included: true },
            { label: "Custom content strategy", included: true },
        ],
        cta: "Get a Quote",
    },
];

export const packageFAQs = [
    {
        q: "Are these prices fixed?",
        a: "All packages are custom-quoted based on your business, goals, and timeline. Contact us and we'll create a tailored proposal for you.",
    },
    {
        q: "How long does a promotion take?",
        a: "Typical turnaround from booking to publication is 3–7 business days, depending on package and content requirements.",
    },
    {
        q: "Can I customize what's in my package?",
        a: "Absolutely. We treat every promotion individually. Get in touch and we'll build the right combination for your business.",
    },
    {
        q: "What do I need to provide?",
        a: "Basic business details, your preferred contact, and a brief about what you want to highlight. We handle the creative direction from there.",
    },
];
