"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft,
    ArrowUpRight,
} from "lucide-react";

import type {
    ServiceConfig,
} from "@/data/services";

import ScrollExpand from "@/components/ui/ScrollExpand";

interface ServiceHeroProps {
    service: ServiceConfig;
}

export default function ServiceHero({
    service,
}: ServiceHeroProps) {
    const bookingHref =
        `/contact?service=${encodeURIComponent(
            service.slug,
        )}`;

    return (
        <section className="bg-black text-white">
            {/* =====================================================
                TOP INTRO
            ====================================================== */}
            <div className="mx-auto max-w-[1420px] px-6 pt-8 sm:px-8 lg:px-12">
                <Link
                    href="/services"
                    className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/35
                        transition-colors
                        hover:text-white
                    "
                >
                    <ArrowLeft
                        size={12}
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    />

                    All Services
                </Link>
            </div>

            {/* =====================================================
                SERVICE INTRO
            ====================================================== */}
            <div className="mx-auto max-w-[1420px] px-6 pb-10 pt-10 sm:px-8 sm:pb-12 lg:px-12 lg:pt-12">
                <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1fr_0.48fr] lg:gap-16">
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#E3262E]">
                                {service.number}
                            </span>

                            <span className="h-px w-8 bg-white/10" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">
                                {service.category}
                            </span>
                        </div>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1,
                                ],
                            }}
                            className="
                                mt-6
                                max-w-5xl
                                text-[3.5rem]
                                font-semibold
                                leading-[0.92]
                                tracking-[-0.06em]
                                sm:text-6xl
                                lg:text-8xl
                            "
                        >
                            {service.title}
                        </motion.h1>
                    </div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 18,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.08,
                        }}
                    >
                        <p className="max-w-md text-sm leading-7 text-white/45 sm:text-[15px] sm:leading-8">
                            {service.heroDescription}
                        </p>

                        <Link
                            href={bookingHref}
                            className="
                                group
                                mt-6
                                inline-flex
                                items-center
                                gap-3
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-white/70
                                transition-colors
                                hover:text-white
                            "
                        >
                            Enquire Now

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#E3262E] group-hover:bg-[#E3262E]">
                                <ArrowUpRight
                                    size={13}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* =====================================================
                FULL BLEED SCROLL EXPAND
            ====================================================== */}
            <div className="relative">
                <ScrollExpand
                    src={service.heroImage}
                    alt={service.title}
                    title={service.shortTitle}
                    scrollHint="Scroll to explore"
                    useWindowScroll
                    fullBleed
                    startWidth={82}
                    startHeight={80}
                    startRadius={24}
                    endRadius={0}
                    mediaZoom={1.08}
                    scrollDistance={1}
                    holdDistance={0.28}
                    smoothing={0.075}
                    overlayScrim={0.38}
                >
                    {/* =================================================
                        CENTER CONTENT BACKGROUND + SHADOW ONLY
                    ================================================== */}
                    <div
                        className="
                            max-w-[1720px]
                            rounded-xl
                            
                            bg-black/[0.32]
                            px-6
                            py-7
                            shadow-[0_24px_80px_rgba(0,0,0,0.50)]
                            
                            sm:px-8
                            sm:py-8
                        "
                    >
                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#E3262E]">
                            {service.category}
                        </p>

                        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">
                            {service.shortTitle}
                        </h2>

                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60">
                            {service.description}
                        </p>

                        <button
    type="button"
    onClick={() => {
        document
            .getElementById("packages")
            ?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
    }}
    className="
        mt-7
        inline-flex
        items-center
        gap-3
        rounded-md
        bg-[#E3262E]
        px-6
        py-3.5
        text-[9px]
        font-bold
        uppercase
        tracking-[0.18em]
        text-white
        transition-all
        duration-300
        hover:bg-white
        hover:text-black
        border-white/90
    "
>
    View Now
    <ArrowUpRight size={13} />
</button>
                    </div>
                </ScrollExpand>
            </div>

            {/* =====================================================
                HIGHLIGHTS
            ====================================================== */}
            <div className="mx-auto max-w-[1420px] px-6 pb-12 pt-14 sm:px-8 lg:px-12 lg:pt-16">
                <div className="grid grid-cols-2 border-y border-white/[0.08] sm:grid-cols-4">
                    {service.highlights.map(
                        (
                            highlight,
                            index,
                        ) => (
                            <motion.div
                                key={highlight}
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay:
                                        index *
                                        0.06,
                                }}
                                className={`
                                    px-4
                                    py-5
                                    sm:px-6
                                    sm:py-6
                                    ${
                                        index <
                                        2
                                            ? "border-b sm:border-b-0"
                                            : ""
                                    }
                                    ${
                                        index %
                                            2 ===
                                        0
                                            ? "border-r"
                                            : ""
                                    }
                                    sm:border-r
                                    sm:last:border-r-0
                                    border-white/[0.08]
                                `}
                            >
                                <p className="text-[8px] font-semibold uppercase leading-5 tracking-[0.14em] text-white/35">
                                    {highlight}
                                </p>
                            </motion.div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}