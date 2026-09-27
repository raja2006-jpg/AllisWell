"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BarChart3,
    Building,
    Camera,
    Code2,
    Megaphone,
    Store,
    Users,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

const serviceItems = [
    {
        number: "01",
        title: "Instagram Promotion",
        category: "SOCIAL MEDIA",
        description:
            "Put your business in front of an engaged audience through creator-led Instagram promotions, reels and social content.",
        icon: FaInstagram,
    },
    {
        number: "02",
        title: "Digital Marketing",
        category: "DIGITAL GROWTH",
        description:
            "Build a stronger digital presence with practical marketing strategies designed around your brand, audience and goals.",
        icon: BarChart3,
    },
    {
        number: "03",
        title: "Business Promotion",
        category: "BUSINESS",
        description:
            "Give shops, restaurants, hotels, showrooms and local brands the visibility they need through strategic creator promotion.",
        icon: Building,
    },
    {
        number: "04",
        title: "Political Marketing",
        category: "CAMPAIGN MEDIA",
        description:
            "Digital communication and campaign media support for political personalities, teams and public-facing outreach.",
        icon: Users,
    },
    {
        number: "05",
        title: "Personal Shoot",
        category: "CREATIVE PRODUCTION",
        description:
            "Creative shoots for birthdays, weddings, cinematic couple reels, outdoor shoots and memorable personal moments.",
        icon: Camera,
    },
    {
        number: "06",
        title: "Website Development",
        category: "WEB DEVELOPMENT",
        description:
            "Modern responsive websites that give your business a professional digital identity and make it easier for customers to connect.",
        icon: Code2,
    },
];

