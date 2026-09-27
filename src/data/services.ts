// Services data — edit this file to update, add, or remove services
// The UI reads from this file; no need to touch any component code

export type ServiceCategory =
    | "Business Promotion"
    | "Social Media"
    | "Video Marketing"
    | "Influencer / Creator"
    | "Events"
    | "Entertainment";

export interface Service {
    id: string;
    category: ServiceCategory;
    icon: string; // Lucide icon name
    title: string;
    shortDesc: string;
    description: string;
    benefits: string[];
    featured?: boolean;
}

export const services: Service[] = [
    {
        id: "instagram-promotion",
        category: "Social Media",
        icon: "Camera",
        title: "Instagram Promotion",
        shortDesc: "Grow your brand's Instagram reach with our engaged 48K+ audience.",
        description:
            "We create and share promotional content about your business across our Instagram channel, reaching our actively engaged local audience of 48.3K+ followers.",
        benefits: [
            "Access to 48.3K+ Instagram followers",
            "Authentic audience engagement",
            "Story, Reel & post promotions",
            "Local audience targeting",
        ],
        featured: true,
    },
    {
        id: "youtube-promotion",
        category: "Video Marketing",
        icon: "Play",
        title: "YouTube Promotion",
        shortDesc: "Feature your business in our YouTube videos and grow your visibility.",
        description:
            "Get your business featured in our YouTube content — from dedicated coverage videos to mentions in our popular vlog series.",
        benefits: [
            "Dedicated coverage video",
            "Long-form audience engagement",
            "Searchable video content",
            "Permanent online presence",
        ],
        featured: true,
    },
    {
        id: "business-promotion",
        category: "Business Promotion",
        icon: "Briefcase",
        title: "Business Promotion",
        shortDesc: "Complete digital promotion for your local business across platforms.",
        description:
            "A comprehensive promotional package covering your business across Instagram, YouTube, and other social platforms — telling your brand's story.",
        benefits: [
            "Multi-platform promotion",
            "Professional video production",
            "Social media coverage",
            "Business storytelling",
        ],
        featured: true,
    },
    {
        id: "hotel-promotion",
        category: "Business Promotion",
        icon: "Hotel",
        title: "Hotel Promotion",
        shortDesc: "Showcase your hotel to thousands of local and travel audiences.",
        description:
            "Cinematic coverage of your hotel's amenities, rooms, food, and experience — shared across our social channels to attract guests.",
        benefits: [
            "Cinematic hotel walkthrough",
            "Food & amenity highlight",
            "Guest experience storytelling",
            "Travel audience reach",
        ],
    },
    {
        id: "restaurant-promotion",
        category: "Business Promotion",
        icon: "UtensilsCrossed",
        title: "Restaurant Promotion",
        shortDesc: "Mouth-watering food content that brings customers to your door.",
        description:
            "Professional food photography and videography combined with our social reach to showcase your restaurant's best dishes and atmosphere.",
        benefits: [
            "Food styling visuals",
            "Menu highlights",
            "Restaurant ambience coverage",
            "Local food audience reach",
        ],
    },
    {
        id: "product-promotion",
        category: "Business Promotion",
        icon: "Package",
        title: "Product Promotion",
        shortDesc: "Showcase your product to an engaged and relevant audience.",
        description:
            "Feature your product with quality visuals and authentic creator-style reviews that connect with real buyers.",
        benefits: [
            "Product showcase video",
            "Authentic creator review",
            "Social media feature",
            "Buyer audience targeting",
        ],
    },
    {
        id: "influencer-promotion",
        category: "Influencer / Creator",
        icon: "Star",
        title: "Influencer / Creator Promotion",
        shortDesc: "Grow your personal brand through our creator network and platforms.",
        description:
            "For individual creators, artists, musicians, and influencers who want to grow their audience through cross-promotion on our channels.",
        benefits: [
            "Cross-platform promotion",
            "Creator-to-creator collaboration",
            "Audience growth support",
            "Personal brand boost",
        ],
    },
    {
        id: "brand-collaboration",
        category: "Influencer / Creator",
        icon: "Handshake",
        title: "Brand Collaboration",
        shortDesc: "Long-term partnership for ongoing brand visibility and engagement.",
        description:
            "Build a lasting partnership with AllIsWellMSVlogsz for consistent, ongoing promotion across our content and social channels.",
        benefits: [
            "Long-term visibility",
            "Multiple content pieces",
            "Recurring audience exposure",
            "Brand ambassador presence",
        ],
    },
    {
        id: "event-coverage",
        category: "Events",
        icon: "Calendar",
        title: "Event Coverage",
        shortDesc: "Professional coverage of your event, launch, or celebration.",
        description:
            "We cover your event — grand opening, product launch, cultural event, or promotion — with professional content creation and immediate social publishing.",
        benefits: [
            "Real-time social coverage",
            "Professional event documentation",
            "Highlight reel creation",
            "Event promotion reach",
        ],
    },
    {
        id: "video-marketing",
        category: "Video Marketing",
        icon: "Video",
        title: "Video Marketing",
        shortDesc: "Engaging video content that tells your brand's story.",
        description:
            "From scripted promotional videos to authentic on-location shoots, we create video marketing content designed to engage and convert.",
        benefits: [
            "Professional video production",
            "Script & concept development",
            "On-location or studio shoots",
            "Edited delivery-ready content",
        ],
    },
    {
        id: "social-media-promotion",
        category: "Social Media",
        icon: "Share2",
        title: "Social Media Promotion",
        shortDesc: "Dedicated social media promotion across Instagram, YouTube & more.",
        description:
            "A structured social media promotion campaign featuring your business across multiple platforms with consistent messaging and visual branding.",
        benefits: [
            "Multi-platform strategy",
            "Consistent brand messaging",
            "Audience engagement",
            "Growth tracking insights",
        ],
    },
    {
        id: "content-creation",
        category: "Entertainment",
        icon: "Film",
        title: "Content Creation",
        shortDesc: "Original, engaging content for your brand or as entertaining creator content.",
        description:
            "We produce engaging short-form and long-form content — from Instagram reels to YouTube vlogs — integrating your brand naturally into the narrative.",
        benefits: [
            "Short-form and long-form",
            "Authentic brand integration",
            "Entertainment-first approach",
            "Audience-tested formats",
        ],
    },
];

export const serviceCategories: ServiceCategory[] = [
    "Business Promotion",
    "Social Media",
    "Video Marketing",
    "Influencer / Creator",
    "Events",
    "Entertainment",
];
