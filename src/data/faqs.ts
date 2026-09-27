// FAQs data — edit this file to add, remove, or update FAQ items

export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category?: string;
}

export const faqs: FAQ[] = [
    {
        id: "faq-1",
        question: "What type of businesses do you promote?",
        answer:
            "We work with local shops, restaurants, hotels, showrooms, startups, event organizers, product brands, and local service businesses. If you have a business you want people to discover, we can help promote it.",
        category: "General",
    },
    {
        id: "faq-2",
        question: "What platforms do you promote on?",
        answer:
            "We primarily promote on Instagram (48.3K+ followers) and YouTube. Promotions include posts, reels, stories, and dedicated video content depending on your package.",
        category: "Platform",
    },
    {
        id: "faq-3",
        question: "How does business promotion work?",
        answer:
            "You contact us → we understand your business → we plan the content → we shoot or create the promotion → we publish it across our channels. The process is simple, collaborative, and handled professionally from start to finish.",
        category: "Process",
    },
    {
        id: "faq-4",
        question: "Can I promote my shop, hotel, or restaurant?",
        answer:
            "Yes, absolutely. Shops, hotels, and restaurants are some of our most popular promotion categories. We create engaging, authentic content that showcases your establishment to our local and regional audience.",
        category: "Eligibility",
    },
    {
        id: "faq-5",
        question: "How do your packages work?",
        answer:
            "We offer Starter, Business Growth, and Premium Brand packages — each with different levels of coverage. All are custom-quoted since every business is unique. Contact us and we'll figure out the right fit for your goals and budget.",
        category: "Packages",
    },
    {
        id: "faq-6",
        question: "Can I submit a promotion request?",
        answer:
            "Yes! Use the 'Get Your Business Featured' button on the website, or reach out directly via WhatsApp or phone. We review every request and get back to you within 24–48 hours.",
        category: "Process",
    },
    {
        id: "faq-7",
        question: "How do I contact your team?",
        answer:
            "You can reach us via WhatsApp (+91 63852 95287), phone (63852 95287 / 90429 90328), email (nagadinesh28022006@gmail.com), Instagram DM (@alliswellmsvlogsz), or through the contact form on this website.",
        category: "Contact",
    },
];
