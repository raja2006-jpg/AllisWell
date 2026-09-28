"use client";

import Link from "next/link";
import {
    ArrowUpRight,
} from "lucide-react";

import type {
    ServiceConfig,
} from "@/data/services";

import {
    visitingCardTypes,
} from "@/data/services";

import OfferSection from "./OfferSection";
import PhotoFramePreview from "./PhotoFramePreview";
import ServiceFAQ from "./ServiceFAQ";
import VisitingCard3D from "./VisitingCard3D";

interface ServiceDetailProps {
    service: ServiceConfig;
}

export default function ServiceDetail({
    service,
}: ServiceDetailProps) {
    const isDigitalStore =
        service.slug ===
        "digital-store";

    return (
        <main className="bg-white">
            {/* =====================================================
                INTRO
            ====================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1420px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
                        <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E3262E]">
                                {isDigitalStore
                                    ? "Explore the collection"
                                    : "What's included"}
                            </p>

                            <p className="mt-4 max-w-xs text-xs leading-6 text-black/40">
                                {isDigitalStore
                                    ? "Choose a visiting-card finish or explore photo-frame sizes."
                                    : "Explore each offer and compare the package options available for this service."}
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#111] sm:text-5xl lg:text-6xl">
                                {isDigitalStore
                                    ? "Well-made details, chosen by you."
                                    : "A simple structure for choosing the right package."}
                            </h2>

                            <p className="mt-6 max-w-2xl text-sm leading-7 text-black/45 sm:text-[15px] sm:leading-8">
                                {isDigitalStore
                                    ? "Choose the finish, size or print option that fits what you're looking for."
                                    : "Each offer keeps the process clear — understand what is included, choose your tier, then enquire directly."}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                SERVICE OFFERS
            ====================================================== */}
            {isDigitalStore ? (
                <section className="bg-[#f4f1ea]">
                    <div className="mx-auto max-w-[1420px] px-6 sm:px-8 lg:px-12">
                        {/* Visiting Cards */}
                        <div className="border-t border-black/[0.10] py-16 sm:py-20 lg:py-24">
                            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.45fr_1fr] lg:gap-16">
                                <div>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E3262E]">
                                        Print Solutions
                                    </p>

                                    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#111] sm:text-5xl">
                                        Visiting Cards
                                    </h2>

                                    <p className="mt-5 max-w-md text-sm leading-7 text-black/45">
                                        Choose from the available finishes.
                                        Each option includes 1000 double-side
                                        cards.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {visitingCardTypes.map(
                                        (
                                            card,
                                        ) => (
                                            <VisitingCard3D
                                                key={
                                                    card.id
                                                }
                                                {...card}
                                            />
                                        ),
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Photo Frames */}
                        <div className="border-t border-black/[0.10] py-16 sm:py-20 lg:py-24">
                            <PhotoFramePreview />
                        </div>
                    </div>
                </section>
            ) : (
                <section className="bg-[#f4f1ea]">
                    <div className="mx-auto max-w-[1420px] px-6 sm:px-8 lg:px-12">
                        {service.offers.map(
                            (
                                offer,
                                index,
                            ) => (
                                <OfferSection
                                    key={
                                        offer.id
                                    }
                                    offer={
                                        offer
                                    }
                                    serviceSlug={
                                        service.slug
                                    }
                                    index={
                                        index
                                    }
                                />
                            ),
                        )}
                    </div>

                    {service.slug ===
                    "personal-shoot" ? (
                        <div className="mx-auto max-w-[1420px] px-6 pb-12 sm:px-8 lg:px-12">
                            <div className="border border-[#E3262E]/15 bg-[#E3262E]/[0.045] px-5 py-5 sm:px-7">
                                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E3262E]">
                                    Editing included
                                </p>

                                <p className="mt-2 text-sm font-medium text-black/65">
                                    All Personal Shoot packages include
                                    editing.
                                </p>
                            </div>
                        </div>
                    ) : null}
                </section>
            )}

            {/* =====================================================
                FAQ
            ====================================================== */}
            <section className="bg-white">
                <div className="mx-auto max-w-[1420px] px-6 sm:px-8 lg:px-12">
                    <ServiceFAQ
                        items={
                            service.faq
                        }
                    />
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="bg-[#080808] text-white">
                <div className="mx-auto max-w-[1420px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                        <div>
                            <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E3262E]">
                                Ready when you are
                            </p>

                            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                                Let&apos;s plan your next move.
                            </h2>

                            <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                                Tell us what you need and we&apos;ll help you
                                choose the right direction for your project.
                            </p>
                        </div>

                        <Link
                            href={`/contact?service=${encodeURIComponent(
                                service.slug,
                            )}`}
                            className="
                                group
                                inline-flex
                                w-fit
                                items-center
                                gap-3
                                rounded-full
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
                            "
                        >
                            Book This Service

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-black/10">
                                <ArrowUpRight
                                    size={13}
                                />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}