export type PackageTier = "Basic" | "Medium" | "Premium";
export type ServiceIcon = "megaphone" | "chart" | "camera" | "store";

export interface PackageConfig {
    tier: PackageTier;
    price: number;
    description?: string;
    features: string[];
}

export interface OfferItem {
    id: string;
    title: string;
    eyebrow: string;
    description: string;
    image: string;
    features?: string[];
    packages: PackageConfig[];
}

export interface ServiceFAQItem {
    question: string;
    answer: string;
}

export interface ServiceConfig {
    slug: string;
    number: string;
    title: string;
    shortTitle: string;
    category: string;
    description: string;
    heroDescription: string;
    heroImage: string;
    icon: ServiceIcon;
    highlights: string[];
    offers: OfferItem[];
    faq: ServiceFAQItem[];
}

const tierPackages = (
    prices: [number, number, number],
    features: [string[], string[], string[]] = [[], [], []],
): PackageConfig[] =>
    (["Basic", "Medium", "Premium"] as const).map(
        (tier, index) => ({
            tier,
            price: prices[index],
            features: features[index],
        }),
    );

const serviceFaqs: ServiceFAQItem[] = [
    {
        question: "How do I get started?",
        answer:
            "Choose an offer and package, then use Book Now to send your selection to our enquiry page. Our team will follow up to discuss the details.",
    },
    {
        question: "How is the booking confirmed?",
        answer:
            "Your request is an enquiry, not a payment or confirmed booking. We will contact you directly to confirm availability and next steps.",
    },
];

export const services: ServiceConfig[] = [
    {
        slug: "instagram-management",
        number: "01",
        title: "Instagram Management",
        shortTitle: "Make your next post count.",
        category: "SOCIAL MEDIA",
        description:
            "Creator-led Instagram promotion and monthly content packages for brands ready to reach a wider audience.",
        heroDescription:
            "Bring your brand to an engaged audience with thoughtful Instagram promotions and consistent monthly content.",
        heroImage:
            "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2000&q=85",
        icon: "megaphone",
        highlights: [
            "Creator-led promotion",
            "Single video options",
            "Monthly packages",
            "Clear package pricing",
        ],
        offers: [
            {
                id: "single-video-promotion",
                title: "Single Video Promotion",
                eyebrow: "ONE-TIME PROMOTION",
                description:
                    "Promote your business with a single video feature on Instagram. Choose the package that suits your campaign.",
                image:
                    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages([4000, 4000, 5000]),
            },
            {
                id: "monthly-package",
                title: "Monthly Package",
                eyebrow: "ONGOING CONTENT",
                description:
                    "Keep your brand visible with a monthly mix of videos and posters.",
                image:
                    "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages(
                    [20000, 25000, 30000],
                    [
                        ["10 videos", "5 posters"],
                        ["15 videos", "10 posters"],
                        ["20 videos", "15 posters"],
                    ],
                ),
            },
        ],
        faq: serviceFaqs,
    },
    {
        slug: "digital-marketing",
        number: "02",
        title: "Digital Marketing",
        shortTitle: "Grow with a clearer strategy.",
        category: "DIGITAL GROWTH",
        description:
            "Digital marketing support built around practical campaign content and a more consistent online presence.",
        heroDescription:
            "Give your business a stronger digital presence with focused video promotion and monthly content.",
        heroImage:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=85",
        icon: "chart",
        highlights: [
            "Campaign-ready content",
            "Single video options",
            "Monthly packages",
            "Clear package pricing",
        ],
        offers: [
            {
                id: "single-video-promotion",
                title: "Single Video Promotion",
                eyebrow: "ONE-TIME PROMOTION",
                description:
                    "Put a campaign in motion with a single promotional video. Select a package to enquire.",
                image:
                    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages([7000, 8000, 9000]),
            },
            {
                id: "monthly-package",
                title: "Monthly Package",
                eyebrow: "ONGOING CONTENT",
                description:
                    "Maintain a steady digital presence with a monthly video package.",
                image:
                    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages(
                    [25000, 30000, 35000],
                    [["6 videos"], ["8 videos"], ["10 videos"]],
                ),
            },
        ],
        faq: serviceFaqs,
    },
    {
        slug: "personal-shoot",
        number: "03",
        title: "Personal Shoot",
        shortTitle: "Keep the moment close.",
        category: "CREATIVE PRODUCTION",
        description:
            "Personal shoots for birthdays, wedding reels and outdoor couple sessions, with editing included in every package.",
        heroDescription:
            "Celebrate a milestone or capture a story with a considered personal shoot. Editing is included in all listed services.",
        heroImage:
            "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
        icon: "camera",
        highlights: [
            "Birthday shoots",
            "Wedding cinematic reels",
            "Couple outdoor shoots",
            "Editing included",
        ],
        offers: [
            {
                id: "birthday-shoot",
                title: "Birthday Shoot",
                eyebrow: "PERSONAL SHOOT",
                description:
                    "Capture the celebration with a dedicated birthday shoot. Editing is included.",
                image:
                    "https://images.unsplash.com/photo-1530103862676-de8c9deabad1?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages(
                    [3000, 4000, 5000],
                    [["Editing included"], ["Editing included"], ["Editing included"]],
                ),
            },
            {
                id: "wedding-cinematic-reel",
                title: "Wedding Cinematic Reel",
                eyebrow: "PERSONAL SHOOT",
                description:
                    "A cinematic wedding reel to remember the occasion. Editing is included.",
                image:
                    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages(
                    [3000, 4000, 5000],
                    [["Editing included"], ["Editing included"], ["Editing included"]],
                ),
            },
            {
                id: "couple-outdoor-shoot",
                title: "Couple Outdoor Shoot",
                eyebrow: "PERSONAL SHOOT",
                description:
                    "Create a set of outdoor memories together. Editing is included.",
                image:
                    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1400&q=85",
                packages: tierPackages(
                    [3000, 4000, 5000],
                    [["Editing included"], ["Editing included"], ["Editing included"]],
                ),
            },
        ],
        faq: [
            {
                question: "Is editing included?",
                answer:
                    "Yes. Editing is included in all Personal Shoot services and packages listed here.",
            },
            ...serviceFaqs,
        ],
    },
    {
        slug: "digital-store",
        number: "04",
        title: "Digital Store",
        shortTitle: "Thoughtful details, made tangible.",
        category: "PRINT & PHOTO PRODUCTS",
        description:
            "Choose a visiting card finish or enquire about a photo frame in a standard or custom size.",
        heroDescription:
            "Explore visiting cards in four finishes and photo frames with standard and custom-size enquiry options.",
        heroImage:
            "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=2000&q=85",
        icon: "store",
        highlights: [
            "Four card finishes",
            "1000 cards per option",
            "Double-side printing",
            "Custom frame sizes",
        ],
        offers: [],
        faq: [
            {
                question: "Can I request a custom photo-frame size?",
                answer:
                    "Yes. Choose Custom Size in the photo-frame section to send a custom-size enquiry.",
            },
            ...serviceFaqs,
        ],
    },
];

