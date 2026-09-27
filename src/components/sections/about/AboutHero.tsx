"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    MapPin,
    Play,
    Sparkles,
} from "lucide-react";

export function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-[#f4f3ef] pt-[90px]">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[-10%] top-[-15%] h-[520px] w-[520px] rounded-full bg-brand-red/[0.055] blur-[110px]" />
                <div className="absolute bottom-[-10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-black/[0.035] blur-[100px]" />

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
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 pt-8 text-[10px] font-bold uppercase tracking-[0.22em] text-black/35"
                >
                    <Link
                        href="/"
                        className="transition-colors hover:text-brand-red"
                    >
                        Home
                    </Link>

                    <span>/</span>

                    <span className="text-brand-red">About Us</span>
                </motion.div>

                <div className="grid min-h-[700px] grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24">
                    {/* LEFT CONTENT */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-7 flex items-center gap-3"
                        >
                            <span className="h-px w-10 bg-brand-red" />

                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-red">
                                About AllIsWellMSVlogsz
                            </p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.08 }}
                            className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-[#111111] sm:text-6xl md:text-7xl xl:text-[78px]"
                        >
                            We create
                            <br />

                            <span className="relative inline-block text-brand-red">
                                attention
                                <span className="absolute -bottom-1 left-0 h-[5px] w-full bg-brand-red/20 md:-bottom-2" />
                            </span>

                            <br />

                            <span className="text-black/25">
                                that moves business.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.18 }}
                            className="mt-8 max-w-xl text-base leading-8 text-black/55 md:text-lg"
                        >
                            AllIsWellMSVlogsz combines creator-led content,
                            business promotion and digital storytelling to help
                            local businesses get noticed, remembered and
                            connected with their audience.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.28 }}
                            className="mt-9 flex flex-wrap items-center gap-4"
                        >
                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-3 rounded-xl bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-red hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)]"
                            >
                                Start a Conversation

                                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 group-hover:rotate-[-45deg]">
                                    <ArrowRight size={15} />
                                </span>
                            </Link>

                            <Link
                                href="/services"
                                className="group inline-flex items-center gap-3 rounded-xl border border-black/10 bg-white/70 px-7 py-4.5 text-sm font-semibold text-black transition-all duration-300 hover:border-brand-red/25 hover:bg-white hover:text-brand-red"
                            >
                                View Services

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </Link>
                        </motion.div>

                        {/* Micro information */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-black/10 pt-6"
                        >
                            <div className="flex items-center gap-2 text-xs font-medium text-black/45">
                                <Sparkles size={14} className="text-brand-red" />
                                Creator-led promotion
                            </div>

                            <div className="flex items-center gap-2 text-xs font-medium text-black/45">
                                <Play size={14} className="text-brand-red" />
                                Instagram + YouTube
                            </div>

                            <div className="flex items-center gap-2 text-xs font-medium text-black/45">
                                <MapPin size={14} className="text-brand-red" />
                                Chinnamanur, Theni
                            </div>
                        </motion.div>
                    </div>

                    {/* VIDEO AREA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 25 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mx-auto w-full max-w-[700px]"
                    >
                        {/* Decorative block */}
                        <div className="absolute -right-4 -top-4 h-28 w-28 rounded-2xl bg-brand-red sm:-right-6 sm:-top-6" />

                        {/* Main video card */}
                        <div className="relative z-10 overflow-hidden rounded-[30px] border border-black/10 bg-[#111111] p-2 shadow-[0_35px_90px_rgba(0,0,0,0.17)]">
                            {/* Video */}
                            <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] bg-black">
                              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] bg-white">
    <DotLottieReact
        src="/animations/about-team.lottie"
        autoplay
        loop
        className="h-full w-full"
    />
</div>

                                {/* Cinematic overlay */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />

                                {/* Top metadata */}
                                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                                    <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 backdrop-blur-md">
                                        <div className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 rounded-full bg-brand-red shadow-[0_0_12px_rgba(220,38,38,0.8)]" />

                                            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/75">
                                                Brand Film
                                            </span>
                                        </div>
                                    </div>

                                    <div className="rounded-full border border-white/10 bg-black/25 px-3 py-2 text-[9px] font-bold tracking-[0.16em] text-white/55 backdrop-blur-md">
                                        01 / 01
                                    </div>
                                </div>

                                {/* Center play indicator */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    
                                </div>

                                {/* Bottom copy */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                                    <div className="max-w-md">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-red">
                                            Creator × Business
                                        </p>

                                        <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-0.025em] text-white md:text-3xl">
                                            Content built to make
                                            <br />
                                            businesses visible.
                                        </h2>
                                    </div>

                                    {/* Progress */}
                                    <div className="mt-6">
                                        <div className="h-[2px] w-full bg-white/15">
                                            <motion.div
                                                initial={{ width: "0%" }}
                                                animate={{ width: "72%" }}
                                                transition={{
                                                    duration: 2.2,
                                                    ease: "easeOut",
                                                }}
                                                className="h-full bg-brand-red"
                                            />
                                        </div>

                                        <div className="mt-2 flex justify-between text-[8px] font-medium uppercase tracking-[0.15em] text-white/35">
                                            <span>AllIsWellMSVlogsz</span>
                                            <span>Digital Stories</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating info card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute -bottom-7 -left-4 z-20 rounded-2xl border border-black/10 bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)] sm:-left-8"
                        >
                            <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-black/35">
                                Our Focus
                            </p>

                            <p className="mt-1 text-sm font-bold text-black">
                                Local Business Growth
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}