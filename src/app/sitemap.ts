import type { MetadataRoute } from "next";

import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl =
        process.env.NEXT_PUBLIC_SITE_URL ??
        "http://localhost:3000";

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${siteUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/services`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${siteUrl}/reviews`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    const serviceRoutes: MetadataRoute.Sitemap =
        services.map((service) => ({
            url: `${siteUrl}/services/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.85,
        }));

    return [
        ...staticRoutes,
        ...serviceRoutes,
    ];
}