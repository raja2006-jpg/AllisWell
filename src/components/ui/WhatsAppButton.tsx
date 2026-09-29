"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const WHATSAPP_NUMBER = "916385295287";

const DEFAULT_MESSAGE =
    "Hi All Is Well MS Vlogs, I'm interested in your services. I'd like to know more about your packages.";

export default function WhatsAppFloating() {
    const [showLabel, setShowLabel] = useState(false);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        DEFAULT_MESSAGE,
    )}`;

    return (
        <div className="fixed bottom-5 right-5 z-[999] sm:bottom-6 sm:right-6">
            {/* =====================================================
                TOOLTIP / LABEL
            ====================================================== */}

            <div
                className={`
                    pointer-events-none
                    absolute
                    bottom-[68px]
                    right-0
                    origin-bottom-right
                    whitespace-nowrap
                    rounded-full
                    border
                    border-black/[0.08]
                    bg-white
                    px-4
                    py-2.5
                    shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                    transition-all
                    duration-300
                    ${
                        showLabel
                            ? "translate-y-0 scale-100 opacity-100"
                            : "translate-y-2 scale-95 opacity-0"
                    }
                `}
            >
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-black/65">
                    Chat with us on WhatsApp
                </p>
            </div>

            {/* =====================================================
                WHATSAPP BUTTON
            ====================================================== */}

            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with All Is Well MS Vlogs on WhatsApp"
                onMouseEnter={() => setShowLabel(true)}
                onMouseLeave={() => setShowLabel(false)}
                onFocus={() => setShowLabel(true)}
                onBlur={() => setShowLabel(false)}
                className="
                    group
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    bg-[#25D366]
                    text-white
                    shadow-[0_14px_40px_rgba(37,211,102,0.28)]
                    transition-transform
                    duration-300
                    hover:-translate-y-1
                    hover:bg-[#25D366]
                    focus:bg-[#25D366]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[#25D366]/50
                    focus:ring-offset-2
                "
            >
                {/* =================================================
                    OUTER SOFT RING
                ================================================== */}

                <span
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        -inset-1
                        rounded-full
                        border
                        border-[#25D366]/20
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:inset-[-5px]
                        group-hover:opacity-100
                    "
                />

                {/* =================================================
                    REAL WHATSAPP LOGO
                ================================================== */}

                <FaWhatsapp
                    aria-hidden="true"
                    size={30}
                    className="
                        relative
                        z-10
                        text-white
                        transition-transform
                        duration-300
                        group-hover:scale-105
                    "
                />
            </a>
        </div>
    );
}