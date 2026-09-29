    export default function LocalBusinessSchema() {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        "http://localhost:3000";

    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",

        "@id": `${siteUrl}/#business`,

        name: "All Is Well MS Vlogs",

        description:
            "Digital marketing, Instagram management, personal shoots and digital print products for businesses and individuals.",

        url: siteUrl,

        telephone: [
            "+91-6385295287",
            "+91-9042990328",
        ],

        email:
            "nagadhinesh28022006@gmail.com",

        image: [
            `${siteUrl}/logo1.jpeg`,
            `${siteUrl}/logo2.jpg`,
        ],

        logo: `${siteUrl}/logo1.jpeg`,

        address: {
            "@type": "PostalAddress",
            streetAddress:
                "132 Sivaramu Complex, North Street",
            addressLocality: "Chinnamanur",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
        },

        areaServed: [
            {
                "@type": "City",
                name: "Chinnamanur",
            },
            {
                "@type": "AdministrativeArea",
                name: "Theni",
            },
            {
                "@type": "State",
                name: "Tamil Nadu",
            },
        ],

        priceRange: "₹₹",

        currenciesAccepted: "INR",

        sameAs: [
            "https://www.instagram.com/alliswellmsvlogsz/",
            "https://www.youtube.com/@alliswellmsvlogsz",
        ],

        hasOfferCatalog: {
            "@type": "OfferCatalog",

            name: "All Is Well MS Vlogs Services",

            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Instagram Management",
                        description:
                            "Instagram promotion and monthly content packages.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Digital Marketing",
                        description:
                            "Digital marketing and promotional content services.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Personal Shoot",
                        description:
                            "Birthday shoots, wedding cinematic reels and couple outdoor shoots.",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Digital Store",
                        description:
                            "Visiting cards and photo frame products.",
                    },
                },
            ],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema),
            }}
        />
    );
}