"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import type { OfferItem, PackageTier } from "@/data/services";
import PackageCard from "./PackageCard";

interface OfferSectionProps {
    offer: OfferItem;
    serviceSlug: string;
    index: number;
}

export default function OfferSection({
    offer,
    serviceSlug,
    index,
}: OfferSectionProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTier, setSelectedTier] =
        useState<PackageTier>("Basic");
    const packageListId = `packages-${offer.id}`;

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.7 }}
            className="border-b border-black/[0.10] py-12 sm:py-16"
        >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1fr] lg:gap-14">
                <div className="relative min-h-[300px] overflow-hidden bg-[#ddd7cc] sm:min-h-[370px]">
                    <Image
                        src={offer.image}
                        alt={`${offer.title} service`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5">
                        <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                            {offer.eyebrow}
                        </span>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                        <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/45">
                                Offer {String(index + 1).padStart(2, "0")}
                            </p>
                            <p className="mt-1 text-xl font-semibold tracking-[-0.03em] text-white">
                                {offer.title}
                            </p>
                        </div>
                        <ArrowDownRight size={18} className="text-white/70" />
                    </div>
                </div>

                <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E3262E]">
                        {offer.eyebrow}
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-[#111] sm:text-4xl">
                        {offer.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-black/50">
                        {offer.description}
                    </p>

                    {offer.features?.length ? (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {offer.features.map((feature) => (
                                <span
                                    key={feature}
                                    className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-black/45"
                                >
                                    {feature}
                                </span>
                            ))}
                        </div>
                    ) : null}

                    <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={packageListId}
                        onClick={() => setIsOpen((open) => !open)}
                        className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-[#E3262E]/30 pb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#111] transition-colors hover:border-[#E3262E] hover:text-[#E3262E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3262E]/50"
                    >
                        {isOpen ? "Hide Packages" : "View Details"}
                        <ChevronDown
                            size={14}
                            className={`transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                            }`}
                        />
                    </button>

                    <motion.div
                        id={packageListId}
                        initial={false}
                        animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                        aria-hidden={!isOpen}
                        inert={!isOpen}
                    >
                        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
                            {offer.packages.map((pkg) => (
                                <PackageCard
                                    key={pkg.tier}
                                    tier={pkg.tier}
                                    price={pkg.price}
                                    description={pkg.description}
                                    features={pkg.features}
                                    serviceSlug={serviceSlug}
                                    offerId={offer.id}
                                    selected={selectedTier === pkg.tier}
                                    onSelect={() => setSelectedTier(pkg.tier)}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
