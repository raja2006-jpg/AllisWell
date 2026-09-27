import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutStory } from "@/components/sections/about/AboutStory";
import { AboutMission } from "@/components/sections/about/AboutMission";
import { FounderSpotlight } from "@/components/sections/about/FounderSpotlight";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about AllIsWellMSVlogsz — a creator-led digital marketing brand helping local businesses grow through Instagram promotions, YouTube video content, and social media marketing.",
};

export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <AboutStory />
            <AboutMission />
            <FounderSpotlight />
            <CTABanner />
        </>
    );
}