export const visitingCardTypes = [
    {
        id: "standard",
        title: "Standard",
        material: "Everyday finish",
        price: 900,
        quantity: "1000 cards",
        sides: "Double side",
        accent: "#857d69",
        surface: "linear-gradient(135deg, #35342f 0%, #10100f 58%, #6a6253 100%)",
        finish: "standard",
    },
    {
        id: "gloss",
        title: "Gloss",
        material: "Reflective gloss",
        price: 1000,
        quantity: "1000 cards",
        sides: "Double side",
        accent: "#718b9c",
        surface: "linear-gradient(135deg, #dce7ed 0%, #738895 46%, #f8fbfc 100%)",
        finish: "gloss",
    },
    {
        id: "matt",
        title: "Matt",
        material: "Soft matt finish",
        price: 1100,
        quantity: "1000 cards",
        sides: "Double side",
        accent: "#98705d",
        surface: "linear-gradient(135deg, #53443c 0%, #171412 58%, #765849 100%)",
        finish: "matt",
    },
    {
        id: "synthetic",
        title: "Synthetic",
        material: "Synthetic stock",
        price: 1200,
        quantity: "1000 cards",
        sides: "Double side",
        accent: "#b89856",
        surface: "linear-gradient(135deg, #e3ca84 0%, #85713e 45%, #f1e6c9 100%)",
        finish: "synthetic",
    },
] as const;

export const photoFrameSizes = [
    { id: "4x6", label: "4 × 6 in" },
    { id: "5x7", label: "5 × 7 in" },
    { id: "8x10", label: "8 × 10 in" },
    { id: "12x18", label: "12 × 18 in" },
] as const;

export const photoFrameImage =
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85";

export function getServiceBySlug(
    slug: string,
): ServiceConfig | undefined {
    return services.find((service) => service.slug === slug);
}
