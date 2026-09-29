"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Check,
    Phone,
} from "lucide-react";

const WHATSAPP_NUMBER = "916385295287";

export default function QuickLeadForm() {
    const [name, setName] = useState("");
    const [businessName, setBusinessName] = useState("");
    const [phone, setPhone] = useState("");

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setError("");
        setSubmitted(false);

        const cleanName = name.trim();
        const cleanBusinessName = businessName.trim();
        const cleanPhone = phone.replace(/\D/g, "");

        if (!cleanName) {
            setError("Please enter your name.");
            return;
        }

        if (!cleanBusinessName) {
            setError("Please enter your business name.");
            return;
        }

        if (cleanPhone.length !== 10) {
            setError(
                "Please enter a valid 10-digit phone number.",
            );
            return;
        }

        const message = `Hi All Is Well MS Vlogs,

I'd like to enquire about your services.

Name: ${cleanName}
Business Name: ${cleanBusinessName}
Phone Number: ${cleanPhone}

Please let me know the suitable service and package for my business.`;

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message,
        )}`;

        setSubmitted(true);

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer",
        );
    };

    return (
        <section className="relative overflow-hidden bg-[#F4F1EA] py-20 sm:py-24 md:py-28 lg:py-32">
            {/* =====================================================
                BACKGROUND
            ====================================================== */}
            <div className="pointer-events-none absolute inset-0">
                {/* Red glow */}
                <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-brand-red/[0.055] blur-[120px]" />

                {/* Black glow */}
                <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-black/[0.025] blur-[110px]" />

                {/* Fine grid */}
                <div
                    className="absolute inset-0 opacity-[0.025]"
                    style={{
                        backgroundImage:
                            "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
                        backgroundSize: "72px 72px",
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
                {/* =====================================================
                    MAIN CARD
                ====================================================== */}
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
                    className="relative overflow-hidden rounded-[30px] border border-black/[0.08] bg-[#0B0B0B] shadow-[0_30px_90px_rgba(0,0,0,0.14)]"
                >
                    {/* =================================================
                        CARD BACKGROUND GLOW
                    ================================================== */}
                    <div className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-brand-red/[0.12] blur-[100px]" />

                    <div className="pointer-events-none absolute -bottom-32 left-[-8%] h-[320px] w-[320px] rounded-full bg-white/[0.035] blur-[100px]" />

                    {/* =================================================
                        TOP BORDER ACCENT
                    ================================================== */}
                    <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/70 to-transparent" />

                    <div className="relative z-10 grid grid-cols-1 gap-12 p-6 sm:p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:p-14 xl:p-16">
                        {/* =================================================
                            LEFT CONTENT
                        ================================================== */}
                        <div className="flex flex-col justify-between">
                            <div>
                                {/* Eyebrow */}
                                <div className="flex items-center gap-3">
                                    <span className="h-px w-9 bg-brand-red" />

                                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-brand-red">
                                        Start a Conversation
                                    </p>
                                </div>

                                {/* Heading */}
                                <motion.h2
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
                                        duration: 0.7,
                                        delay: 0.08,
                                    }}
                                    className="mt-6 max-w-xl text-4xl font-black leading-[0.96] tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl"
                                >
                                    Let&apos;s talk about
                                    <span className="text-white/25">
                                        {" "}
                                        your business.
                                    </span>
                                </motion.h2>

                                {/* Description */}
                                <p className="mt-6 max-w-lg text-sm leading-7 text-white/45 sm:text-[15px]">
                                    Tell us a little about your business
                                    and what you are looking to promote.
                                    We&apos;ll help you find the right service
                                    and package.
                                </p>
                            </div>

                            {/* Bottom info */}
                            <div className="mt-10 border-t border-white/[0.08] pt-6 lg:mt-14">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04]">
                                        <Phone
                                            size={15}
                                            className="text-brand-red"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                                            Prefer WhatsApp?
                                        </p>

                                        <p className="mt-1 text-xs font-medium text-white/65">
                                            We&apos;ll continue the conversation
                                            there.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =================================================
                            RIGHT FORM
                        ================================================== */}
                        <div className="relative">
                            <div className="rounded-[24px] border border-white/[0.09] bg-white/[0.045] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl sm:p-7">
                                {/* Form heading */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-brand-red">
                                            Quick Enquiry
                                        </p>

                                        <p className="mt-2 text-sm font-medium text-white/70">
                                            Takes less than a minute.
                                        </p>
                                    </div>

                                    <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/20">
                                        01
                                    </span>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="mt-7 space-y-4"
                                    noValidate
                                >
                                    {/* =====================================
                                        NAME
                                    ====================================== */}
                                    <div>
                                        <label
                                            htmlFor="lead-name"
                                            className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35"
                                        >
                                            Your Name
                                        </label>

                                        <input
                                            id="lead-name"
                                            type="text"
                                            value={name}
                                            onChange={(event) =>
                                                setName(
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="Enter your name"
                                            autoComplete="name"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/[0.10]
                                                bg-black/20
                                                px-4
                                                py-3.5
                                                text-sm
                                                text-white
                                                placeholder:text-white/20
                                                outline-none
                                                transition-all
                                                duration-300
                                                focus:border-brand-red/50
                                                focus:bg-black/30
                                                focus:ring-2
                                                focus:ring-brand-red/10
                                            "
                                        />
                                    </div>

                                    {/* =====================================
                                        BUSINESS NAME
                                    ====================================== */}
                                    <div>
                                        <label
                                            htmlFor="lead-business"
                                            className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35"
                                        >
                                            Business Name
                                        </label>

                                        <input
                                            id="lead-business"
                                            type="text"
                                            value={businessName}
                                            onChange={(event) =>
                                                setBusinessName(
                                                    event.target.value,
                                                )
                                            }
                                            placeholder="Your business name"
                                            autoComplete="organization"
                                            className="
                                                w-full
                                                rounded-xl
                                                border
                                                border-white/[0.10]
                                                bg-black/20
                                                px-4
                                                py-3.5
                                                text-sm
                                                text-white
                                                placeholder:text-white/20
                                                outline-none
                                                transition-all
                                                duration-300
                                                focus:border-brand-red/50
                                                focus:bg-black/30
                                                focus:ring-2
                                                focus:ring-brand-red/10
                                            "
                                        />
                                    </div>

                                    {/* =====================================
                                        PHONE
                                    ====================================== */}
                                    <div>
                                        <label
                                            htmlFor="lead-phone"
                                            className="mb-2 block text-[9px] font-semibold uppercase tracking-[0.16em] text-white/35"
                                        >
                                            Phone Number
                                        </label>

                                        <div className="flex">
                                            <span className="
                                                flex
                                                items-center
                                                rounded-l-xl
                                                border
                                                border-r-0
                                                border-white/[0.10]
                                                bg-white/[0.035]
                                                px-3
                                                text-xs
                                                font-semibold
                                                text-white/35
                                            ">
                                                +91
                                            </span>

                                            <input
                                                id="lead-phone"
                                                type="tel"
                                                inputMode="numeric"
                                                value={phone}
                                                onChange={(event) => {
                                                    const value =
                                                        event.target.value
                                                            .replace(
                                                                /\D/g,
                                                                "",
                                                            )
                                                            .slice(
                                                                0,
                                                                10,
                                                            );

                                                    setPhone(value);
                                                }}
                                                placeholder="10-digit mobile number"
                                                autoComplete="tel"
                                                maxLength={10}
                                                className="
                                                    w-full
                                                    rounded-r-xl
                                                    border
                                                    border-white/[0.10]
                                                    bg-black/20
                                                    px-4
                                                    py-3.5
                                                    text-sm
                                                    text-white
                                                    placeholder:text-white/20
                                                    outline-none
                                                    transition-all
                                                    duration-300
                                                    focus:border-brand-red/50
                                                    focus:bg-black/30
                                                    focus:ring-2
                                                    focus:ring-brand-red/10
                                                "
                                            />
                                        </div>
                                    </div>

                                    {/* Error */}
                                    {error && (
                                        <motion.p
                                            initial={{
                                                opacity: 0,
                                                y: -5,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="text-[10px] font-medium text-red-400"
                                        >
                                            {error}
                                        </motion.p>
                                    )}

                                    {/* Success */}
                                    {submitted && !error && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: -5,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            className="flex items-center gap-2 rounded-xl border border-green-400/10 bg-green-400/[0.05] px-3 py-2.5"
                                        >
                                            <Check
                                                size={13}
                                                className="text-green-400"
                                            />

                                            <p className="text-[9px] font-medium text-green-300/80">
                                                Opening WhatsApp...
                                            </p>
                                        </motion.div>
                                    )}

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="
                                            group
                                            flex
                                            w-full
                                            items-center
                                            justify-center
                                            gap-3
                                            rounded-xl
                                            bg-brand-red
                                            px-5
                                            py-4
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
                                            text-white
                                            shadow-[0_12px_35px_rgba(227,38,46,0.20)]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:bg-white
                                            hover:text-black
                                            hover:shadow-[0_16px_40px_rgba(255,255,255,0.08)]
                                        "
                                    >
                                        Send Enquiry on WhatsApp

                                        <span className="
                                            flex
                                            h-6
                                            w-6
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/15
                                            transition-colors
                                            duration-300
                                            group-hover:bg-black/10
                                        ">
                                            <ArrowUpRight
                                                size={12}
                                                strokeWidth={2}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:-translate-y-0.5
                                                    group-hover:translate-x-0.5
                                                "
                                            />
                                        </span>
                                    </button>

                                    <p className="text-center text-[8px] leading-5 text-white/20">
                                        Your details are used only to
                                        respond to your enquiry.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* =====================================================
                    BOTTOM NOTE
                ====================================================== */}
                <div className="mt-5 flex flex-col gap-2 px-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[8px] font-semibold uppercase tracking-[0.18em] text-black/25">
                        AllIsWell MS Vlogs
                    </p>

                    <p className="text-[8px] font-medium uppercase tracking-[0.16em] text-black/20">
                        Digital Marketing • Social Media • Creative Production
                    </p>
                </div>
            </div>
        </section>
    );
}