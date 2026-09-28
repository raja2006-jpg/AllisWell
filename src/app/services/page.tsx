import type { Metadata } from "next";
// import ServicesDirectory from "@/components/sections/services/ServicesDirectory";
import ServicesHero from "@/components/sections/services/ServicesHero";
import ClientsMarquee from "@/components/sections/services/ClientsMarquee";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Explore Instagram Management, Digital Marketing, Personal Shoot and Digital Store services by AllIsWellMSVlogsz.",
};

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            {/* <ServicesDirectory /> */}
            <ClientsMarquee />
        </>
    );
}
