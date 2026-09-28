"use client";

import {
    useRef,
    type ElementType,
    type MouseEvent,
} from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    BriefcaseBusiness,
    CalendarDays,
    CarFront,
    Hotel,
    Package,
    Rocket,
    ShoppingBag,
    Store,
    UtensilsCrossed,
    type LucideIcon,
} from "lucide-react";

/* =========================================================
   CATEGORY DATA
========================================================= */

interface Category {
    number: string;
    title: string;
    description: string;
    icon: LucideIcon;
}

const categories: Category[] = [
    {
        number: "01",
        title: "Local Shops",
        description:
            "Put your store in front of the right audience through engaging digital promotions and business-focused content.",
        icon: ShoppingBag,
    },
    {
        number: "02",
        title: "Restaurants",
        description:
            "Showcase your food, ambience and experience through social-first promotional content.",
        icon: UtensilsCrossed,
    },
    {
        number: "03",
        title: "Hotels",
        description:
            "Create visual stories that highlight your property, hospitality and guest experience.",
        icon: Hotel,
    },
    {
        number: "04",
        title: "Showrooms",
        description:
            "Bring products, offers and showroom experiences closer to your potential customers.",
        icon: CarFront,
    },
    {
        number: "05",
        title: "Startups",
        description:
            "Build awareness for your growing brand with focused content and digital visibility.",
        icon: Rocket,
    },
    {
        number: "06",
        title: "Events",
        description:
            "Capture attention before, during and after your events with engaging social content.",
        icon: CalendarDays,
    },
    {
        number: "07",
        title: "Products",
        description:
            "Turn products into visual stories designed to connect with audiences across social platforms.",
        icon: Package,
    },
    {
        number: "08",
        title: "Local Brands",
        description:
            "Give your brand a stronger digital presence through creator-led promotion and content.",
        icon: Store,
    },
];

/* =========================================================
   MARQUEE ITEMS
========================================================= */

const marqueeItems = [
    "LOCAL SHOPS",
    "RESTAURANTS",
    "HOTELS",
    "SHOWROOMS",
    "STARTUPS",
    "EVENTS",
    "PRODUCTS",
    "LOCAL BRANDS",
];

/* =========================================================
   CATEGORY CARD
========================================================= */

