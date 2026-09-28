"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowUpRight,
    ChevronDown,
} from "lucide-react";

import {
    photoFrameImage,
    photoFrameSizes,
} from "@/data/services";

import WaterHoverImage from "@/components/ui/WaterHoverImage";

export default function PhotoFramePreview() {
    const [
        selectedSize,
        setSelectedSize,
    ] = useState<
        (typeof photoFrameSizes)[number]
    >(photoFrameSizes[1]);

    const [
        detailsVisible,
        setDetailsVisible,
    ] = useState(false);

    const bookingHref =
        `/contact?service=digital-store&product=photo-frame` +
        `&size=${encodeURIComponent(
            selectedSize.id,
        )}`;

    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1fr] lg:gap-14">
            {/* =====================================================
                PREVIOUS PHOTO FRAME VISUAL
            ====================================================== */}
            <div className="relative min-h-[430px] overflow-hidden bg-grey-100 sm:min-h-[500px]">
                {/* Background glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,38,46,0.10),transparent_62%)]" />

                {/* Center frame */}
                <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
                    <div
                        className="
                            relative
                            aspect-[4/5]
                            w-[min(270px,78%)]
                            rotate-[-1deg]
                            bg-gradient-to-br
                            from-[#4b392b]
                            via-[#171717]
                            to-[#6b5140]
                            p-[13px]
                            shadow-[0_35px_90px_rgba(0,0,0,0.58)]
                            transition-transform
                            duration-500
                            hover:rotate-[1deg]
                            hover:scale-[1.025]
                        "
                    >
                        {/* Inner photo area */}
                        <div className="absolute inset-[13px] overflow-hidden bg-[#222]">
                            <WaterHoverImage
                                src={photoFrameImage}
                                alt="Landscape photograph displayed in a finished photo frame"
                                sizes="270px"
                            />

                            <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-br from-white/[0.10] via-transparent to-black/20" />
                        </div>

                        {/* Frame inner border */}
                        <div className="pointer-events-none absolute inset-[10px] border border-white/10" />

                        {/* Frame highlight */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/[0.20]" />
                    </div>
                </div>

                {/* Small label */}
                <div className="absolute bottom-5 left-5">
                    <p className="text-[8px] font-bold uppercase tracking-[0.20em] text-white/30">
                        Digital Store
                    </p>

                    <p className="mt-1 text-[10px] text-white/50">
                        Photo Frames
                    </p>
                </div>
            </div>

            {/* =====================================================
                CONTENT
            ====================================================== */}
            <div className="flex flex-col justify-center">
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E3262E]">
                    Photo Frame
                </p>

                <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] sm:text-5xl">
                    Frame your favourite moments.
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-black/45">
                    Choose a listed size for an enquiry, or request a custom
                    dimension. Final pricing will be confirmed by our team.
                </p>

                {/* View details */}
                <button
                    type="button"
                    aria-expanded={
                        detailsVisible
                    }
                    onClick={() =>
                        setDetailsVisible(
                            (
                                visible,
                            ) =>
                                !visible,
                        )
                    }
                    className="
                        mt-8
                        inline-flex
                        min-h-11
                        w-fit
                        items-center
                        gap-3
                        border-b
                        border-[#E3262E]/30
                        pb-2
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#111]
                        transition-colors
                        hover:border-[#E3262E]
                        hover:text-[#E3262E]
                    "
                >
                    {detailsVisible
                        ? "Hide Details"
                        : "View Details"}

                    <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                            detailsVisible
                                ? "rotate-180"
                                : ""
                        }`}
                    />
                </button>

                {/* Size options */}
                {detailsVisible ? (
                    <div className="mt-7">
                        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/35">
                            Select a standard size
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                            {photoFrameSizes.map(
                                (
                                    size,
                                ) => {
                                    const active =
                                        selectedSize.id ===
                                        size.id;

                                    return (
                                        <button
                                            key={
                                                size.id
                                            }
                                            type="button"
                                            aria-pressed={
                                                active
                                            }
                                            onClick={() =>
                                                setSelectedSize(
                                                    size,
                                                )
                                            }
                                            className={`
                                                min-h-11
                                                border
                                                px-3
                                                py-3
                                                text-left
                                                text-[10px]
                                                font-semibold
                                                transition-all
                                                ${
                                                    active
                                                        ? "border-[#E3262E] bg-[#E3262E] text-white"
                                                        : "border-black/10 bg-white text-black/55 hover:border-black/25 hover:text-black"
                                                }
                                            `}
                                        >
                                            {
                                                size.label
                                            }
                                        </button>
                                    );
                                },
                            )}
                        </div>

                        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.09] pt-5">
                            <div>
                                <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-black/30">
                                    Selected size
                                </p>

                                <p className="mt-1 text-sm font-semibold text-black">
                                    {
                                        selectedSize.label
                                    }
                                </p>
                            </div>

                            <Link
                                href={
                                    bookingHref
                                }
                                className="
                                    group
                                    inline-flex
                                    min-h-11
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-[#E3262E]
                                    px-5
                                    py-3
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-white
                                    transition-colors
                                    hover:bg-black
                                "
                            >
                                Enquire This Size

                                <ArrowUpRight
                                    size={13}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>
                    </div>
                ) : null}

                {/* Custom size */}
                <Link
                    href="/contact?service=digital-store&product=photo-frame&custom=true"
                    className="
                        mt-5
                        inline-flex
                        min-h-11
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-black/10
                        px-5
                        py-3
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-black/55
                        transition-all
                        hover:border-[#E3262E]
                        hover:text-[#E3262E]
                    "
                >
                    Custom Size
                </Link>
            </div>
        </div>
    );
}