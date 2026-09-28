"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Camera,
    ShoppingCart,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const serviceItems = [
    {
        number: "01",
        slug: "instagram-management",
        title: "Instagram Management",
        category: "SOCIAL MEDIA",
        description:
            "Put your business in front of an engaged audience through creator-led Instagram promotions, reels and social content.",
        icon: FaInstagram,
    },
    {
        number: "02",
        slug: "digital-marketing",
        title: "Digital Marketing",
        category: "DIGITAL GROWTH",
        description:
            "Build a stronger digital presence with practical marketing strategies designed around your brand, audience and goals.",
        icon: BarChart3,
    },
    {
        number: "03",
        slug: "personal-shoot",
        title: "Personal Shoot",
        category: "CREATIVE PRODUCTION",
        description:
            "Creative shoots for birthdays, weddings, cinematic couple reels, outdoor shoots and memorable personal moments.",
        icon: Camera,
    },
    {
        number: "04",
        slug: "digital-store",
        title: "Digital Store",
        category: "VISITING CARD & PHOTO FRAMES",
        description:
            "Quality printing and photo products for your business and personal needs — including visiting cards, photo frames and custom print solutions.",
        icon: ShoppingCart,
    },
];

export default function ServicesHero() {
    const scrollToServices = () => {
        const target = document.getElementById("services-directory");

        if (!target) return;

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <section className="relative overflow-hidden bg-white">
            {/* =====================================================
                HERO
            ====================================================== */}
            <div className="mx-auto max-w-[1420px] px-6 pb-20 pt-[120px] sm:px-8 sm:pb-24 sm:pt-[135px] lg:px-12 lg:pb-28 lg:pt-[145px]">
                <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:grid-cols-[0.92fr_1.08fr] xl:gap-20">
                    {/* =================================================
                        LEFT — DOT LOTTIE
                    ================================================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -35,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="order-2 flex min-h-[320px] items-center justify-center lg:order-1 lg:min-h-[480px]"
                    >
                        <div className="relative h-[340px] w-full sm:h-[430px] lg:h-[500px] xl:h-[540px]">
                            <DotLottieReact
                                src="/animations/services.lottie"
                                autoplay
                                loop
                                speed={1}
                                backgroundColor="transparent"
                                className="h-full w-full"
                            />
                        </div>
                    </motion.div>

                    {/* =================================================
                        RIGHT — HERO CONTENT
                    ================================================= */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 35,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            delay: 0.08,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="order-1 lg:order-2"
                    >
                        {/* Small label */}
                        <div className="mb-7">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E3262E]">
                                Services
                            </span>
                        </div>

                        {/* Main heading */}
                        <h1 className="max-w-[760px] font-sans text-[3rem] font-extrabold leading-[1.03] tracking-[-0.055em] text-[#171717] sm:text-[4rem] lg:text-[4.4rem] xl:text-[5rem]">
                            Build your brand.
                            <br />
                            <span className="text-[#E3262E]">
                                Grow your business.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-8 max-w-[690px] text-[15px] leading-7 text-black/60 sm:text-[16px] sm:leading-8">
                            We provide creative and digital services designed
                            to help businesses, creators and individuals build
                            a stronger presence, reach the right audience and
                            turn ideas into meaningful results.
                        </p>

                        <p className="mt-5 max-w-[690px] text-[15px] leading-7 text-black/55 sm:text-[16px] sm:leading-8">
                            From Instagram management and digital marketing to
                            personal shoots and premium print products, our
                            services are built around what you need — without
                            unnecessary complexity.
                        </p>

                        {/* Explore Services */}
                        <div className="mt-9">
                            <button
                                type="button"
                                onClick={scrollToServices}
                                className="group inline-flex items-center gap-2.5 rounded-md border-2 border-[#E3262E] bg-white px-6 py-3.5 text-[12px] font-semibold text-[#E3262E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E3262E] hover:text-white"
                            >
                                Explore Services

                                <ArrowRight
                                    size={15}
                                    strokeWidth={2}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </div>

                        {/* Bottom info */}
                        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/35">
                                    What we offer
                                </p>

                                <p className="mt-1.5 text-[13px] font-semibold text-black/70">
                                    Digital + Creative Solutions
                                </p>
                            </div>

                            <span className="hidden h-9 w-px bg-black/10 sm:block" />

                            <div>
                                <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-black/35">
                                    Core Services
                                </p>

                                <p className="mt-1.5 text-[13px] font-semibold text-black/70">
                                    04
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* =====================================================
                    SCROLL INDICATOR
                ====================================================== */}
                <motion.button
                    type="button"
                    onClick={scrollToServices}
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 0.5,
                    }}
                    className="group mt-16 flex w-fit items-center gap-3 text-left"
                >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-[#E3262E] transition-all duration-300 group-hover:border-[#E3262E]/30 group-hover:bg-[#E3262E]/[0.04]">
                        <ArrowDownRight
                            size={15}
                            strokeWidth={1.8}
                            className="transition-transform duration-300 group-hover:translate-y-0.5"
                        />
                    </span>

                    <span>
                        <span className="block text-[9px] font-semibold uppercase tracking-[0.16em] text-black/35">
                            Explore
                        </span>

                        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-black/65 transition-colors duration-300 group-hover:text-[#E3262E]">
                            Our Services
                        </span>
                    </span>
                </motion.button>
            </div>

            {/* =========================================================
                SERVICES SECTION
            ========================================================== */}
            <section
                id="services-directory"
                className="relative isolate overflow-hidden bg-[#f4f1ea] py-24 md:py-32 lg:py-36"
            >
                {/* =====================================================
                    BACKGROUND
                ====================================================== */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 z-0"
                >
                    <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E3262E]/[0.055] blur-[120px]" />

                    <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-black/[0.025] blur-[110px]" />

                    <div
                        className="absolute inset-0 opacity-[0.035]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                            backgroundSize: "72px 72px",
                        }}
                    />
                </div>

                <div className="section-container relative z-10">
                    {/* =================================================
                        SECTION HEADER
                    ================================================== */}
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -25,
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
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex items-start gap-3"
                        >
                            <span className="mt-2 h-[2px] w-10 shrink-0 bg-[#E3262E]" />

                            <div>
                                <p className="text-4xl font-black leading-[0.95] tracking-[-0.055em] text-black/90 sm:text-5xl md:text-6xl lg:text-7xl">
                                    Our
                                </p>

                                <p className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-black/25 sm:text-5xl md:text-6xl lg:text-7xl">
                                    Services
                                </p>

                                <p className="mt-4 max-w-[220px] text-xs font-medium leading-6 text-black/55">
                                    From promotion and content to digital
                                    marketing and creative production, built
                                    around your business.
                                </p>
                            </div>
                        </motion.div>

                        <div>
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 30,
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
                                    duration: 0.85,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="max-w-5xl text-5xl font-black leading-[0.93] tracking-[-0.06em] text-[#111111] sm:text-6xl md:text-7xl lg:text-[78px]"
                            >
                                Everything your
                                <br />
                                business needs to
                                <br />
                                <span className="text-[#E3262E]">
                                    move forward.
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 18,
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
                                    duration: 0.7,
                                    delay: 0.1,
                                }}
                                className="mt-7 max-w-2xl text-base font-medium leading-8 text-black/58 md:text-lg"
                            >
                                Choose the right combination of promotion,
                                creative production and digital services to
                                give your brand a stronger presence.
                            </motion.p>
                        </div>
                    </div>

                    {/* =================================================
                        EXACT SAME 4 SERVICE BOX STYLE
                    ================================================== */}
                    <div className="mt-16 md:mt-20">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                            {serviceItems.map((service, index) => {
                                const Icon = service.icon;

                                return (
                                    <motion.div
                                        key={service.slug}
                                        initial={{
                                            opacity: 0,
                                            y: 50,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.12,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.08,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="group"
                                    >
                                        <Link
                                            href={`/services/${service.slug}`}
                                            className="relative flex h-full min-h-[360px] overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.035)] outline-none transition-all duration-500 hover:-translate-y-3 hover:border-[#E3262E]/20 hover:shadow-[0_30px_70px_rgba(0,0,0,0.11)] focus-visible:ring-2 focus-visible:ring-[#E3262E]/50 md:p-7"
                                        >
                                            {/* Hover layer */}
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E3262E]/[0.07] via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                            {/* Decorative ring */}
                                            <motion.div
                                                initial={{
                                                    scale: 0.75,
                                                    opacity: 0,
                                                }}
                                                whileHover={{
                                                    scale: 1,
                                                    opacity: 1,
                                                }}
                                                transition={{
                                                    duration: 0.5,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-black/10"
                                            />

                                            {/* Decorative circle */}
                                            <div className="pointer-events-none absolute -right-10 -top-10 h-[216px] w-[216px] rounded-full border-[7px] border-gray-900/10 bg-red-100/70" />

                                            {/* Content */}
                                            <div className="relative z-10 flex h-full w-full flex-col">
                                                {/* Top */}
                                                <div className="flex items-start justify-between">
                                                    {/* Icon */}
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.1,
                                                            rotate: -5,
                                                            y: -4,
                                                        }}
                                                        transition={{
                                                            duration: 0.35,
                                                            ease: [
                                                                0.22,
                                                                1,
                                                                0.36,
                                                                1,
                                                            ],
                                                        }}
                                                        className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-[22px] border border-black/[0.10] bg-[#f0ede5] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-[#E3262E] group-hover:bg-[#E3262E] group-hover:shadow-[0_5px_20px_rgba(220,38,38,0.24)]"
                                                    >
                                                        <Icon
                                                            size={35}
                                                            className="text-red-300 transition-colors duration-300 group-hover:text-white"
                                                        />
                                                    </motion.div>

                                                    {/* Number */}
                                                    <span className="text-6xl font-black leading-none tracking-[-0.08em] text-[#111111]/[0.075] transition-colors duration-500 group-hover:text-[#E3262E]/30">
                                                        {service.number}
                                                    </span>
                                                </div>

                                                {/* Category */}
                                                <div className="mt-8">
                                                    <span className="inline-flex rounded-full border border-black/[0.09] bg-[#f6f3ec] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-black/50 transition-all duration-300 group-hover:border-[#E3262E]/20 group-hover:bg-[#E3262E]/[0.06] group-hover:text-[#E3262E]">
                                                        {service.category}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <motion.h3
                                                    whileHover={{
                                                        x: 4,
                                                    }}
                                                    transition={{
                                                        duration: 0.3,
                                                    }}
                                                    className="mt-5 max-w-sm text-[26px] font-black leading-[1.04] tracking-[-0.035em] text-[#111111] transition-colors duration-300 group-hover:text-[#E3262E] md:text-[28px]"
                                                >
                                                    {service.title}
                                                </motion.h3>

                                                {/* Description */}
                                                <p className="mt-4 max-w-md text-sm font-medium leading-7 text-black/58 md:text-[15px]">
                                                    {service.description}
                                                </p>

                                                {/* Bottom CTA */}
                                                <div className="mt-auto pt-8">
                                                    <div className="flex items-center justify-between border-t border-black/10 pt-5">
                                                        <div className="flex items-center gap-3">
                                                            <span className="h-[2px] w-9 bg-[#E3262E] transition-all duration-500 group-hover:w-16" />

                                                            <span className="text-[9px] font-black uppercase tracking-[0.16em] text-black/45 transition-colors duration-300 group-hover:text-[#E3262E]">
                                                                View Details
                                                            </span>
                                                        </div>

                                                        <motion.span
                                                            whileHover={{
                                                                scale: 1.12,
                                                            }}
                                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 group-hover:border-[#E3262E] group-hover:bg-[#E3262E]"
                                                        >
                                                            <ArrowUpRight
                                                                size={23}
                                                                strokeWidth={1.8}
                                                                className="text-[#171717] transition-colors duration-300 group-hover:text-white"
                                                            />
                                                        </motion.span>
                                                    </div>
                                                </div>

                                                {/* Bottom red line */}
                                                <div className="absolute bottom-[-28px] left-0 h-[3px] w-full origin-left scale-x-0 bg-[#E3262E] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}