function CategoryCard({
    category,
    index,
}: {
    category: Category;
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const Icon = category.icon;

    /* ---------------------------------------------------------
       Cursor spotlight
    --------------------------------------------------------- */

    const handleMouseMove = (
        event: MouseEvent<HTMLDivElement>
    ) => {
        const element = cardRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        element.style.setProperty(
            "--mouse-x",
            `${x}px`
        );

        element.style.setProperty(
            "--mouse-y",
            `${y}px`
        );
    };

    const handleMouseLeave = () => {
        const element = cardRef.current;

        if (!element) return;

        element.style.setProperty(
            "--mouse-x",
            "50%"
        );

        element.style.setProperty(
            "--mouse-y",
            "50%"
        );
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 35,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.65,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full min-h-[255px] overflow-hidden rounded-[26px] border border-black/[0.07] bg-white p-6 shadow-[0_12px_40px_rgba(15,15,15,0.035)] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/20 hover:shadow-[0_24px_70px_rgba(15,15,15,0.09)] sm:p-7"
                style={{
                    "--mouse-x": "50%",
                    "--mouse-y": "50%",
                } as React.CSSProperties}
            >
                {/* -------------------------------------------------
                   Cursor-following light
                ------------------------------------------------- */}

                <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                        background:
                            "radial-gradient(180px circle at var(--mouse-x) var(--mouse-y), rgba(239,68,68,0.08), transparent 70%)",
                    }}
                />

                {/* -------------------------------------------------
                   Top accent
                ------------------------------------------------- */}

                <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* -------------------------------------------------
                   Decorative corner
                ------------------------------------------------- */}

                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-500/[0.035] blur-3xl transition-all duration-500 group-hover:bg-red-500/[0.08]" />

                {/* -------------------------------------------------
                   Header
                ------------------------------------------------- */}

                <div className="relative flex items-start justify-between">
                    <span className="text-[10px] font-bold tracking-[0.22em] text-black/20">
                        {category.number}
                    </span>

                    <motion.div
                        whileHover={{
                            rotate: 5,
                            scale: 1.06,
                        }}
                        transition={{
                            duration: 0.25,
                        }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/[0.07] bg-[#f7f6f2] text-black/65 transition-all duration-300 group-hover:border-red-500/20 group-hover:bg-red-500/[0.06] group-hover:text-red-600"
                    >
                        <Icon
                            size={21}
                            strokeWidth={1.8}
                        />
                    </motion.div>
                </div>

                {/* -------------------------------------------------
                   Content
                ------------------------------------------------- */}

                <div className="relative mt-9">
                    <h3 className="text-xl font-bold tracking-[-0.025em] text-[#0a0a0a] transition-colors duration-300 group-hover:text-red-600">
                        {category.title}
                    </h3>

                    <p className="mt-3 max-w-[310px] text-sm leading-6 text-black/45">
                        {category.description}
                    </p>
                </div>

                {/* -------------------------------------------------
                   Bottom action
                ------------------------------------------------- */}

                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:left-7 sm:right-7">
                    <div className="h-px flex-1 bg-black/[0.07] transition-all duration-500 group-hover:bg-red-500/15" />

                    <motion.div
                        initial={{
                            x: 0,
                        }}
                        whileHover={{
                            x: 2,
                            y: -2,
                        }}
                        className="ml-4 flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] text-black/25 transition-all duration-300 group-hover:border-red-500/20 group-hover:bg-red-500/5 group-hover:text-red-600"
                    >
                        <ArrowUpRight size={15} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

/* =========================================================
   BUSINESS CATEGORIES
========================================================= */

export function BusinessCategories() {
    return (
        <section className="relative overflow-hidden bg-[#f5f4f0] py-24 sm:py-28 lg:py-32">
            
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            {/* Soft red atmosphere */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[760px] -translate-x-1/2 rounded-full bg-red-500/[0.035] blur-[140px]" />

            {/* Fine grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0,0,0,0.55) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(0,0,0,0.55) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "72px 72px",
                }}
            />

            {/* =====================================================
                MOVING CATEGORY STRIP
            ====================================================== */}

            <div className="relative mb-16 overflow-hidden border-y border-black/[0.07] bg-[#eeede8] py-4 sm:mb-20">
                <motion.div
                    className="flex w-max items-center"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 28,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...marqueeItems, ...marqueeItems].map(
                        (item, index) => (
                            <div
                                key={`${item}-${index}`}
                                className="flex items-center"
                            >
                                <span className="mx-7 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.26em] text-black/35 sm:mx-10">
                                    {item}
                                </span>

                                <span className="h-1 w-1 rounded-full bg-red-500" />
                            </div>
                        )
                    )}
                </motion.div>
            </div>

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-5">

                {/* =================================================
                    SECTION INTRO
                ================================================== */}

                <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                    
                    {/* Left heading */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -30,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="mb-5 flex items-center gap-3">
                            <span className="h-px w-10 bg-red-500" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-600">
                                Who We Work With
                            </span>
                        </div>

                        <h2 className="max-w-[560px] text-4xl font-black leading-[0.94] tracking-[-0.055em] text-[#090909] sm:text-5xl lg:text-6xl">
                            Your business
                            <br />
                            deserves to{" "}
                            <span className="text-red-600">
                                be seen.
                            </span>
                        </h2>
                    </motion.div>

                    {/* Right text */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.12,
                        }}
                        className="max-w-[580px] lg:justify-self-end"
                    >
                        <p className="text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
                            From local shops and restaurants to hotels,
                            showrooms, events and emerging brands, we
                            create digital content designed to introduce
                            your business to a wider audience.
                        </p>

                        <div className="mt-7 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white">
                                <BriefcaseBusiness
                                    size={16}
                                    strokeWidth={1.7}
                                />
                            </div>

                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/65">
                                    Promotion • Content • Visibility
                                </p>

                                <p className="mt-1 text-[11px] text-black/35">
                                    Built around your brand
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* =================================================
                    DIVIDER
                ================================================== */}

                <motion.div
                    initial={{
                        scaleX: 0,
                    }}
                    whileInView={{
                        scaleX: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeOut",
                    }}
                    className="my-14 h-px origin-left bg-black/[0.09] sm:my-16"
                />

                {/* =================================================
                    CATEGORY GRID
                ================================================== */}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={category.number}
                            category={category}
                            index={index}
                        />
                    ))}
                </div>

                {/* =================================================
                    BOTTOM CTA
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.65,
                        delay: 0.1,
                    }}
                    className="mt-14 rounded-[24px] border border-black/[0.08] bg-[#0a0a0a] p-6 text-white shadow-[0_20px_70px_rgba(0,0,0,0.10)] sm:p-8 lg:mt-16"
                >
                    <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-center">
                        
                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-red-500">
                                Ready to get noticed?
                            </p>

                            <h3 className="mt-2 text-2xl font-bold tracking-[-0.035em] text-white sm:text-3xl">
                                Let&apos;s put your brand in front of
                                the right audience.
                            </h3>
                        </div>

                        <Link
                            href="/contact"
                            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_12px_35px_rgba(220,38,38,0.25)]"
                        >
                            Talk About Your Business

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                                <ArrowUpRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}