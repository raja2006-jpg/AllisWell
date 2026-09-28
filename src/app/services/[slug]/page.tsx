import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
    getServiceBySlug,
    services,
} from "@/data/services";

import ServiceHero from "@/components/sections/services/ServiceHero";
import ServiceDetail from "@/components/sections/services/ServiceDetail";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata(
    { params }: ServicePageProps
): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {};
    }

    return {
        title: service.title,
        description: service.description,
    };
}

export default async function ServicePage({
    params,
}: ServicePageProps) {
    const { slug } = await params;

    const service =
        getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    return (
        <>
            <ServiceHero service={service} />
            <ServiceDetail service={service} />
        </>
    );
}