// Sample testimonials for display — replace with real client reviews from Supabase

export interface Testimonial {
    id: string;
    name: string;
    businessName: string;
    avatarUrl: string;
    rating: number;
    review: string;
    date: string;
    featured?: boolean;
}

export const sampleTestimonials: Testimonial[] = [
    {
        id: "t1",
        name: "Rajesh Kumar",
        businessName: "Rajesh Textiles",
        avatarUrl: "https://i.pravatar.cc/150?img=3",
        rating: 5,
        review:
            "The promotion they did for our textile shop was outstanding. Our Instagram page saw a huge spike in followers and we got many new customers within days of the video going live. Highly recommended!",
        date: "2025-12-10",
        featured: true,
    },
    {
        id: "t2",
        name: "Priya Nair",
        businessName: "Spice Garden Restaurant",
        avatarUrl: "https://i.pravatar.cc/150?img=23",
        rating: 5,
        review:
            "They captured our restaurant beautifully. The food styling and the way they presented our place on Instagram and YouTube really brought in new diners. Worth every rupee!",
        date: "2025-11-28",
        featured: true,
    },
    {
        id: "t3",
        name: "Mohammed Faiz",
        businessName: "Faiz Hotel",
        avatarUrl: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        review:
            "Our hotel occupancy improved noticeably after the promotion. They showed our property in a very professional and appealing way. Great team to work with.",
        date: "2026-01-15",
        featured: true,
    },
    {
        id: "t4",
        name: "Karthik Selvam",
        businessName: "Karthik Motors Showroom",
        avatarUrl: "https://i.pravatar.cc/150?img=8",
        rating: 5,
        review:
            "Professional, punctual, and the content quality was excellent. Our showroom video got great engagement on YouTube. Definitely working with them again.",
        date: "2026-02-05",
    },
    {
        id: "t5",
        name: "Anitha Devi",
        businessName: "Anitha Sweets & Catering",
        avatarUrl: "https://i.pravatar.cc/150?img=32",
        rating: 4,
        review:
            "Very good experience. They understood our business quickly and created content that really spoke to our local audience. The response after the promotion was genuinely positive.",
        date: "2026-02-28",
    },
    {
        id: "t6",
        name: "Vinoth Babu",
        businessName: "StarFit Gym",
        avatarUrl: "https://i.pravatar.cc/150?img=15",
        rating: 5,
        review:
            "The Instagram reels they made for our gym were top-notch. Energetic, well-edited, and they really captured our brand vibe. We gained over 200 new followers after the post.",
        date: "2026-03-10",
    },
];
