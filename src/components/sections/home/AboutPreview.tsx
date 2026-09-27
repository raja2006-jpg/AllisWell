"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowUpRight,
    Camera,
    Check,
    Play,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa6";
import { siteConfig } from "@/data/site";

const highlights = [
    "Social reach through a 48.3K+ Instagram audience",
    "Authentic video-first storytelling",
    "Creator-led business promotion",
    "Local business focused content",
    "Instagram and YouTube visibility",
    "Entertainment, travel and lifestyle content",
];

export function AboutPreview() {
    return (
        <section className="relative overflow-hidden bg-[#090909] py-24 sm:py-28 lg:py-32">
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            {/* Large red atmospheric glow */}
            <div className="pointer-events-none absolute -left-[220px] top-[15%] h-[520px] w-[520px] rounded-full bg-red-600/[0.055] blur-[150px]" />

            <div className="pointer-events-none absolute -right-[180px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-red-500/[0.04] blur-[150px]" />

            {/* Fine grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.018]"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(255,255,255,0.5) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            90deg,
                            rgba(255,255,255,0.5) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: "72px 72px",
                }}
            />

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-5">
                <div className="grid items-center gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 xl:gap-24">

                    {/* =================================================
                        LEFT — VISUAL
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mx-auto w-full max-w-[520px] lg:mx-0"
                    >
                        {/* Outer decorative frame */}
                        <div className="pointer-events-none absolute -inset-4 rounded-[36px] border border-white/[0.05]" />

                        {/* Offset frame */}
                        <div className="pointer-events-none absolute -bottom-5 -right-5 h-[55%] w-[55%] rounded-[28px] border border-red-500/[0.15]" />

                        {/* Image glow */}
                        <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-red-500/[0.05] blur-[60px]" />

                        {/* Main image */}
                        <motion.div
                            whileHover={{
                                y: -4,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                            }}
                            className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
                        >
                            <div className="relative aspect-[4/5]">
                                <Image
                                    src="/logo2.jpg"
                                    alt="All Is Well MS Vlogs creator"
                                    fill
                                    sizes="(max-width: 1024px) 90vw, 42vw"
                                    className="object-cover object-top"
                                />

                                {/* Cinematic overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

                                {/* Subtle red edge light */}
                                <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-red-500/60 to-transparent" />

                                {/* Top-left label */}
                                <div className="absolute left-5 top-5 rounded-xl border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
                                    <div className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/60">
                                            Creator • Digital Media
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom caption */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                                    <div className="flex items-end justify-between gap-4">
                                       <a
                                href={
                                    siteConfig.social.instagram
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block rounded-2xl border border-white/10 px-0 py-0 shadow-[0_18px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:border-red-500/25"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-15 w-15 items-center justify-center rounded-xl bg-red-500/[0.08] text-red-400">
                                        <FaInstagram size={40} />
                                    </div>

                                   

                                   
                                </div>
                            </a>

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                                            <Play
                                                size={16}
                                                className="ml-0.5 fill-white text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* =================================================
                            FLOATING INSTAGRAM METRIC
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
                                amount: 0.2,
                            }}
                            transition={{
                                delay: 0.45,
                                duration: 0.65,
                            }}
                            animate={{
                                y: [0, -5, 0],
                            }}
                            className="absolute -bottom-5 -left-2 z-20 sm:-left-5"
                        >
                            
                        </motion.div>

                        {/* Small vertical marker */}
                        <div className="absolute -right-9 top-1/2 hidden h-28 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-red-500/30 to-transparent xl:block" />

                        <div className="absolute -right-[55px] top-1/2 hidden -translate-y-1/2 xl:block">
                            <p className="rotate-90 text-[9px] font-semibold uppercase tracking-[0.28em] text-white/20">
                                Built Through Content
                            </p>
                        </div>
                    </motion.div>

                    {/* =================================================
                        RIGHT — CONTENT
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Eyebrow */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 15,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.5,
                            }}
                            className="mb-6 flex items-center gap-3"
                        >
                            <span className="h-px w-10 bg-red-500" />

                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-red-500">
                                About Us
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <h2 className="max-w-[700px] text-4xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
                            More than{" "}
                            <span className="text-white/40">
                                promotion.
                            </span>
                            <br />

                            <span className="text-white">
                                We create
                            </span>{" "}
                            <span className="text-red-500">
                                attention.
                            </span>
                        </h2>

                        {/* Description */}
                        <div className="mt-8 max-w-[650px] space-y-4">
                            <p className="text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
                                AllIsWellMSVlogsz brings together
                                digital promotion, social media
                                visibility and video storytelling
                                to help businesses get noticed.
                            </p>

                            <p className="text-sm leading-7 text-white/38 sm:text-base">
                                From local shops and restaurants to
                                hotels, brands and events, we create
                                engaging content that gives businesses
                                a stronger presence across social
                                platforms.
                            </p>
                        </div>

                        {/* =================================================
                            HIGHLIGHTS
                        ================================================== */}

                        <div className="mt-9 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                            {highlights.map(
                                (item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{
                                            opacity: 0,
                                            x: 15,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.2,
                                        }}
                                        transition={{
                                            delay:
                                                index *
                                                0.06,
                                            duration:
                                                0.45,
                                        }}
                                        className="group flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-500/[0.07] text-red-500">
                                            <Check
                                                size={11}
                                                strokeWidth={3}
                                            />
                                        </span>

                                        <span className="text-sm leading-5 text-white/55 transition-colors duration-300 group-hover:text-white/80">
                                            {item}
                                        </span>
                                    </motion.div>
                                )
                            )}
                        </div>

                        {/* =================================================
                            DIVIDER + MINI INFO
                        ================================================== */}

                        <div className="mt-10 flex items-center gap-5">
                            <div className="h-px flex-1 bg-white/[0.08]" />

                            <div className="flex items-center gap-2 text-white/25">
                                <Camera size={14} />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.22em]">
                                    Content • Reach • Growth
                                </span>
                            </div>
                        </div>

                        {/* =================================================
                            CTA
                        ================================================== */}

                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_14px_40px_rgba(220,38,38,0.22)]"
                            >
                                Discover Our Story

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition-colors duration-300 group-hover:bg-white/10">
                                    <ArrowUpRight
                                        size={14}
                                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    />
                                </span>
                            </Link>

                            <a
                                href={
                                    siteConfig.social.instagram
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-white/45 transition-colors duration-300 hover:text-white"
                            >
                                <FaInstagram
                                    size={16}
                                />
                                Follow on Instagram
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* =========================================================
                BOTTOM SECTION MARKER
            ========================================================== */}

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
                className="mx-auto mt-20 h-px w-[min(1180px,85%)] origin-left bg-gradient-to-r from-transparent via-white/[0.08] to-transparent sm:mt-24"
            />
        </section>
    );
}