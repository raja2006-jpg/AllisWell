"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
    ArrowRight,
    Check,
    Sparkles,
} from "lucide-react";

import {
    services,
    visitingCardTypes,
    photoFrameSizes,
} from "@/data/services";

import type {
    PackageTier,
    ServiceConfig,
} from "@/data/services";

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);

const tierLabels: PackageTier[] = [
    "Basic",
    "Medium",
    "Premium",
];

interface QuoteCalculatorProps {
    initialServiceSlug?: string;
}

export default function QuoteCalculator({
    initialServiceSlug,
}: QuoteCalculatorProps) {
    const router = useRouter();

    const firstService =
        services.find(
            (service) => service.slug === initialServiceSlug,
        ) ?? services[0];

    const [serviceSlug, setServiceSlug] = useState(
        firstService?.slug ?? "",
    );

    const [offerId, setOfferId] = useState(
        firstService?.offers[0]?.id ?? "",
    );

    const [tier, setTier] = useState<PackageTier>("Basic");

    const [storeProduct, setStoreProduct] = useState<
        "visiting-card" | "photo-frame"
    >("visiting-card");

    const [cardVariant, setCardVariant] =
        useState<string>(visitingCardTypes[0]?.id ?? "");

    const [frameSize, setFrameSize] =
        useState<string>(photoFrameSizes[0]?.id ?? "");

    const [customFrame, setCustomFrame] = useState(false);

    const selectedService: ServiceConfig | undefined = useMemo(
        () =>
            services.find(
                (service) => service.slug === serviceSlug,
            ),
        [serviceSlug],
    );

    const selectedOffer = useMemo(
        () =>
            selectedService?.offers.find(
                (offer) => offer.id === offerId,
            ),
        [selectedService, offerId],
    );

    const selectedPackage = useMemo(
        () =>
            selectedOffer?.packages.find(
                (pkg) => pkg.tier === tier,
            ),
        [selectedOffer, tier],
    );

    const selectedCard = useMemo(
        () =>
            visitingCardTypes.find(
                (item) => item.id === cardVariant,
            ),
        [cardVariant],
    );

    const selectedFrame = useMemo(
        () =>
            photoFrameSizes.find(
                (item) => item.id === frameSize,
            ),
        [frameSize],
    );

    const handleServiceChange = (slug: string) => {
        setServiceSlug(slug);

        const nextService = services.find(
            (service) => service.slug === slug,
        );

        setOfferId(nextService?.offers[0]?.id ?? "");
        setTier("Basic");

        if (slug === "digital-store") {
            setStoreProduct("visiting-card");
            setCardVariant(
                visitingCardTypes[0]?.id ?? "",
            );
            setFrameSize(
                photoFrameSizes[0]?.id ?? "",
            );
            setCustomFrame(false);
        }
    };

    const handleEnquire = () => {
        if (!selectedService) {
            return;
        }

        const params = new URLSearchParams();

        params.set(
            "service",
            selectedService.slug,
        );

        if (selectedService.slug === "digital-store") {
            if (storeProduct === "visiting-card") {
                params.set(
                    "product",
                    "visiting-card",
                );

                params.set(
                    "variant",
                    cardVariant,
                );
            } else {
                params.set(
                    "product",
                    "photo-frame",
                );

                if (customFrame) {
                    params.set(
                        "custom",
                        "true",
                    );
                } else {
                    params.set(
                        "size",
                        frameSize,
                    );
                }
            }
        } else {
            if (offerId) {
                params.set(
                    "offer",
                    offerId,
                );
            }

            params.set(
                "tier",
                tier.toLowerCase(),
            );
        }

        router.push(
            `/contact?${params.toString()}`,
        );
    };

    const price = useMemo(() => {
        if (
            selectedService?.slug !==
            "digital-store"
        ) {
            return selectedPackage?.price ?? null;
        }

        if (
            storeProduct ===
            "visiting-card"
        ) {
            return selectedCard?.price ?? null;
        }

        return null;
    }, [
        selectedService,
        selectedPackage,
        storeProduct,
        selectedCard,
    ]);

    const selectionDescription = useMemo(() => {
        if (!selectedService) {
            return "";
        }

        if (
            selectedService.slug ===
            "digital-store"
        ) {
            if (
                storeProduct ===
                "visiting-card"
            ) {
                return selectedCard
                    ? `${selectedCard.quantity} · ${selectedCard.sides}`
                    : "";
            }

            if (customFrame) {
                return "Custom size · Enquiry required";
            }

            return selectedFrame?.label
                ? `${selectedFrame.label} · Price on enquiry`
                : "";
        }

        return selectedOffer
            ? `${selectedOffer.title} · ${tier} package`
            : "";
    }, [
        selectedService,
        storeProduct,
        selectedCard,
        customFrame,
        selectedFrame,
        selectedOffer,
        tier,
    ]);

    return (
        <section
            id="quote-calculator"
            className="relative overflow-hidden bg-[#F4F1EA] py-20 sm:py-24 lg:py-28"
        >
            {/* =====================================================
                BACKGROUND DETAIL
            ====================================================== */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full border border-black/[0.06]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-40 -left-24 h-80 w-80 rounded-full border border-black/[0.05]"
            />

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
                {/* HEADER */}

                <div className="mb-12 max-w-[760px]">
                    <div className="mb-5 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#E3262E]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/45">
                            Quote Calculator
                        </span>
                    </div>

                    <h2 className="text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-[#0A0A0A]">
                        Find the right
                        <span className="block text-black/30">
                            package for you.
                        </span>
                    </h2>

                    <p className="mt-6 max-w-[620px] text-sm leading-7 text-black/55 sm:text-base">
                        Select your service, requirement and
                        package to see the available price before
                        sending an enquiry.
                    </p>
                </div>

                {/* =================================================
                    CALCULATOR
                ================================================== */}

                <div className="grid grid-cols-1 overflow-hidden rounded-[30px] border border-black/[0.08] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.08)] lg:grid-cols-[1.15fr_0.85fr]">
                    {/* =================================================
                        LEFT SIDE
                    ================================================== */}

                    <div className="p-6 sm:p-8 lg:p-10">
                        {/* STEP 01 */}

                        <CalculatorStep
                            number="01"
                            title="Choose a service"
                        />

                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {services.map((service) => {
                                const active =
                                    service.slug ===
                                    serviceSlug;

                                return (
                                    <button
                                        key={service.slug}
                                        type="button"
                                        onClick={() =>
                                            handleServiceChange(
                                                service.slug,
                                            )
                                        }
                                        className={`group rounded-2xl border p-4 text-left transition-all duration-300 ${
                                            active
                                                ? "border-[#E3262E] bg-[#FFF7F7] shadow-[0_12px_35px_rgba(227,38,46,0.08)]"
                                                : "border-black/[0.08] bg-white hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
                                        }`}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <p
                                                    className={`text-[9px] font-bold uppercase tracking-[0.2em] ${
                                                        active
                                                            ? "text-[#E3262E]"
                                                            : "text-black/35"
                                                    }`}
                                                >
                                                    {
                                                        service.number
                                                    }
                                                </p>

                                                <p className="mt-2 text-sm font-semibold text-black sm:text-[15px]">
                                                    {
                                                        service.title
                                                    }
                                                </p>

                                                <p className="mt-1 text-xs text-black/45">
                                                    {
                                                        service.category
                                                    }
                                                </p>
                                            </div>

                                            <span
                                                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all ${
                                                    active
                                                        ? "border-[#E3262E] bg-[#E3262E] text-white"
                                                        : "border-black/10 text-transparent"
                                                }`}
                                            >
                                                <Check
                                                    size={
                                                        14
                                                    }
                                                />
                                            </span>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* STEP 02 */}

                        <div className="mt-10">
                            <CalculatorStep
                                number="02"
                                title={
                                    selectedService?.slug ===
                                    "digital-store"
                                        ? "Choose a product"
                                        : "Choose your requirement"
                                }
                            />

                            {selectedService?.slug !==
                            "digital-store" ? (
                                <div className="mt-5 space-y-3">
                                    {selectedService?.offers.map(
                                        (offer) => {
                                            const active =
                                                offer.id ===
                                                offerId;

                                            return (
                                                <button
                                                    key={
                                                        offer.id
                                                    }
                                                    type="button"
                                                    onClick={() => {
                                                        setOfferId(
                                                            offer.id,
                                                        );
                                                        setTier(
                                                            "Basic",
                                                        );
                                                    }}
                                                    className={`flex w-full items-center justify-between gap-5 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                                                        active
                                                            ? "border-[#E3262E] bg-[#FFF7F7]"
                                                            : "border-black/[0.08] hover:border-black/20 hover:bg-black/[0.015]"
                                                    }`}
                                                >
                                                    <div>
                                                        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
                                                            {
                                                                offer.eyebrow
                                                            }
                                                        </p>

                                                        <p className="mt-2 text-sm font-semibold text-black sm:text-[15px]">
                                                            {
                                                                offer.title
                                                            }
                                                        </p>

                                                        <p className="mt-1 max-w-[600px] text-xs leading-5 text-black/45">
                                                            {
                                                                offer.description
                                                            }
                                                        </p>
                                                    </div>

                                                    <span
                                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                                                            active
                                                                ? "border-[#E3262E] bg-[#E3262E] text-white"
                                                                : "border-black/10 text-transparent"
                                                        }`}
                                                    >
                                                        <Check
                                                            size={
                                                                14
                                                            }
                                                        />
                                                    </span>
                                                </button>
                                            );
                                        },
                                    )}
                                </div>
                            ) : (
                                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    <ProductChoice
                                        active={
                                            storeProduct ===
                                            "visiting-card"
                                        }
                                        title="Visiting Card"
                                        description="1000 cards · Double side"
                                        onClick={() => {
                                            setStoreProduct(
                                                "visiting-card",
                                            );
                                            setCustomFrame(
                                                false,
                                            );
                                        }}
                                    />

                                    <ProductChoice
                                        active={
                                            storeProduct ===
                                            "photo-frame"
                                        }
                                        title="Photo Frame"
                                        description="Standard or custom size"
                                        onClick={() => {
                                            setStoreProduct(
                                                "photo-frame",
                                            );
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* STEP 03 */}

                        {selectedService?.slug !==
                            "digital-store" && (
                            <div className="mt-10">
                                <CalculatorStep
                                    number="03"
                                    title="Choose a package"
                                />

                                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    {tierLabels.map(
                                        (packageTier) => {
                                            const active =
                                                packageTier ===
                                                tier;

                                            const packageData =
                                                selectedOffer?.packages.find(
                                                    (pkg) =>
                                                        pkg.tier ===
                                                        packageTier,
                                                );

                                            return (
                                                <button
                                                    key={
                                                        packageTier
                                                    }
                                                    type="button"
                                                    onClick={() =>
                                                        setTier(
                                                            packageTier,
                                                        )
                                                    }
                                                    className={`relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                                                        active
                                                            ? "border-[#E3262E] bg-[#FFF7F7] shadow-[0_12px_35px_rgba(227,38,46,0.08)]"
                                                            : "border-black/[0.08] hover:-translate-y-0.5 hover:border-black/20"
                                                    }`}
                                                >
                                                    {packageTier ===
                                                        "Premium" && (
                                                        <span className="absolute right-4 top-4 rounded-full bg-[#E3262E] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-white">
                                                            Popular
                                                        </span>
                                                    )}

                                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
                                                        {
                                                            packageTier
                                                        }
                                                    </span>

                                                    <div className="mt-3 text-xl font-semibold tracking-[-0.03em] text-black">
                                                        {packageData
                                                            ? formatPrice(
                                                                  packageData.price,
                                                              )
                                                            : "—"}
                                                    </div>

                                                    <div className="mt-4 space-y-2">
                                                        {packageData?.features.map(
                                                            (
                                                                feature,
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        feature
                                                                    }
                                                                    className="flex items-start gap-2 text-xs text-black/55"
                                                                >
                                                                    <Check
                                                                        size={
                                                                            13
                                                                        }
                                                                        className="mt-0.5 shrink-0 text-[#E3262E]"
                                                                    />

                                                                    <span>
                                                                        {
                                                                            feature
                                                                        }
                                                                    </span>
                                                                </div>
                                                            ),
                                                        )}
                                                    </div>
                                                </button>
                                            );
                                        },
                                    )}
                                </div>
                            </div>
                        )}

                        {/* DIGITAL STORE OPTIONS */}

                        {selectedService?.slug ===
                            "digital-store" && (
                            <div className="mt-10">
                                <CalculatorStep
                                    number="03"
                                    title={
                                        storeProduct ===
                                        "visiting-card"
                                            ? "Choose a card finish"
                                            : "Choose a frame size"
                                    }
                                />

                                {storeProduct ===
                                "visiting-card" ? (
                                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        {visitingCardTypes.map(
                                            (
                                                card,
                                            ) => {
                                                const active =
                                                    card.id ===
                                                    cardVariant;

                                                return (
                                                    <button
                                                        key={
                                                            card.id
                                                        }
                                                        type="button"
                                                        onClick={() =>
                                                            setCardVariant(
                                                                card.id,
                                                            )
                                                        }
                                                        className={`relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                                                            active
                                                                ? "border-[#E3262E] bg-[#FFF7F7]"
                                                                : "border-black/[0.08] hover:border-black/20"
                                                        }`}
                                                    >
                                                        <div
                                                            className="h-14 rounded-xl"
                                                            style={{
                                                                background:
                                                                    card.surface,
                                                            }}
                                                        />

                                                        <div className="mt-4 flex items-start justify-between gap-4">
                                                            <div>
                                                                <p className="text-sm font-semibold text-black">
                                                                    {
                                                                        card.title
                                                                    }
                                                                </p>

                                                                <p className="mt-1 text-xs text-black/45">
                                                                    {
                                                                        card.material
                                                                    }
                                                                </p>
                                                            </div>

                                                            <span className="text-sm font-semibold text-black">
                                                                {formatPrice(
                                                                    card.price,
                                                                )}
                                                            </span>
                                                        </div>

                                                        <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-black/35">
                                                            {
                                                                card.quantity
                                                            }{" "}
                                                            ·{" "}
                                                            {
                                                                card.sides
                                                            }
                                                        </p>
                                                    </button>
                                                );
                                            },
                                        )}
                                    </div>
                                ) : (
                                    <div className="mt-5">
                                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                            {photoFrameSizes.map(
                                                (size) => {
                                                    const active =
                                                        !customFrame &&
                                                        size.id ===
                                                            frameSize;

                                                    return (
                                                        <button
                                                            key={
                                                                size.id
                                                            }
                                                            type="button"
                                                            onClick={() => {
                                                                setFrameSize(
                                                                    size.id,
                                                                );
                                                                setCustomFrame(
                                                                    false,
                                                                );
                                                            }}
                                                            className={`rounded-2xl border px-3 py-5 text-center transition-all duration-300 ${
                                                                active
                                                                    ? "border-[#E3262E] bg-[#FFF7F7]"
                                                                    : "border-black/[0.08] hover:border-black/20"
                                                            }`}
                                                        >
                                                            <span className="text-sm font-semibold text-black">
                                                                {
                                                                    size.label
                                                                }
                                                            </span>

                                                            <span className="mt-1 block text-[10px] uppercase tracking-[0.1em] text-black/35">
                                                                Enquire
                                                            </span>
                                                        </button>
                                                    );
                                                },
                                            )}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setCustomFrame(
                                                    true,
                                                )
                                            }
                                            className={`mt-3 flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 ${
                                                customFrame
                                                    ? "border-[#E3262E] bg-[#FFF7F7]"
                                                    : "border-black/[0.08] hover:border-black/20"
                                            }`}
                                        >
                                            <div>
                                                <p className="text-sm font-semibold text-black">
                                                    Custom Size
                                                </p>

                                                <p className="mt-1 text-xs text-black/45">
                                                    Tell us the size you
                                                    need
                                                </p>
                                            </div>

                                            <span
                                                className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                                                    customFrame
                                                        ? "border-[#E3262E] bg-[#E3262E] text-white"
                                                        : "border-black/10 text-transparent"
                                                }`}
                                            >
                                                <Check
                                                    size={
                                                        14
                                                    }
                                                />
                                            </span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* =================================================
                        RIGHT SUMMARY
                    ================================================== */}

                    <div className="relative bg-[#090909] p-6 text-white sm:p-8 lg:p-10">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute right-[-80px] top-[-80px] h-56 w-56 rounded-full border border-white/[0.06]"
                        />

                        <div className="relative flex h-full flex-col">
                            <div>
                                <div className="flex items-center gap-2 text-[#E3262E]">
                                    <Sparkles
                                        size={14}
                                    />

                                    <span className="text-[9px] font-bold uppercase tracking-[0.2em]">
                                        Your Estimate
                                    </span>
                                </div>

                                <h3 className="mt-5 max-w-[360px] text-3xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl">
                                    {selectedService?.title ??
                                        "Select a service"}
                                </h3>

                                <div className="mt-8 border-t border-white/[0.09] pt-6">
                                    <div className="space-y-4">
                                        <SummaryRow
                                            label="Service"
                                            value={
                                                selectedService?.shortTitle ??
                                                "—"
                                            }
                                        />

                                        {selectedService?.slug !==
                                            "digital-store" && (
                                            <>
                                                <SummaryRow
                                                    label="Requirement"
                                                    value={
                                                        selectedOffer?.title ??
                                                        "—"
                                                    }
                                                />

                                                <SummaryRow
                                                    label="Package"
                                                    value={
                                                        tier
                                                    }
                                                />
                                            </>
                                        )}

                                        {selectedService?.slug ===
                                            "digital-store" && (
                                            <>
                                                <SummaryRow
                                                    label="Product"
                                                    value={
                                                        storeProduct ===
                                                        "visiting-card"
                                                            ? "Visiting Card"
                                                            : "Photo Frame"
                                                    }
                                                />

                                                <SummaryRow
                                                    label={
                                                        storeProduct ===
                                                        "visiting-card"
                                                            ? "Finish"
                                                            : "Size"
                                                    }
                                                    value={
                                                        storeProduct ===
                                                        "visiting-card"
                                                            ? selectedCard?.title ??
                                                              "—"
                                                            : customFrame
                                                              ? "Custom Size"
                                                              : selectedFrame?.label ??
                                                                "—"
                                                    }
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-12">
                                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5">
                                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/35">
                                        Estimated price
                                    </span>

                                    <div className="mt-3 flex items-end justify-between gap-4">
                                        <div>
                                            <p className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                                                {price !==
                                                null
                                                    ? formatPrice(
                                                          price,
                                                      )
                                                    : "Enquire"}
                                            </p>

                                            <p className="mt-2 text-xs leading-5 text-white/40">
                                                {price !==
                                                null
                                                    ? "Based on the selected package."
                                                    : "Our team will confirm the final price with you."}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="mb-3 text-xs text-white/40">
                                        {selectionDescription}
                                    </p>

                                    <button
                                        type="button"
                                        onClick={
                                            handleEnquire
                                        }
                                        disabled={
                                            !selectedService
                                        }
                                        className="group flex w-full items-center justify-between rounded-full bg-[#E3262E] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        Continue to Enquire

                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-black/10">
                                            <ArrowRight
                                                size={16}
                                            />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* =============================================================
   SMALL REUSABLE UI
============================================================= */

function CalculatorStep({
    number,
    title,
}: {
    number: string;
    title: string;
}) {
    return (
        <div className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                {number}
            </span>

            <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">
                    Step {number}
                </p>

                <h3 className="mt-1 text-base font-semibold tracking-[-0.02em] text-black">
                    {title}
                </h3>
            </div>
        </div>
    );
}

function ProductChoice({
    active,
    title,
    description,
    onClick,
}: {
    active: boolean;
    title: string;
    description: string;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                active
                    ? "border-[#E3262E] bg-[#FFF7F7]"
                    : "border-black/[0.08] hover:border-black/20"
            }`}
        >
            <div>
                <p className="text-sm font-semibold text-black">
                    {title}
                </p>

                <p className="mt-1 text-xs text-black/45">
                    {description}
                </p>
            </div>

            <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                    active
                        ? "border-[#E3262E] bg-[#E3262E] text-white"
                        : "border-black/10 text-transparent"
                }`}
            >
                <Check size={14} />
            </span>
        </button>
    );
}

function SummaryRow({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-start justify-between gap-6">
            <span className="text-xs text-white/35">
                {label}
            </span>

            <span className="max-w-[230px] text-right text-sm font-medium text-white/85">
                {value}
            </span>
        </div>
    );
}