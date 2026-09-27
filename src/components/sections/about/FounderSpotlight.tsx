"use client";

import {
    motion,
    useMotionValueEvent,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    Mail,
    MapPin,
    Megaphone,
    Phone,
    Search,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import { useRef, useState } from "react";

const processSteps = [
    {
        number: "01",
        eyebrow: "UNDERSTAND",
        title: "We start with your business.",
        description:
            "Before creating content, we understand your business, audience, location and what makes your brand worth talking about.",
        icon: Search,
        tags: ["Business", "Audience", "Goals"],
    },
    {
        number: "02",
        eyebrow: "CREATE",
        title: "We turn the idea into content.",
        description:
            "We shape the right story, creative format and presentation so your business can be introduced in a natural, engaging and memorable way.",
        icon: Sparkles,
        tags: ["Storytelling", "Creative", "Video"],
    },
    {
        number: "03",
        eyebrow: "PROMOTE",
        title: "We put your brand in front of people.",
        description:
            "Creator-led promotion across social platforms helps your business reach people through content that feels more relatable than a traditional advertisement.",
        icon: Megaphone,
        tags: ["Instagram", "YouTube", "Promotion"],
    },
    {
        number: "04",
        eyebrow: "GROW",
        title: "We build momentum beyond one post.",
        description:
            "The goal is not simply one piece of content. We help businesses build stronger visibility and a more consistent digital presence over time.",
        icon: TrendingUp,
        tags: ["Visibility", "Trust", "Growth"],
    },
];

const contactItems = [
    {
        icon: Phone,
        label: "Primary",
        value: "6385295287",
        href: "tel:+916385295287",
    },
    {
        icon: Phone,
        label: "Alternate",
        value: "9042990328",
        href: "tel:+919042990328",
    },
    {
        icon: Mail,
        label: "Email",
        value: "nagadhinesh28022006@gmail.com",
        href: "mailto:nagadhinesh28022006@gmail.com",
    },
];

/* ============================================================
   INDIVIDUAL PHASE CARD
   ============================================================ */

type PhaseCardProps = {
    step: (typeof processSteps)[number];
    index: number;
    progress: ReturnType<typeof useSpring>;
};

function PhaseCard({ step, index, progress }: PhaseCardProps) {
    const total = processSteps.length;

    /*
     * Every card owns one part of the scroll timeline.
     *
     * Example:
     * Phase 01 -> first 25%
     * Phase 02 -> next 25%
     * Phase 03 -> next 25%
     * Phase 04 -> final 25%
     */

    const sectionStart = index / total;
    const sectionEnd = (index + 1) / total;

    const entryStart = Math.max(0, sectionStart - 0.08);
    const entryPeak = Math.min(1, sectionStart + 0.07);

    const exitStart = Math.max(0, sectionEnd - 0.10);
    const exitEnd = Math.min(1, sectionEnd + 0.07);

    const isLast = index === total - 1;

    const opacity = useTransform(
        progress,
        isLast
            ? [entryStart, entryPeak]
            : [entryStart, entryPeak, exitStart, exitEnd],
        isLast ? [0, 1] : [0, 1, 1, 0],
    );

    const scale = useTransform(
        progress,
        isLast
            ? [entryStart, entryPeak]
            : [entryStart, entryPeak, exitStart, exitEnd],
        isLast ? [0.94, 1] : [0.94, 1, 1, 0.94],
    );

    const y = useTransform(
        progress,
        isLast
            ? [entryStart, entryPeak]
            : [entryStart, entryPeak, exitStart, exitEnd],
        isLast ? [45, 0] : [45, 0, -20, -45],
    );

    const rotate = useTransform(
        progress,
        isLast
            ? [entryStart, entryPeak]
            : [entryStart, entryPeak, exitStart, exitEnd],
        isLast ? [1.5, 0] : [1.5, 0, -0.5, -1.5],
    );

    return (
        <motion.article
            style={{
                opacity,
                scale,
                y,
                rotate,
            }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <div className="group relative w-full max-w-4xl overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
                {/* Soft red glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-red/[0.06] blur-[80px] transition-all duration-700 group-hover:bg-brand-red/[0.10]" />

                {/* Decorative circle */}
                <div className="pointer-events-none absolute right-[-45px] top-[-45px] h-36 w-36 rounded-full border border-brand-red/10" />

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[0.22fr_0.78fr]">
                    {/* NUMBER PANEL */}
                    <div className="relative flex min-h-[170px] items-center overflow-hidden border-b border-black/[0.07] bg-[#f4f1eb] p-6 md:min-h-[390px] md:border-b-0 md:border-r">
                        <div className="absolute -left-16 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-brand-red/[0.05] blur-3xl" />

                        <div className="relative z-10">
                            <p className="text-[9px] font-black uppercase tracking-[0.22em] text-black/30">
                                Phase
                            </p>

                            <p className="mt-2 text-[82px] font-black leading-none tracking-[-0.08em] text-brand-red md:text-[105px]">
                                {step.number}
                            </p>

                            <div className="mt-4 hidden h-px w-10 bg-brand-red md:block" />

                            <p className="mt-3 hidden max-w-[120px] text-[10px] font-semibold uppercase leading-5 tracking-[0.13em] text-black/30 md:block">
                                AllIsWell
                                <br />
                                Approach
                            </p>
                        </div>
                    </div>

                    {/* CONTENT PANEL */}
                    <div className="p-7 md:p-10 lg:p-12">
                        {/* Top row */}
                        <div className="flex items-start justify-between gap-5">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/[0.08] text-brand-red transition-all duration-500 group-hover:bg-brand-red group-hover:text-white">
                                <step.icon size={21} />
                            </div>

                            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/20">
                                0{index + 1} / 04
                            </span>
                        </div>

                        {/* Eyebrow */}
                        <p className="mt-8 text-[9px] font-black uppercase tracking-[0.24em] text-brand-red">
                            {step.eyebrow}
                        </p>

                        {/* Title */}
                        <h3 className="mt-3 max-w-2xl text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#111111] md:text-4xl lg:text-[46px]">
                            {step.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-5 max-w-2xl text-sm leading-7 text-black/50 md:text-[15px] md:leading-8">
                            {step.description}
                        </p>

                        {/* Tags */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {step.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-black/[0.08] bg-[#f7f6f2] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.12em] text-black/40 transition-colors duration-300 group-hover:border-brand-red/15 group-hover:text-black/55"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Bottom metadata */}
                        <div className="mt-8 flex items-center gap-3 border-t border-black/[0.07] pt-5">
                            <span className="h-px w-10 bg-brand-red transition-all duration-500 group-hover:w-16" />

                            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/25">
                                Creator-led digital promotion
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

/* ============================================================
   MAIN SECTION
   ============================================================ */

export function FounderSpotlight() {
    const phasesRef = useRef<HTMLDivElement | null>(null);

    const [activeIndex, setActiveIndex] = useState(0);

    /*
     * Scroll progress belongs ONLY to the phases area.
     * That gives us a clean 0 -> 1 timeline for the four cards.
     */
    const { scrollYProgress } = useScroll({
        target: phasesRef,
        offset: ["start start", "end end"],
    });

    /*
     * Spring makes the scroll-linked motion smoother.
     */
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 25,
        mass: 0.3,
    });

    /*
     * Update active phase without re-rendering on every tiny
     * scroll movement.
     */
    useMotionValueEvent(smoothProgress, "change", (latest) => {
        const nextIndex = Math.min(
            processSteps.length - 1,
            Math.floor(latest * processSteps.length),
        );

        setActiveIndex((current) =>
            current === nextIndex ? current : nextIndex,
        );
    });

    const progressWidth = useTransform(
        smoothProgress,
        [0, 1],
        ["0%", "100%"],
    );

    return (
        <section className="relative bg-[#f4f1eb] py-24 md:py-32 lg:py-40">
            {/* ====================================================== */}
            {/* BACKGROUND */}
            {/* ====================================================== */}

            <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-brand-red/[0.055] blur-[120px]" />

                <div className="absolute bottom-[-10%] left-[-8%] h-[420px] w-[420px] rounded-full bg-black/[0.025] blur-[110px]" />

                <div
                    className="absolute inset-0 opacity-[0.035]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* ================================================== */}
                {/* INTRO */}
                {/* ================================================== */}

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex items-start gap-3"
                    >
                        <span className="mt-2 h-px w-10 shrink-0 bg-brand-red" />

                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-brand-red">
                                How We Work
                            </p>

                            <p className="mt-3 max-w-[190px] text-xs leading-6 text-black/35">
                                A simple process built around your business,
                                your audience and your goals.
                            </p>
                        </div>
                    </motion.div>

                    <div>
                        <motion.h2
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
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.85,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="max-w-5xl text-5xl font-black leading-[0.94] tracking-[-0.055em] text-[#111111] sm:text-6xl md:text-7xl lg:text-[78px]"
                        >
                            We don't just
                            <span className="text-brand-red"> post.</span>
                            <br />
                            We build
                            <span className="text-black/25"> presence.</span>
                        </motion.h2>

                        <motion.p
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
                                amount: 0.25,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.12,
                            }}
                            className="mt-7 max-w-2xl text-base leading-8 text-black/50 md:text-lg"
                        >
                            From understanding the business to creating,
                            promoting and building momentum, every stage is
                            designed to turn attention into meaningful digital
                            visibility.
                        </motion.p>
                    </div>
                </div>

                {/* ================================================== */}
                {/* PHASE SCROLL EXPERIENCE */}
                {/* ================================================== */}

                <div
                    ref={phasesRef}
                    className="relative mt-20 min-h-[320vh] md:mt-28 lg:min-h-[360vh]"
                >
                    <div className="sticky top-[76px] flex min-h-[calc(100vh-76px)] items-center py-10 lg:top-[88px] lg:min-h-[calc(100vh-88px)]">
                        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[0.42fr_1.58fr] lg:items-center lg:gap-16">
                            {/* ================================================= */}
                            {/* LEFT NAV */}
                            {/* ================================================= */}

                            <div className="hidden lg:block">
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -20,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                    }}
                                >
                                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-black/30">
                                        Phases
                                    </p>

                                    <h3 className="mt-3 max-w-xs text-3xl font-black leading-tight tracking-[-0.04em] text-[#111111]">
                                        How we turn
                                        <br />
                                        <span className="text-black/25">
                                            ideas into impact.
                                        </span>
                                    </h3>

                                    {/* Phase navigation */}
                                    <div className="relative mt-10">
                                        {/* Vertical base */}
                                        <div className="absolute left-[8px] top-2 h-[calc(100%-16px)] w-px bg-black/10" />

                                        <motion.div
                                            style={{
                                                height: useTransform(
                                                    smoothProgress,
                                                    [0, 1],
                                                    ["0%", "100%"],
                                                ),
                                            }}
                                            className="absolute left-[8px] top-2 w-px origin-top bg-brand-red"
                                        />

                                        <div className="space-y-6">
                                            {processSteps.map(
                                                (step, index) => {
                                                    const isActive =
                                                        activeIndex === index;

                                                    return (
                                                        <div
                                                            key={step.number}
                                                            className="relative flex items-center gap-5"
                                                        >
                                                            <motion.div
                                                                animate={{
                                                                    scale: isActive
                                                                        ? 1.35
                                                                        : 1,
                                                                    backgroundColor:
                                                                        isActive
                                                                            ? "#DC2626"
                                                                            : "#F4F1EB",
                                                                    borderColor:
                                                                        isActive
                                                                            ? "#DC2626"
                                                                            : "rgba(0,0,0,0.15)",
                                                                }}
                                                                transition={{
                                                                    duration: 0.35,
                                                                }}
                                                                className="relative z-10 h-4 w-4 rounded-full border-2"
                                                            />

                                                            <motion.div
                                                                animate={{
                                                                    x: isActive
                                                                        ? 4
                                                                        : 0,
                                                                    opacity:
                                                                        isActive
                                                                            ? 1
                                                                            : 0.42,
                                                                }}
                                                                transition={{
                                                                    duration: 0.35,
                                                                }}
                                                            >
                                                                <p
                                                                    className={`text-[9px] font-black uppercase tracking-[0.18em] ${
                                                                        isActive
                                                                            ? "text-brand-red"
                                                                            : "text-black/30"
                                                                    }`}
                                                                >
                                                                    {
                                                                        step.number
                                                                    }
                                                                </p>

                                                                <p className="mt-1 text-sm font-bold text-black/65">
                                                                    {
                                                                        step.eyebrow
                                                                    }
                                                                </p>
                                                            </motion.div>
                                                        </div>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>

                                    {/* Progress bar */}
                                    <div className="mt-12 max-w-[240px]">
                                        <div className="mb-2 flex items-center justify-between">
                                            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-black/25">
                                                Scroll Progress
                                            </span>

                                            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-brand-red">
                                                {String(activeIndex + 1).padStart(
                                                    2,
                                                    "0",
                                                )}
                                                /04
                                            </span>
                                        </div>

                                        <div className="relative h-[3px] overflow-hidden rounded-full bg-black/10">
                                            <motion.div
                                                style={{
                                                    width: progressWidth,
                                                }}
                                                className="h-full rounded-full bg-brand-red"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* ================================================= */}
                            {/* MOBILE PHASE HEADER */}
                            {/* ================================================= */}

                            <div className="lg:hidden">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.22em] text-black/30">
                                            Phases
                                        </p>

                                        <h3 className="mt-2 text-2xl font-black tracking-[-0.035em] text-[#111111]">
                                            How we work
                                        </h3>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-black/30">
                                            Current
                                        </p>

                                        <p className="mt-1 text-xl font-black text-brand-red">
                                            {String(activeIndex + 1).padStart(
                                                2,
                                                "0",
                                            )}
                                            <span className="text-black/20">
                                                /04
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 relative h-[3px] overflow-hidden rounded-full bg-black/10">
                                    <motion.div
                                        style={{
                                            width: progressWidth,
                                        }}
                                        className="h-full rounded-full bg-brand-red"
                                    />
                                </div>
                            </div>

                            {/* ================================================= */}
                            {/* PHASE CARDS */}
                            {/* ================================================= */}

                            <div className="relative h-[430px] sm:h-[460px] md:h-[500px]">
                                {processSteps.map((step, index) => (
                                    <PhaseCard
                                        key={step.number}
                                        step={step}
                                        index={index}
                                        progress={smoothProgress}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================================================== */}
                {/* CLOSING CTA */}
                {/* ================================================== */}

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
                        amount: 0.25,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="overflow-hidden rounded-[30px] bg-[#111111]"
                >
                    <div className="relative p-7 md:p-10 lg:p-12">
                        <div className="pointer-events-none absolute right-[-10%] top-[-80%] h-[500px] w-[500px] rounded-full bg-brand-red/20 blur-[120px]" />

                        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
                            <div>
                                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-brand-red">
                                    Ready to get started?
                                </p>

                                <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-5xl">
                                    Let's make your business
                                    <span className="text-white/25">
                                        {" "}
                                        impossible to overlook.
                                    </span>
                                </h3>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/40">
                                    Tell us about your business and what you
                                    want to promote. Let's start with a
                                    conversation.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group inline-flex w-fit items-center gap-3 rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                            >
                                Start a Project

                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-[-45deg] group-hover:bg-black/10">
                                    <ArrowRight size={15} />
                                </span>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* ================================================== */}
                {/* CONTACT */}
                {/* ================================================== */}

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
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3"
                >
                    {/* Address */}
                    <div className="rounded-2xl border border-black/10 bg-white p-5 md:p-6">
                        <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/[0.08]">
                                <MapPin
                                    size={17}
                                    className="text-brand-red"
                                />
                            </div>

                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                                    Studio / Office
                                </p>

                                <p className="mt-2 text-sm leading-6 text-black/55">
                                    132 Sivaramu Complex,
                                    <br />
                                    North Street, Chinnamanur,
                                    <br />
                                    Theni.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Phone 1 */}
                    <a
                        href={contactItems[0].href}
                        className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:p-6"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/[0.08]">
                                <Phone
                                    size={17}
                                    className="text-brand-red"
                                />
                            </div>

                            <ArrowUpRight
                                size={16}
                                className="text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-red"
                            />
                        </div>

                        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                            Primary
                        </p>

                        <p className="mt-1 text-sm font-bold text-black/65 transition-colors group-hover:text-brand-red">
                            6385295287
                        </p>
                    </a>

                    {/* Phone 2 */}
                    <a
                        href={contactItems[1].href}
                        className="group rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/20 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)] md:p-6"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-red/[0.08]">
                                <Phone
                                    size={17}
                                    className="text-brand-red"
                                />
                            </div>

                            <ArrowUpRight
                                size={16}
                                className="text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-red"
                            />
                        </div>

                        <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                            Alternate
                        </p>

                        <p className="mt-1 text-sm font-bold text-black/65 transition-colors group-hover:text-brand-red">
                            9042990328
                        </p>
                    </a>
                </motion.div>

                {/* EMAIL */}
                <motion.a
                    href={contactItems[2].href}
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
                        duration: 0.6,
                    }}
                    className="group mt-3 flex flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 transition-all duration-300 hover:border-brand-red/20 sm:flex-row sm:items-center sm:justify-between md:p-6"
                >
                    <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/[0.08]">
                            <Mail
                                size={17}
                                className="text-brand-red"
                            />
                        </div>

                        <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
                                Email
                            </p>

                            <p className="mt-1 text-sm font-semibold text-black/60">
                                nagadhinesh28022006@gmail.com
                            </p>
                        </div>
                    </div>

                </motion.a>
            </div>
        </section>
    );
}