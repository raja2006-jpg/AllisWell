"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import { visitingCardTypes } from "@/data/services";

type VisitingCardProps = (typeof visitingCardTypes)[number];

export default function VisitingCard3D({
    id,
    title,
    material,
    price,
    quantity,
    sides,
    accent,
    surface,
    finish,
}: VisitingCardProps) {
    const [detailsVisible, setDetailsVisible] = useState(false);
    const bookingHref =
        `/contact?service=digital-store&product=visiting-card` +
        `&variant=${encodeURIComponent(id)}`;

    return (
        <motion.article
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="group border border-black/10 bg-white p-5"
        >
            <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/35">
                    {material}
                </span>
                <span className="text-[8px] font-bold text-black/25">
                    {quantity}
                </span>
            </div>

            <div
                className="mt-6 flex min-h-[205px] items-center justify-center overflow-hidden rounded-[18px]"
                style={{
                    background: `radial-gradient(circle at center, ${accent} 0%, #111 72%)`,
                    perspective: "900px",
                }}
            >
                <motion.div
                    whileHover={{
                        rotateX: 8,
                        rotateY: -12,
                        rotateZ: -2,
                        scale: 1.04,
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 20 }}
                    style={{
                        transformStyle: "preserve-3d",
                        background: surface,
                        boxShadow:
                            finish === "gloss"
                                ? "0 30px 60px rgba(0,0,0,.4), inset 0 1px 1px rgba(255,255,255,.75)"
                                : "0 30px 60px rgba(0,0,0,.45)",
                    }}
                    className="relative aspect-[1.75/1] w-[min(220px,78%)] rounded-[12px] p-4"
                >
                    <div className="absolute inset-0 rounded-[12px] border border-white/20" />
                    {finish === "gloss" ? (
                        <div className="pointer-events-none absolute inset-0 rounded-[12px] bg-gradient-to-br from-white/55 via-transparent to-transparent" />
                    ) : null}
                    {finish === "synthetic" ? (
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-[12px] opacity-20"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(135deg, transparent 0 3px, rgba(20,15,8,.45) 3px 4px)",
                            }}
                        />
                    ) : null}
                    <div
                        className={`relative flex h-full flex-col justify-between ${
                            finish === "synthetic" || finish === "gloss"
                                ? "text-[#171717]"
                                : "text-white"
                        }`}
                    >
                        <div className="flex items-start justify-between">
                            <span className="text-[8px] font-bold tracking-[0.15em]">
                                ALL IS WELL
                            </span>
                            <span
                                className={`h-5 w-5 rounded-full border ${
                                    finish === "synthetic" || finish === "gloss"
                                        ? "border-black/35 bg-black/10"
                                        : "border-[#E3262E]/50 bg-[#E3262E]/10"
                                }`}
                            />
                        </div>
                        <div>
                            <p className="text-[7px] uppercase tracking-[0.18em] opacity-60">
                                {title} visiting card
                            </p>
                            <div className="mt-2 h-px w-12 bg-[#E3262E]" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="mt-5">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#111]">
                    {title}
                </h3>
            </div>

            <button
                type="button"
                aria-expanded={detailsVisible}
                onClick={() => setDetailsVisible((visible) => !visible)}
                className="mt-4 flex min-h-11 w-full items-center justify-between border-t border-black/[0.08] pt-3 text-left text-[9px] font-bold uppercase tracking-[0.18em] text-black/50 transition-colors hover:text-[#E3262E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E3262E]/50"
            >
                {detailsVisible ? "Hide Details" : "View Details"}
                <ChevronDown
                    size={14}
                    className={`transition-transform ${
                        detailsVisible ? "rotate-180" : ""
                    }`}
                />
            </button>

            {detailsVisible ? (
                <div className="space-y-2 border-t border-black/[0.08] py-4">
                    <div className="flex justify-between gap-4">
                        <span className="text-[9px] text-black/35">Quantity</span>
                        <span className="text-[9px] font-semibold text-black/60">
                            {quantity}
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="text-[9px] text-black/35">Printing</span>
                        <span className="text-[9px] font-semibold text-black/60">
                            {sides}
                        </span>
                    </div>
                    <div className="flex justify-between gap-4">
                        <span className="text-[9px] text-black/35">Price</span>
                        <span className="text-[13px] font-bold text-[#E3262E]">
                            ₹{price.toLocaleString("en-IN")}
                        </span>
                    </div>
                </div>
            ) : null}

            <Link
                href={bookingHref}
                className="mt-3 flex min-h-11 items-center justify-between border-t border-black/[0.08] pt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-black/55 transition-colors hover:text-[#E3262E]"
            >
                Book Now
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-[#f4f1ea] transition-all group-hover:border-[#E3262E] group-hover:bg-[#E3262E] group-hover:text-white">
                    <ArrowUpRight size={12} />
                </span>
            </Link>
            <div className="mt-3 flex items-center gap-2">
                <Check size={11} className="text-[#E3262E]" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-black/30">
                    Double-side · 1000 cards
                </span>
            </div>
        </motion.article>
    );
}
