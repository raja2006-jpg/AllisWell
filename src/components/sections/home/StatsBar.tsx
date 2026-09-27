"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
    BadgeCheck,
    BriefcaseBusiness,
    Star,
    Users,
} from "lucide-react";

interface StatItem {
    icon: React.ElementType;
    target: number;
    suffix: string;
    label: string;
    sub: string;
}

const stats: StatItem[] = [
    {
        icon: BriefcaseBusiness,
        target: 50,
        suffix: "+",
        label: "Brand Promotions",
        sub: "Businesses promoted with engaging content",
    },
    {
        icon: Users,
        target: 500,
        suffix: "+",
        label: "Happy Customers",
        sub: "Customers who trusted our work",
    },
    {
        icon: Star,
        target: 300,
        suffix: "+",
        label: "Good Reviews",
        sub: "Positive feedback from our community",
    },
];

/* =========================================================
   COUNT UP ANIMATION
========================================================= */

function AnimatedCounter({
    target,
    suffix,
    start,
}: {
    target: number;
    suffix: string;
    start: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) {
            setCount(0);
            return;
        }

        let animationFrame = 0;
        const duration = 1800;
        const startTime = performance.now();

        const easeOutExpo = (t: number) => {
            return t === 1
                ? 1
                : 1 - Math.pow(2, -10 * t);
        };

        const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easedProgress = easeOutExpo(progress);

            const nextValue = Math.floor(
                easedProgress * target
            );

            setCount(nextValue);

            if (progress < 1) {
                animationFrame =
                    requestAnimationFrame(updateCounter);
            } else {
                setCount(target);
            }
        };

        animationFrame =
            requestAnimationFrame(updateCounter);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [start, target]);

    return (
        <span className="tabular-nums">
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
    stat,
    index,
}: {
    stat: StatItem;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const inView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                y: 35,
            }}
            animate={
                inView
                    ? {
                          opacity: 1,
                          y: 0,
                      }
                    : {}
            }
            transition={{
                duration: 0.7,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative"
        >
            {/* Card */}
            <div className="relative h-full overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a0a0a] px-6 py-8 shadow-[0_20px_70px_rgba(0,0,0,0.28)] transition-all duration-500 hover:-translate-y-1 hover:border-red-500/25 hover:shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:px-8 sm:py-9">
                
                {/* Top red line */}
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Soft glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-500/[0.05] blur-[70px] transition-all duration-500 group-hover:bg-red-500/[0.09]" />

                {/* Number / index */}
                <div className="relative mb-8 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/20">
                        0{index + 1}
                    </span>

                    <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-12 group-hover:bg-red-500/40" />

                        <stat.icon
                            size={16}
                            strokeWidth={1.7}
                            className="text-red-500/80"
                        />
                    </div>
                </div>

                {/* Big number */}
                <div className="relative">
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                        }}
                        animate={
                            inView
                                ? {
                                      opacity: 1,
                                      scale: 1,
                                  }
                                : {}
                        }
                        transition={{
                            duration: 0.55,
                            delay: index * 0.14 + 0.15,
                        }}
                        className="text-5xl font-black tracking-[-0.055em] text-white sm:text-6xl"
                    >
                        <AnimatedCounter
                            target={stat.target}
                            suffix={stat.suffix}
                            start={inView}
                        />
                    </motion.div>
                </div>

                {/* Label */}
                <h3 className="relative mt-3 text-sm font-semibold tracking-wide text-white/80 sm:text-base">
                    {stat.label}
                </h3>

                {/* Description */}
                <p className="relative mt-2 max-w-[280px] text-[11px] leading-5 text-white/35 sm:text-xs">
                    {stat.sub}
                </p>

                {/* Bottom divider */}
                <div className="relative mt-7 flex items-center justify-between">
                    <div className="h-px flex-1 bg-white/[0.07]" />

                    <div className="mx-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02]">
                        <BadgeCheck
                            size={13}
                            className="text-white/20 transition-colors duration-300 group-hover:text-red-500/70"
                        />
                    </div>

                    <div className="h-px flex-1 bg-white/[0.07]" />
                </div>
            </div>
        </motion.div>
    );
}

/* =========================================================
   STATS BAR
========================================================= */

export function StatsBar() {
    return (
        <section className="relative overflow-hidden border-y border-white/[0.06] bg-[#060606] py-20 sm:py-24 lg:py-28">
            
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.045),transparent_38%)]" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[650px] -translate-x-1/2 rounded-full bg-red-500/[0.025] blur-[140px]" />

            {/* Grid */}
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
                CONTENT
            ====================================================== */}

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-5">
                
                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 22,
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
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    {/* Eyebrow */}
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-8 bg-red-500/70" />

                        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-red-500">
                            Our Track Record
                        </span>

                        <span className="h-px w-8 bg-red-500/70" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl font-black tracking-[-0.045em] text-white sm:text-4xl md:text-5xl">
                        Numbers That{" "}
                        <span className="text-red-500">
                            Speak.
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40 sm:text-base sm:leading-7">
                        A growing community, stronger brand visibility,
                        and meaningful results built through content
                        and digital promotion.
                    </p>
                </motion.div>

                {/* =================================================
                    STAT GRID
                ================================================== */}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={stat.label}
                            stat={stat}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom note */}
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        delay: 0.55,
                        duration: 0.7,
                    }}
                    className="mt-10 flex items-center justify-center gap-2"
                >
                    <span className="h-1 w-1 rounded-full bg-red-500" />

                    <p className="text-[9px] font-medium uppercase tracking-[0.25em] text-white/20">
                        Building visibility • Creating connections • Growing brands
                    </p>

                    <span className="h-1 w-1 rounded-full bg-red-500" />
                </motion.div>
            </div>
        </section>
    );
}