export function ServicesPreview() {
    return (
        <section className="relative isolate overflow-hidden bg-[#f4f1ea] py-24 md:py-32 lg:py-36">
            {/* ========================================================= */}
            {/* BACKGROUND */}
            {/* ========================================================= */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0"
            >
                <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-red/[0.055] blur-[120px]" />

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
                {/* ========================================================= */}
                {/* HEADER */}
                {/* ========================================================= */}

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
                        <span className="mt-2 h-[2px] w-10 shrink-0 bg-brand-red" />

                        <div>
                            <p className="text-4xl font-black leading-[0.95] tracking-[-0.055em] text-black/90 sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                                Our 
                            </p>
                            <p className="text-5xl font-black leading-[0.95] tracking-[-0.055em] text-black/27 sm:text-5xl md:text-6xl lg:text-7xl">Services</p>
                           
                       

                            <p className="mt-4 max-w-[220px] text-xs font-medium leading-6 text-black/55">
                                From promotion and content to digital
                                marketing and websites, built around your
                                business.
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
                            <span className="text-brand-red">
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
                            creative production and digital services to give
                            your brand a stronger presence.
                        </motion.p>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* SERVICES */}
                {/* ========================================================= */}

                <div className="mt-16 md:mt-20">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {serviceItems.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={service.number}
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
                                        href="/services"
                                        className="relative flex min-h-[360px] h-full overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_8px_28px_rgba(0,0,0,0.035)] outline-none transition-all duration-500 hover:-translate-y-3 hover:border-brand-red/20 hover:shadow-[0_30px_70px_rgba(0,0,0,0.11)] focus-visible:ring-2 focus-visible:ring-brand-red/50 md:p-7"
                                    >
                                        {/* ================================================= */}
                                        {/* BACKGROUND HOVER LAYER */}
                                        {/* ================================================= */}

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-red/[0.07] via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

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
                                            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-black/10 "
                                        />

                                        <div className="pointer-events-none absolute -right-10 -top-10 h-54 w-54 rounded-full border-[7px] border-grey-900 bg-red-100" />

                                        {/* ================================================= */}
                                        {/* CONTENT */}
                                        {/* ================================================= */}

                                        <div className="relative z-10 flex h-full w-full flex-col">
                                            {/* ================================ */}
                                            {/* TOP */}
                                            {/* ================================ */}

                                            <div className="flex items-start justify-between">
                                                {/* SERVICE LOGO */}
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
                                                    className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-[22px] border border-black/[0.10] bg-[#f0ede5] shadow-[0_8px_20px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-brand-red group-hover:bg-brand-red group-hover:shadow-[0_16px_35px_rgba(220,38,38,0.24)]"
                                                >
                                                    {/*
                                                     * IMPORTANT:
                                                     * Direct !text color on SVG.
                                                     * This prevents global svg/color
                                                     * rules from making the logo invisible.
                                                     */}
                                                    <Icon
                                                        size={32}
                                                        className="!text-[#171717] transition-colors duration-300 group-hover:!text-red-300"
                                                    />
                                                </motion.div>

                                                {/* NUMBER */}
                                                <motion.span
                                                    animate={{
                                                        y: [0, 0, 0],
                                                    }}
                                                    className="text-6xl font-black leading-none tracking-[-0.08em] text-[#111111]/[0.075] transition-colors duration-500 group-hover:text-red-300"
                                                >
                                                    {service.number}
                                                </motion.span>
                                            </div>

                                            {/* ================================ */}
                                            {/* CATEGORY */}
                                            {/* ================================ */}

                                            <div className="mt-8">
                                                <span className="inline-flex rounded-full border border-black/[0.09] bg-[#f6f3ec] px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-black/50 transition-all duration-300 group-hover:border-brand-red/20 group-hover:bg-brand-red/[0.06] group-hover:text-brand-red">
                                                    {service.category}
                                                </span>
                                            </div>

                                            {/* ================================ */}
                                            {/* TITLE */}
                                            {/* ================================ */}

                                            <motion.h3
                                                whileHover={{
                                                    x: 4,
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                }}
                                                className="mt-5 max-w-sm text-[26px] font-black leading-[1.04] tracking-[-0.035em] text-[#111111] transition-colors duration-300 group-hover:text-brand-red md:text-[28px]"
                                            >
                                                {service.title}
                                            </motion.h3>

                                            {/* ================================ */}
                                            {/* DESCRIPTION */}
                                            {/* ================================ */}

                                            <p className="mt-4 max-w-md text-sm font-medium leading-7 text-black/58 md:text-[15px] ">
                                                {service.description}
                                            </p>

                                            {/* ================================ */}
                                            {/* BOTTOM CTA */}
                                            {/* ================================ */}

                                            <div className="mt-auto pt-8 group-hover:text-red-600  transition-colors duration-300">
                                                <div className="flex items-center justify-between border-t border-black/10 pt-5">
                                                    <div className="flex items-center gap-3 group-hover:text-red-600 transition-colors duration-300">
                                                        <motion.span
                                                            initial={{
                                                                width: 36,
                                                            }}
                                                            whileHover={{
                                                                width: 64,
                                                            }}
                                                            className="h-[2px] bg-brand-red transition-all duration-500 "
                                                        />

                                                        <span className="text-[9px] font-black uppercase tracking-[0.16em] text-black/45 transition-colors duration-300 group-hover:text-red-600 ">
                                                            View Details
                                                        </span>
                                                    </div>

                                                    {/* VISIBLE ARROW BUTTON */}
                                                    <motion.span
                                                        whileHover={{
                                                            scale: 1.12,
                                                        }}
                                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 group-hover:border-brand-red group-hover:bg-brand-red"
                                                    >
                                                        <ArrowUpRight
                                                            size={25}
                                                            className="!text-[#171717] transition-colors duration-300 group-hover:!text-red-600 text-width-2 "
                                                        />
                                                    </motion.span>
                                                </div>
                                            </div>

                                            {/* ================================ */}
                                            {/* BOTTOM RED LINE */}
                                            {/* ================================ */}

                                            <div className="absolute bottom-[-28px] left-0 h-[3px] w-full origin-left scale-x-0 bg-brand-red transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 "  />
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ========================================================= */}
                {/* SERVICE DIRECTORY */}
                {/* ========================================================= */}

               
                {/* ========================================================= */}
                {/* CTA */}
                {/* ========================================================= */}

                <motion.div
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
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative mt-8 overflow-hidden rounded-[30px] bg-[#111111]"
                >
                    <div className="pointer-events-none absolute -right-32 -top-56 h-[550px] w-[550px] rounded-full bg-brand-red/20 blur-[120px]" />

                    <div className="relative z-10 grid grid-cols-1 items-center gap-8 p-7 md:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-brand-red">
                                Need the right service?
                            </p>

                            <h3 className="mt-3 max-w-4xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
                                Let's build something
                                <span className="text-white/30">
                                    {" "}
                                    people remember.
                                </span>
                            </h3>

                            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-white/55">
                                Tell us what you want to promote, create or
                                build — and let's choose the right direction
                                together.
                            </p>
                        </div>

                        <Link
                            href="/services"
                            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full  px-6 py-3.5 text-sm font-bold text-white border-white-[2px] transition-all duration-300 hover:-translate-y-1 hover:bg-white  hover:text-black hover:shadow-none"
                        >
                            Explore All Services

                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-black/10">
                                <ArrowRight size={15} />
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}