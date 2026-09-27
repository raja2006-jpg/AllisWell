"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowUpRight,
    Compass,
    Layers3,
    Sparkles,
    Target,
    Users,
} from "lucide-react";
import { useState } from "react";

const missionItems = [
    {
        number: "01",
        icon: Target,
        title: "Our Mission",
        short: "Make businesses visible.",
        text: "Help local businesses become more visible, more trusted, and more memorable through authentic digital promotion, creative storytelling and consistent audience engagement.",
    },
    {
        number: "02",
        icon: Compass,
        title: "Our Vision",
        short: "Build lasting digital presence.",
        text: "Become a trusted creator-brand partner for businesses that want meaningful attention, stronger local visibility and a consistent presence across digital platforms.",
    },
    {
        number: "03",
        icon: Users,
        title: "Who We Serve",
        short: "Businesses with something to say.",
        text: "We work with shops, restaurants, hotels, showrooms, startups, events, creators, products and local brands looking to connect with their audience.",
    },
    {
        number: "04",
        icon: Sparkles,
        title: "What We Do",
        short: "Content + promotion + strategy.",
        text: "We combine creator content, business storytelling, social media promotion and video marketing into practical campaigns designed around the business and its audience.",
    },
];

export function AboutMission() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = missionItems[activeIndex];
    const ActiveIcon = activeItem.icon;

    return (
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-red/[0.035] blur-3xl" />

            <div className="section-container relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]"
                >
                    <div>
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-brand-red" />

                            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-red">
                                Our Purpose
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.035em] text-[#111111] md:text-5xl lg:text-6xl">
                            Built around
                            <br />
                            <span className="text-black/30">people, content & growth.</span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-black/55 md:text-lg">
                            The work starts with understanding the business and the
                            audience. From there, content and promotion become tools
                            for building visibility and stronger customer connection.
                        </p>
                    </div>
                </motion.div>

                {/* Main interactive block */}
                <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Selector */}
                    <div className="rounded-[28px] border border-black/10 bg-[#f4f3ef] p-3">
                        {missionItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = activeIndex === index;

                            return (
                                <motion.button
                                    key={item.title}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    whileTap={{ scale: 0.99 }}
                                    className={`group flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 ${
                                        isActive
                                            ? "bg-[#111111] text-white shadow-lg"
                                            : "text-black/60 hover:bg-white hover:text-black"
                                    }`}
                                >
                                    <div
                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                                            isActive
                                                ? "border-brand-red bg-brand-red text-white"
                                                : "border-black/10 bg-white text-brand-red group-hover:border-brand-red/20"
                                        }`}
                                    >
                                        <Icon size={19} />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-3">
                                            <p
                                                className={`text-sm font-bold ${
                                                    isActive ? "text-white" : "text-black"
                                                }`}
                                            >
                                                {item.title}
                                            </p>

                                            <span
                                                className={`text-[10px] font-bold tracking-[0.18em] ${
                                                    isActive
                                                        ? "text-white/35"
                                                        : "text-black/25"
                                                }`}
                                            >
                                                {item.number}
                                            </span>
                                        </div>

                                        <p
                                            className={`mt-1 text-xs ${
                                                isActive ? "text-white/55" : "text-black/45"
                                            }`}
                                        >
                                            {item.short}
                                        </p>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-[#111111] p-8 text-white md:p-12">
                        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-red/20 blur-3xl" />
                        <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/[0.025] blur-2xl" />

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeItem.title}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10 flex h-full flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red">
                                            <ActiveIcon size={25} />
                                        </div>

                                        <span className="text-5xl font-black tracking-[-0.05em] text-white/[0.08]">
                                            {activeItem.number}
                                        </span>
                                    </div>

                                    <p className="mt-10 text-xs font-bold uppercase tracking-[0.2em] text-brand-red">
                                        {activeItem.title}
                                    </p>

                                    <h3 className="mt-3 max-w-xl text-3xl font-black tracking-[-0.025em] md:text-4xl">
                                        {activeItem.short}
                                    </h3>

                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                                        {activeItem.text}
                                    </p>
                                </div>

                                <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                                    <Layers3 size={15} className="text-brand-red" />
                                    Creator-led digital promotion
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mt-12 flex flex-col items-start justify-between gap-5 rounded-[24px] border border-black/10 bg-[#f4f3ef] p-6 sm:flex-row sm:items-center md:p-7"
                >
                    <div>
                        <p className="text-sm font-bold text-black">
                            Ready to put your business in front of more people?
                        </p>

                        <p className="mt-1 text-xs leading-6 text-black/45">
                            Explore the services built around your business goals.
                        </p>
                    </div>

                    <Link
                        href="/services"
                        className="group inline-flex shrink-0 items-center gap-2 text-bold text-black rounded-xl bg-black/10 px-5 py-3 text-sm font-semibold text-black border border-black/20 transition-all duration-300 hover:bg-black hover:text-white"
                    >
                        Explore Services

                        <ArrowUpRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}