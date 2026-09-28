"use client";

import {
    ArrowUpRight,
    Clapperboard,
    ClipboardList,
    Lightbulb,
    TrendingUp,
} from "lucide-react";
import {
    motion,
    type Variants,
} from "framer-motion";

const steps = [
    {
        number: "01",
        code: "PROCESS.01",
        title: "Understand the Business",
        description:
            "We start with a conversation — learning about your business, your goals, and what you want people to know about you.",
        icon: Lightbulb,
    },
    {
        number: "02",
        code: "PROCESS.02",
        title: "Plan the Promotion",
        description:
            "We plan the right type of content, platform, and timing to ensure your promotion reaches the right audience effectively.",
        icon: ClipboardList,
    },
    {
        number: "03",
        code: "PROCESS.03",
        title: "Create & Publish",
        description:
            "Our team creates engaging, professional content — then publishes it across Instagram, YouTube, and social platforms.",
        icon: Clapperboard,
    },
    {
        number: "04",
        code: "PROCESS.04",
        title: "Track & Grow",
        description:
            "We share post-publication insights and remain available for follow-up questions, ensuring your promotion delivers results.",
        icon: TrendingUp,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
    },
};

export function HowWeWork() {
    return (
        <section
            className="
                relative
                overflow-hidden
                border-y
                border-white/[0.07]
                bg-[#080808]
                text-white

                py-16
                sm:py-20
                lg:min-h-[80svh]
                lg:flex
                lg:items-center
                lg:py-20
            "
        >
            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                <div
                    className="
                        absolute
                        right-[-180px]
                        top-[-220px]
                        h-[400px]
                        w-[400px]
                        rounded-full
                        bg-[#E3262E]/[0.035]
                        blur-[130px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-180px]
                        left-[-160px]
                        h-[360px]
                        w-[360px]
                        rounded-full
                        bg-white/[0.018]
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute
                        inset-0
                        opacity-[0.018]
                    "
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            {/* =====================================================
                MAIN CONTAINER
            ====================================================== */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-6xl
                    px-5
                    sm:px-8
                    lg:px-10
                "
            >
                {/* =================================================
                    HEADER
                ================================================== */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    className="
                        grid
                        grid-cols-1
                        gap-7
                        lg:grid-cols-[0.38fr_1fr]
                        lg:gap-16
                    "
                >
                    {/* Small label */}

                    <motion.div
                        variants={itemVariants}
                        className="
                            flex
                            items-start
                            gap-3
                        "
                    >
                        <span
                            className="
                                mt-[6px]
                                h-px
                                w-7
                                shrink-0
                                bg-[#E3262E]
                            "
                        />

                        <div>
                            <p
                                className="
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#E3262E]
                                "
                            >
                                Our Process
                            </p>

                            <p
                                className="
                                    mt-3
                                    max-w-[210px]
                                    text-[11px]
                                    leading-5
                                    text-white/32
                                "
                            >
                                A simple system from first
                                conversation to final delivery.
                            </p>
                        </div>
                    </motion.div>

                    {/* Heading */}

                    <div>
                        <motion.p
                            variants={itemVariants}
                            className="
                                mb-3
                                text-[8px]
                                font-semibold
                                uppercase
                                tracking-[0.24em]
                                text-white/20
                            "
                        >
                            HOW IT WORKS
                        </motion.p>

                        <motion.h2
                            variants={itemVariants}
                            className="
                                max-w-3xl
                                text-4xl
                                font-semibold
                                leading-[0.92]
                                tracking-[-0.055em]
                                text-white
                                sm:text-5xl
                                lg:text-[clamp(3.5rem,5.5vw,5.5rem)]
                            "
                        >
                            From idea
                            <span className="text-white/25">
                                {" "}
                                to impact.
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="
                                mt-5
                                max-w-xl
                                text-xs
                                leading-6
                                text-white/38
                                sm:text-sm
                            "
                        >
                            Every project follows a clear,
                            practical process — keeping
                            communication simple and execution
                            focused.
                        </motion.p>
                    </div>
                </motion.div>

                {/* =================================================
                    PROCESS TIMELINE
                ================================================== */}

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.08,
                    }}
                    className="
                        relative
                        mt-10
                        border-t
                        border-white/[0.09]
                        lg:mt-12
                    "
                >
                    {/* Desktop centre line */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-0
                            bottom-0
                            hidden
                            w-px
                            -translate-x-1/2
                            bg-white/[0.06]
                            lg:block
                        "
                    />

                    <div
                        className="
                            grid
                            grid-cols-1
                            lg:grid-cols-2
                        "
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.article
                                    key={step.number}
                                    variants={itemVariants}
                                    className={`
                                        group
                                        relative
                                        px-0
                                        py-6
                                        sm:py-7
                                        lg:px-8
                                        lg:py-8

                                        ${
                                            index % 2 === 0
                                                ? "lg:border-r lg:border-white/[0.07]"
                                                : ""
                                        }

                                        ${
                                            index < 2
                                                ? "border-b border-white/[0.07] lg:border-b lg:border-white/[0.07]"
                                                : ""
                                        }
                                    `}
                                >
                                    {/* Mobile timeline line */}

                                    {index !== steps.length - 1 && (
                                        <div
                                            aria-hidden="true"
                                            className="
                                                pointer-events-none
                                                absolute
                                                bottom-0
                                                left-[18px]
                                                top-[58px]
                                                w-px
                                                bg-white/[0.07]
                                                lg:hidden
                                            "
                                        />
                                    )}

                                    <div
                                        className="
                                            relative
                                            z-10
                                            flex
                                            items-start
                                            gap-4
                                            sm:gap-5
                                        "
                                    >
                                        {/* Number / Icon */}

                                        <div
                                            className="
                                                relative
                                                z-20
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/[0.11]
                                                bg-[#080808]
                                                text-white/45
                                                transition-all
                                                duration-400
                                                group-hover:border-[#E3262E]/40
                                                group-hover:bg-[#E3262E]/[0.08]
                                                group-hover:text-[#E3262E]
                                                sm:h-10
                                                sm:w-10
                                            "
                                        >
                                            <Icon
                                                size={15}
                                                strokeWidth={1.7}
                                            />
                                        </div>

                                        {/* Main content */}

                                        <div className="min-w-0 flex-1">
                                            {/* Top line */}

                                            <div
                                                className="
                                                    flex
                                                    flex-wrap
                                                    items-center
                                                    gap-x-3
                                                    gap-y-1
                                                "
                                            >
                                                <span
                                                    className="
                                                        text-[8px]
                                                        font-bold
                                                        uppercase
                                                        tracking-[0.20em]
                                                        text-[#E3262E]
                                                    "
                                                >
                                                    {step.code}
                                                </span>

                                                <span
                                                    className="
                                                        hidden
                                                        h-px
                                                        w-4
                                                        bg-white/10
                                                        sm:block
                                                    "
                                                />

                                                <span
                                                    className="
                                                        text-[8px]
                                                        uppercase
                                                        tracking-[0.18em]
                                                        text-white/18
                                                    "
                                                >
                                                    STEP {step.number}
                                                </span>
                                            </div>

                                            {/* Title */}

                                            <h3
                                                className="
                                                    mt-2.5
                                                    text-base
                                                    font-semibold
                                                    leading-tight
                                                    tracking-[-0.025em]
                                                    text-white
                                                    sm:text-lg
                                                    lg:text-xl
                                                "
                                            >
                                                {step.title}
                                            </h3>

                                            {/* Description */}

                                            <p
                                                className="
                                                    mt-2
                                                    max-w-xl
                                                    text-[11px]
                                                    leading-5
                                                    text-white/35
                                                    sm:text-xs
                                                    sm:leading-6
                                                "
                                            >
                                                {step.description}
                                            </p>

                                            {/* Bottom row */}

                                            <div
                                                className="
                                                    mt-4
                                                    flex
                                                    items-center
                                                    justify-between
                                                "
                                            >
                                                <span
                                                    className="
                                                        text-[8px]
                                                        uppercase
                                                        tracking-[0.18em]
                                                        text-white/15
                                                        transition-colors
                                                        duration-300
                                                        group-hover:text-white/25
                                                    "
                                                >
                                                    ALLISWELL
                                                </span>

                                                <div
                                                    className="
                                                        flex
                                                        h-7
                                                        w-7
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        border
                                                        border-white/[0.08]
                                                        text-white/18
                                                        transition-all
                                                        duration-300
                                                        group-hover:border-[#E3262E]/35
                                                        group-hover:bg-[#E3262E]
                                                        group-hover:text-white
                                                    "
                                                >
                                                    <ArrowUpRight
                                                        size={11}
                                                        strokeWidth={1.8}
                                                        className="
                                                            transition-transform
                                                            duration-300
                                                            group-hover:-translate-y-0.5
                                                            group-hover:translate-x-0.5
                                                        "
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Desktop hover line */}

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            bottom-0
                                            left-0
                                            h-px
                                            w-full
                                            origin-left
                                            scale-x-0
                                            bg-[#E3262E]
                                            transition-transform
                                            duration-500
                                            ease-[cubic-bezier(0.22,1,0.36,1)]
                                            group-hover:scale-x-100
                                        "
                                    />
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.div>

                {/* =================================================
                    MINI FOOTER
                ================================================== */}

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
                        duration: 0.6,
                    }}
                    className="
                        mt-5
                        flex
                        flex-col
                        gap-2
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-white/15
                        "
                    >
                        Simple · Transparent · Focused
                    </p>

                    <p
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.18em]
                            text-white/15
                        "
                    >
                        04 Steps
                    </p>
                </motion.div>
            </div>
        </section>
    );
}