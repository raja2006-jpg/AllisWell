"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowUpRight,
    Check,
} from "lucide-react";

import type {
    PackageTier,
} from "@/data/services";

interface PackageCardProps {
    tier: PackageTier;
    price: number;
    description?: string;
    features: string[];
    serviceSlug: string;
    offerId: string;
    selected: boolean;
    onSelect: () => void;
}

export default function PackageCard({
    tier,
    price,
    description,
    features,
    serviceSlug,
    offerId,
    selected,
    onSelect,
}: PackageCardProps) {
    const bookingHref =
        `/contact?service=${encodeURIComponent(
            serviceSlug,
        )}` +
        `&offer=${encodeURIComponent(
            offerId,
        )}` +
        `&tier=${encodeURIComponent(
            tier.toLowerCase(),
        )}`;

    const number =
        tier === "Basic"
            ? "01"
            : tier === "Medium"
              ? "02"
              : "03";

    return (
        <motion.article
            whileHover={{
                y: -4,
            }}
            transition={{
                duration: 0.25,
            }}
            className={`
                group
                relative
                overflow-hidden
                border
                p-5
                sm:p-6
                ${
                    selected
                        ? "border-[#E3262E] bg-[#fff]"
                        : "border-black/[0.10] bg-white"
                }
            `}
        >
            {/* selected line */}
            <span
                className={`
                    absolute
                    left-0
                    top-0
                    h-[2px]
                    bg-[#E3262E]
                    transition-all
                    duration-500
                    ${
                        selected
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                    }
                `}
            />

            {/* Header */}
            <button
                type="button"
                aria-pressed={
                    selected
                }
                onClick={onSelect}
                className="flex w-full items-start justify-between text-left"
            >
                <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E3262E]">
                        {tier}
                    </p>

                    <p className="mt-2 text-xs font-semibold text-black/65">
                        {selected
                            ? "Selected package"
                            : "Select package"}
                    </p>
                </div>

                <span className="text-[9px] font-bold tracking-[0.15em] text-black/20">
                    {number}
                </span>
            </button>

            {/* Price */}
            <div className="mt-7">
                <span className="text-3xl font-semibold tracking-[-0.05em] text-[#111]">
                    ₹
                    {price.toLocaleString(
                        "en-IN",
                    )}
                </span>

                <span className="ml-1 text-[9px] text-black/30">
                    / package
                </span>
            </div>

            {description ? (
                <p className="mt-2 text-xs leading-5 text-black/40">
                    {description}
                </p>
            ) : null}

            {/* Features */}
            <div className="mt-7 border-t border-black/[0.08] pt-4">
                {features.map(
                    (feature) => (
                        <div
                            key={
                                feature
                            }
                            className="flex items-start gap-2 py-1.5"
                        >
                            <Check
                                size={12}
                                strokeWidth={
                                    2
                                }
                                className="mt-0.5 shrink-0 text-[#E3262E]"
                            />

                            <span className="text-[10px] leading-5 text-black/50">
                                {
                                    feature
                                }
                            </span>
                        </div>
                    ),
                )}
            </div>

            {/* Book */}
            <Link
                href={bookingHref}
                className="
                    mt-6
                    flex
                    min-h-11
                    items-center
                    justify-between
                    border-t
                    border-black/[0.08]
                    pt-4
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-black/50
                    transition-colors
                    hover:text-[#E3262E]
                "
            >
                Book Now

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-hover:border-[#E3262E] group-hover:bg-[#E3262E] group-hover:text-white">
                    <ArrowUpRight
                        size={13}
                    />
                </span>
            </Link>
        </motion.article>
    );
}