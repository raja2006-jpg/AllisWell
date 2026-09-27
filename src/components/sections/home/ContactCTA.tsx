"use client";

import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
    Phone,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/lib/utils";

const services = [
    "Instagram Promotion",
    "Digital Marketing",
    "Business Promotion",
    "Political Marketing",
    "Personal Shoot",
    "Website Development",
];

const revealUp = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export function ContactCTA() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#080808]
                py-20
                sm:py-24
                lg:py-28
            "
        >
            {/* =====================================================
                SUBTLE BACKGROUND
            ====================================================== */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.02]
                "
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    top-[-180px]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-[#E3262E]/[0.035]
                    blur-[130px]
                "
            />

            {/* =====================================================
                CONTAINER
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
                    SECTION HEADER
                ================================================== */}

                <motion.div
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                >
                    <div
                        className="
                            flex
                            items-center
                            gap-3
                        "
                    >
                        <span
                            className="
                                h-px
                                w-7
                                bg-[#E3262E]
                            "
                        />

                        <span
                            className="
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.24em]
                                text-[#E3262E]
                            "
                        >
                            Contact Us.
                        </span>
                    </div>

                    <p
                        className="
                            mt-4
                            text-xs
                            leading-6
                            text-white/35
                        "
                    >
                        Initialize connection. Business
                        promotions, creative projects and
                        website inquiries.
                    </p>
                </motion.div>

                {/* =================================================
                    FORM
                ================================================== */}

                <motion.div
                    variants={revealUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.12,
                    }}
                    transition={{
                        delay: 0.08,
                    }}
                    className="
                        mt-10
                        overflow-hidden
                        border
                        border-white/[0.09]
                    "
                >
                    {/* =================================================
                        ROW 01 — THREE INPUTS
                    ================================================== */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            md:grid-cols-3
                        "
                    >
                        {/* FULL NAME */}

                        <div
                            className="
                                group
                                border-b
                                border-white/[0.08]
                                px-5
                                py-6
                                md:border-b-0
                                md:border-r
                                sm:px-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <span
                                    className="
                                        text-[8px]
                                        font-bold
                                        uppercase
                                        tracking-[0.20em]
                                        text-white/18
                                    "
                                >
                                    01
                                </span>

                                <span
                                    className="
                                        h-1
                                        w-1
                                        rounded-full
                                        bg-white/15
                                        transition-colors
                                        duration-300
                                        group-focus-within:bg-[#E3262E]
                                    "
                                />
                            </div>

                            <label
                                htmlFor="contact-name"
                                className="
                                    mt-5
                                    block
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.20em]
                                    text-white/30
                                "
                            >
                                Full Name
                            </label>

                            <input
                                id="contact-name"
                                name="name"
                                type="text"
                                placeholder="Your name"
                                autoComplete="name"
                                className="
                                    mt-3
                                    w-full
                                    border-0
                                    border-b
                                    border-white/[0.12]
                                    bg-transparent
                                    pb-2.5
                                    text-sm
                                    font-medium
                                    text-white
                                    outline-none
                                    placeholder:text-white/18
                                    transition-colors
                                    duration-300
                                    focus:border-[#E3262E]
                                "
                            />
                        </div>

                        {/* EMAIL */}

                        <div
                            className="
                                group
                                border-b
                                border-white/[0.08]
                                px-5
                                py-6
                                md:border-b-0
                                md:border-r
                                sm:px-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <span
                                    className="
                                        text-[8px]
                                        font-bold
                                        uppercase
                                        tracking-[0.20em]
                                        text-white/18
                                    "
                                >
                                    02
                                </span>

                                <span
                                    className="
                                        h-1
                                        w-1
                                        rounded-full
                                        bg-white/15
                                        transition-colors
                                        duration-300
                                        group-focus-within:bg-[#E3262E]
                                    "
                                />
                            </div>

                            <label
                                htmlFor="contact-email"
                                className="
                                    mt-5
                                    block
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.20em]
                                    text-white/30
                                "
                            >
                                Email Address
                            </label>

                            <input
                                id="contact-email"
                                name="email"
                                type="email"
                                placeholder="your@email.com"
                                autoComplete="email"
                                className="
                                    mt-3
                                    w-full
                                    border-0
                                    border-b
                                    border-white/[0.12]
                                    bg-transparent
                                    pb-2.5
                                    text-sm
                                    font-medium
                                    text-white
                                    outline-none
                                    placeholder:text-white/18
                                    transition-colors
                                    duration-300
                                    focus:border-[#E3262E]
                                "
                            />
                        </div>

                        {/* PHONE */}

                        <div
                            className="
                                group
                                px-5
                                py-6
                                sm:px-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    justify-between
                                "
                            >
                                <span
                                    className="
                                        text-[8px]
                                        font-bold
                                        uppercase
                                        tracking-[0.20em]
                                        text-white/18
                                    "
                                >
                                    03
                                </span>

                                <span
                                    className="
                                        h-1
                                        w-1
                                        rounded-full
                                        bg-white/15
                                        transition-colors
                                        duration-300
                                        group-focus-within:bg-[#E3262E]
                                    "
                                />
                            </div>

                            <label
                                htmlFor="contact-phone"
                                className="
                                    mt-5
                                    block
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.20em]
                                    text-white/30
                                "
                            >
                                Comm Channel
                            </label>

                            <input
                                id="contact-phone"
                                name="phone"
                                type="tel"
                                placeholder="10 digit number"
                                autoComplete="tel"
                                inputMode="numeric"
                                className="
                                    mt-3
                                    w-full
                                    border-0
                                    border-b
                                    border-white/[0.12]
                                    bg-transparent
                                    pb-2.5
                                    text-sm
                                    font-medium
                                    text-white
                                    outline-none
                                    placeholder:text-white/18
                                    transition-colors
                                    duration-300
                                    focus:border-[#E3262E]
                                "
                            />
                        </div>
                    </div>

                    {/* =================================================
                        ROW 02 — SERVICE + MESSAGE
                    ================================================== */}

                    <div
                        className="
                            grid
                            grid-cols-1
                            border-t
                            border-white/[0.08]
                            lg:grid-cols-[0.42fr_1fr]
                        "
                    >
                        {/* REQUEST SUBSYSTEM */}

                        <div
                            className="
                                group
                                border-b
                                border-white/[0.08]
                                px-5
                                py-7
                                lg:border-b-0
                                lg:border-r
                                sm:px-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                "
                            >
                                <div>
                                    <span
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.20em]
                                            text-white/18
                                        "
                                    >
                                        04
                                    </span>

                                    <p
                                        className="
                                            mt-5
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.20em]
                                            text-white/30
                                        "
                                    >
                                        Request Subsystem
                                    </p>
                                </div>

                                <ArrowUpRight
                                    size={14}
                                    strokeWidth={1.7}
                                    className="
                                        text-white/15
                                        transition-all
                                        duration-300
                                        group-hover:-translate-y-0.5
                                        group-hover:translate-x-0.5
                                        group-hover:text-[#E3262E]
                                    "
                                />
                            </div>

                            <div className="relative mt-5">
                                <select
                                    id="contact-service"
                                    name="service"
                                    defaultValue=""
                                    className="
                                        w-full
                                        appearance-none
                                        border-0
                                        border-b
                                        border-white/[0.12]
                                        bg-transparent
                                        pb-2.5
                                        pr-8
                                        text-sm
                                        text-white/45
                                        outline-none
                                        transition-colors
                                        duration-300
                                        focus:border-[#E3262E]
                                    "
                                >
                                    <option
                                        value=""
                                        disabled
                                        className="bg-[#111111] text-white"
                                    >
                                        Select a service
                                    </option>

                                    {services.map(
                                        (service) => (
                                            <option
                                                key={service}
                                                value={service}
                                                className="bg-[#111111] text-white"
                                            >
                                                {service}
                                            </option>
                                        )
                                    )}
                                </select>

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        right-1
                                        top-1/2
                                        -translate-y-1/2
                                        text-[10px]
                                        text-white/20
                                    "
                                >
                                    ↓
                                </div>
                            </div>
                        </div>

                        {/* PROJECT DEBRIEF */}

                        <div
                            className="
                                group
                                px-5
                                py-7
                                sm:px-7
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-start
                                    justify-between
                                "
                            >
                                <div>
                                    <span
                                        className="
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.20em]
                                            text-white/18
                                        "
                                    >
                                        05
                                    </span>

                                    <p
                                        className="
                                            mt-5
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.20em]
                                            text-white/30
                                        "
                                    >
                                        Project Debrief
                                    </p>
                                </div>

                                <span
                                    className="
                                        text-[8px]
                                        uppercase
                                        tracking-[0.18em]
                                        text-white/15
                                    "
                                >
                                    Optional
                                </span>
                            </div>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows={4}
                                placeholder="Tell us briefly about your project..."
                                className="
                                    mt-5
                                    min-h-[105px]
                                    w-full
                                    resize-none
                                    border-0
                                    border-b
                                    border-white/[0.12]
                                    bg-transparent
                                    pb-3
                                    text-sm
                                    leading-6
                                    text-white
                                    outline-none
                                    placeholder:text-white/18
                                    transition-colors
                                    duration-300
                                    focus:border-[#E3262E]
                                "
                            />
                        </div>
                    </div>

                    {/* =================================================
                        ACTION BAR
                    ================================================== */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            border-t
                            border-white/[0.08]
                            px-5
                            py-5
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                            sm:px-7
                        "
                    >
                        <div>
                            <p
                                className="
                                    text-[8px]
                                    font-bold
                                    uppercase
                                    tracking-[0.20em]
                                    text-white/18
                                "
                            >
                                AllIsWellMSVlogsz
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-[9px]
                                    text-white/25
                                "
                            >
                                Digital marketing & business promotion
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="
                                group
                                inline-flex
                                w-fit
                                items-center
                                gap-3
                                rounded-full
                                bg-[#E3262E]
                                px-5
                                py-2.5
                                text-[9px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-white
                                transition-all
                                duration-300
                                hover:bg-white
                                hover:text-black
                                focus-visible:outline-none
                                focus-visible:ring-2
                                focus-visible:ring-[#E3262E]/50
                            "
                        >
                            Initialize Launch

                            <ArrowUpRight
                                size={13}
                                strokeWidth={1.8}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                "
                            />
                        </Link>
                    </div>
                </motion.div>

                {/* =================================================
                    DIRECT CHANNELS
                    Very small — not card based
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
                        delay: 0.15,
                    }}
                    className="
                        mt-6
                        flex
                        flex-col
                        gap-3
                        border-b
                        border-white/[0.07]
                        pb-5
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <div
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-x-5
                            gap-y-2
                        "
                    >
                        <a
                            href={`tel:${siteConfig.contact.phone1}`}
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                text-[9px]
                                text-white/30
                                transition-colors
                                hover:text-white
                            "
                        >
                            <Phone
                                size={11}
                                className="
                                    text-white/20
                                    group-hover:text-[#E3262E]
                                "
                            />

                            {siteConfig.contact.phone1}
                        </a>

                        <a
                            href={`mailto:${siteConfig.contact.email}`}
                            className="
                                group
                                inline-flex
                                min-w-0
                                items-center
                                gap-2
                                text-[9px]
                                text-white/30
                                transition-colors
                                hover:text-white
                            "
                        >
                            <Mail
                                size={11}
                                className="
                                    shrink-0
                                    text-white/20
                                    group-hover:text-[#E3262E]
                                "
                            />

                            <span className="break-all">
                                {siteConfig.contact.email}
                            </span>
                        </a>

                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                text-[9px]
                                text-white/30
                                transition-colors
                                hover:text-white
                            "
                        >
                            <MessageCircle
                                size={11}
                                className="
                                    text-white/20
                                    group-hover:text-[#E3262E]
                                "
                            />

                            WhatsApp
                        </a>
                    </div>

                    <p
                        className="
                            text-[8px]
                            uppercase
                            tracking-[0.16em]
                            text-white/15
                        "
                    >
                        Chinnamanur · Theni
                    </p>
                </motion.div>
            </div>
        </section>
    );
}