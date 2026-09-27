// Brand site configuration — edit this file to update contact info, social links, etc.

export const siteConfig = {
    name: "AllIsWellMSVlogsz",
    tagline: "Digital Promotions, Business Visibility & Engaging Video Content",
    description:
        "We help local businesses, shops, hotels and brands grow through digital promotions, social media marketing and engaging video content — while creating travel, comedy and entertainment content for our audience.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://alliswellmsvlogsz.com",

    contact: {
        phone1: "6385295287",
        phone2: "9042990328",
        email: "nagadinesh28022006@gmail.com",
        whatsapp: "916385295287",
        address: "Coming Soon", // Update when finalized
    },

    social: {
        instagram: "https://www.instagram.com/alliswellmsvlogsz/",
        youtube: "https://www.youtube.com/@alliswellmsvlogsz",
        whatsapp: `https://wa.me/916385295287`,
    },

    // Founder — update when client provides final details
    founder: {
        name: "[Founder Name]", // TODO: Provide actual founder name
        title: "Creator & Founder",
        bio: "The creative mind behind AllIsWellMSVlogsz — combining business promotion expertise with authentic storytelling to help local brands reach their audience.",
    },

    // Stats — update with real figures when available
    stats: {
        instagramFollowers: "48.3K+",
        businessPromotions: "[XX]+", // TODO: Provide real figure
        happyClients: "[XX]+", // TODO: Provide real figure
        videoViews: "[XX]+", // TODO: Provide real figure
    },

    keywords: [
        "Digital Marketing",
        "Instagram Promotion",
        "YouTube Promotion",
        "Business Promotion",
        "Influencer Marketing",
        "Shop Promotion",
        "Hotel Promotion",
        "Restaurant Promotion",
        "Tamil Nadu Digital Marketing",
        "Social Media Marketing",
        "Video Marketing",
        "Content Creation",
    ],
} as const;

export type SiteConfig = typeof siteConfig;
