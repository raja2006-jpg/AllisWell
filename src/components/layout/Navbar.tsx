"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowUpRight,
    ChevronDown,
    Menu,
    X,
} from "lucide-react";
import {
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";

import { services } from "@/data/services";

const navLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Reviews",
        href: "/reviews",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

const instagramUrl =
    "https://www.instagram.com/alliswellmsvlogsz/";

const youtubeUrl =
    "https://www.youtube.com/@alliswellmsvlogsz";

const whatsappUrl =
    "https://wa.me/916385295287";

export function Navbar() {
    const pathname = usePathname();

    const [scrolled, setScrolled] =
        useState(false);

    const [previousPathname, setPreviousPathname] =
        useState(pathname);

    const [mobileOpen, setMobileOpen] =
        useState(false);

    const [
        mobileServicesOpen,
        setMobileServicesOpen,
    ] = useState(false);

    const [
        desktopServicesOpen,
        setDesktopServicesOpen,
    ] = useState(false);

    if (previousPathname !== pathname) {
        setPreviousPathname(pathname);
        setMobileOpen(false);
        setMobileServicesOpen(false);
        setDesktopServicesOpen(false);
    }

    // ============================================================
    // SCROLL DETECTION
    // ============================================================
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(
                window.scrollY > 24,
            );
        };

        handleScroll();

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            },
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll,
            );
        };
    }, []);

    // ============================================================
    // LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
    // ============================================================
    useEffect(() => {
        document.body.style.overflow =
            mobileOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow =
                "";
        };
    }, [mobileOpen]);

    // ============================================================
    // CLOSE ALL OPEN NAV STATES WHEN ROUTE CHANGES
    // ============================================================
    useEffect(() => {
        // Remove focus from the clicked dropdown item.
        // This prevents :focus-within from keeping the
        // Services dropdown visible after navigation.
        if (
            document.activeElement instanceof
            HTMLElement
        ) {
            document.activeElement.blur();
        }
    }, [pathname]);

    // ============================================================
    // ACTIVE ROUTE
    // ============================================================
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }

        return (
            pathname === href ||
            pathname.startsWith(
                `${href}/`,
            )
        );
    };

    return (
        <>
            {/* ====================================================
                DESKTOP / MAIN NAVBAR
            ===================================================== */}
            <header
                className={`
                    fixed
                    inset-x-0
                    top-0
                    z-[100]
                    transition-all
                    duration-500
                    ${
                        scrolled
                            ? "border-b border-white/[0.07] bg-[#050505]/75 shadow-[0_10px_40px_rgba(0,0,0,0.30)] backdrop-blur-2xl"
                            : "bg-transparent"
                    }
                `}
            >
                <nav className="mx-auto flex h-[88px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
                    {/* =================================================
                        LOGO
                    ================================================== */}
                    <Link
                        href="/"
                        aria-label="All Is Well MS Vlogs - Home"
                        className="group flex shrink-0 items-center"
                    >
                        <div className="relative h-[78px] w-[250px] shrink-0 sm:h-[84px] sm:w-[280px] lg:h-[88px] lg:w-[290px]">
                            <Image
                                src="/logo1.jpeg"
                                alt="All Is Well"
                                fill
                                priority
                                quality={100}
                                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 290px"
                            />
                        </div>
                    </Link>

                    {/* =================================================
                        DESKTOP NAVIGATION
                    ================================================== */}
                    <div className="hidden items-center lg:flex">
                        <div className="flex items-center gap-1">
                            {navLinks.map(
                                (link) => {
                                    const active =
                                        isActive(
                                            link.href,
                                        );

                                    {/* =================================
                                        SERVICES
                                    ================================== */}
                                    if (
                                        link.label ===
                                        "Services"
                                    ) {
                                        return (
                                            <div
                                                key={
                                                    link.href
                                                }
                                                className="relative"
                                                onMouseEnter={() =>
                                                    setDesktopServicesOpen(
                                                        true,
                                                    )
                                                }
                                                onMouseLeave={() =>
                                                    setDesktopServicesOpen(
                                                        false,
                                                    )
                                                }
                                                onFocusCapture={() =>
                                                    setDesktopServicesOpen(
                                                        true,
                                                    )
                                                }
                                                onBlurCapture={(
                                                    event,
                                                ) => {
                                                    const nextTarget =
                                                        event.relatedTarget;

                                                    if (
                                                        !nextTarget ||
                                                        !event.currentTarget.contains(
                                                            nextTarget as Node,
                                                        )
                                                    ) {
                                                        setDesktopServicesOpen(
                                                            false,
                                                        );
                                                    }
                                                }}
                                            >
                                                {/* Services main link */}
                                                <Link
                                                    href="/services"
                                                    aria-haspopup="true"
                                                    aria-expanded={
                                                        desktopServicesOpen
                                                    }
                                                    className={`
                                                        group
                                                        relative
                                                        inline-flex
                                                        items-center
                                                        gap-1.5
                                                        rounded-lg
                                                        px-4
                                                        py-2.5
                                                        text-[14px]
                                                        font-medium
                                                        transition-colors
                                                        duration-300
                                                        ${
                                                            active
                                                                ? "text-white"
                                                                : "text-white/60 hover:text-white"
                                                        }
                                                    `}
                                                >
                                                    <span>
                                                        Services
                                                    </span>

                                                    <ChevronDown
                                                        size={
                                                            13
                                                        }
                                                        strokeWidth={
                                                            1.8
                                                        }
                                                        className={`
                                                            transition-transform
                                                            duration-300
                                                            ${
                                                                desktopServicesOpen
                                                                    ? "rotate-180"
                                                                    : ""
                                                            }
                                                        `}
                                                    />

                                                    {/* Active underline */}
                                                    <span
                                                        className={`
                                                            absolute
                                                            bottom-1
                                                            left-4
                                                            right-4
                                                            h-[1.5px]
                                                            origin-left
                                                            rounded-full
                                                            bg-red-500
                                                            transition-transform
                                                            duration-300
                                                            ${
                                                                active
                                                                    ? "scale-x-100"
                                                                    : "scale-x-0 group-hover:scale-x-100"
                                                            }
                                                        `}
                                                    />
                                                </Link>

                                                {/* =================================
                                                    SERVICES DROPDOWN
                                                ================================== */}
                                                <div
                                                    className={`
                                                        absolute
                                                        left-1/2
                                                        top-full
                                                        z-[110]
                                                        w-[270px]
                                                        -translate-x-1/2
                                                        pt-3
                                                        transition-all
                                                        duration-200
                                                        ${
                                                            desktopServicesOpen
                                                                ? "visible translate-y-0 opacity-100"
                                                                : "invisible translate-y-2 opacity-0"
                                                        }
                                                    `}
                                                >
                                                    <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b0b0b]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.40)] backdrop-blur-2xl">
                                                        {services.map(
                                                            (
                                                                service,
                                                            ) => (
                                                                <Link
                                                                    key={
                                                                        service.slug
                                                                    }
                                                                    href={`/services/${service.slug}`}
                                                                    onClick={() => {
                                                                        setDesktopServicesOpen(
                                                                            false,
                                                                        );

                                                                        if (
                                                                            document.activeElement instanceof
                                                                            HTMLElement
                                                                        ) {
                                                                            document.activeElement.blur();
                                                                        }
                                                                    }}
                                                                    className="
                                                                        group/item
                                                                        flex
                                                                        items-center
                                                                        gap-3
                                                                        rounded-lg
                                                                        px-3.5
                                                                        py-3
                                                                        transition-colors
                                                                        duration-200
                                                                        hover:bg-white/[0.05]
                                                                        focus-visible:bg-white/[0.06]
                                                                    "
                                                                >
                                                                    <span className="min-w-0 flex-1">
                                                                        <span className="block truncate text-[13px] font-medium text-white/75 transition-colors duration-200 group-hover/item:text-white">
                                                                            {
                                                                                service.title
                                                                            }
                                                                        </span>
                                                                    </span>

                                                                    <ArrowUpRight
                                                                        size={
                                                                            14
                                                                        }
                                                                        strokeWidth={
                                                                            1.7
                                                                        }
                                                                        className="
                                                                            shrink-0
                                                                            text-white/20
                                                                            transition-all
                                                                            duration-200
                                                                            group-hover/item:-translate-y-0.5
                                                                            group-hover/item:translate-x-0.5
                                                                            group-hover/item:text-red-500
                                                                        "
                                                                    />
                                                                </Link>
                                                            ),
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    {/* =================================
                                        NORMAL NAV LINKS
                                    ================================== */}
                                    return (
                                        <Link
                                            key={
                                                link.href
                                            }
                                            href={
                                                link.href
                                            }
                                            className={`
                                                group
                                                relative
                                                rounded-lg
                                                px-4
                                                py-2.5
                                                text-[14px]
                                                font-medium
                                                transition-colors
                                                duration-300
                                                ${
                                                    active
                                                        ? "text-white"
                                                        : "text-white/60 hover:text-white"
                                                }
                                            `}
                                        >
                                            {
                                                link.label
                                            }

                                            <span
                                                className={`
                                                    absolute
                                                    bottom-1
                                                    left-4
                                                    right-4
                                                    h-[1.5px]
                                                    origin-left
                                                    rounded-full
                                                    bg-red-500
                                                    transition-transform
                                                    duration-300
                                                    ${
                                                        active
                                                            ? "scale-x-100"
                                                            : "scale-x-0 group-hover:scale-x-100"
                                                    }
                                                `}
                                            />
                                        </Link>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    {/* =================================================
                        DESKTOP RIGHT SIDE
                    ================================================== */}
                    <div className="hidden items-center lg:flex">
                        <Link
                            href="/contact"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-2
                                rounded-lg
                                bg-red-600
                                px-5
                                py-2.5
                                text-sm
                                font-semibold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-red-500
                            "
                        >
                            <span>
                                Let&apos;s Talk
                            </span>

                            <ArrowUpRight
                                size={16}
                                strokeWidth={
                                    1.8
                                }
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                "
                            />
                        </Link>
                    </div>

                    {/* =================================================
                        MOBILE MENU BUTTON
                    ================================================== */}
                    <button
                        type="button"
                        aria-label={
                            mobileOpen
                                ? "Close menu"
                                : "Open menu"
                        }
                        aria-expanded={
                            mobileOpen
                        }
                        onClick={() =>
                            setMobileOpen(
                                (
                                    prev,
                                ) =>
                                    !prev,
                            )
                        }
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-lg
                            border
                            border-white/10
                            bg-white/[0.035]
                            text-white
                            transition-all
                            duration-300
                            hover:border-white/20
                            hover:bg-white/[0.06]
                            lg:hidden
                        "
                    >
                        <motion.div
                            animate={{
                                rotate: mobileOpen
                                    ? 90
                                    : 0,
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            {mobileOpen ? (
                                <X
                                    size={
                                        21
                                    }
                                />
                            ) : (
                                <Menu
                                    size={
                                        21
                                    }
                                />
                            )}
                        </motion.div>
                    </button>
                </nav>
            </header>

            {/* ========================================================
                MOBILE MENU
            ========================================================= */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: "100%",
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: "100%",
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 28,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[90]
                            flex
                            flex-col
                            bg-[#050505]/98
                            backdrop-blur-2xl
                            lg:hidden
                        "
                    >
                        {/* =================================================
                            MOBILE HEADER
                        ================================================== */}
                        <div className="flex h-[88px] items-center justify-between border-b border-white/[0.06] px-5 sm:px-8">
                            <Link
                                href="/"
                                aria-label="All Is Well MS Vlogs"
                                onClick={() =>
                                    setMobileOpen(
                                        false,
                                    )
                                }
                            >
                                <div className="relative h-[58px] w-[100px]">
                                    <Image
                                        src="/logo1.jpeg"
                                        alt="All Is Well Logo"
                                        fill
                                        priority
                                        quality={
                                            100
                                        }
                                        className="object-contain"
                                        sizes="100px"
                                    />
                                </div>
                            </Link>

                            <button
                                type="button"
                                onClick={() =>
                                    setMobileOpen(
                                        false,
                                    )
                                }
                                aria-label="Close menu"
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-lg
                                    border
                                    border-white/10
                                    text-white
                                    transition-colors
                                    hover:bg-white/[0.05]
                                "
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* =================================================
                            MOBILE LINKS
                        ================================================== */}
                        <div className="flex flex-1 flex-col px-5 py-8 sm:px-8">
                            <div className="mx-auto w-full max-w-lg">
                                {navLinks.map(
                                    (
                                        link,
                                        index,
                                    ) => {
                                        const active =
                                            isActive(
                                                link.href,
                                            );

                                        {/* =================================
                                            MOBILE SERVICES
                                        ================================== */}
                                        if (
                                            link.label ===
                                            "Services"
                                        ) {
                                            return (
                                                <motion.div
                                                    key={
                                                        link.href
                                                    }
                                                    initial={{
                                                        opacity: 0,
                                                        x: 24,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            index *
                                                            0.05,
                                                        duration: 0.3,
                                                    }}
                                                    className="mb-2"
                                                >
                                                    <div
                                                        className={`
                                                            overflow-hidden
                                                            rounded-xl
                                                            border
                                                            transition-colors
                                                            duration-300
                                                            ${
                                                                active
                                                                    ? "border-red-500/20 bg-red-500/[0.05]"
                                                                    : "border-white/[0.06] bg-white/[0.02]"
                                                            }
                                                        `}
                                                    >
                                                        {/* Services row */}
                                                        <div className="flex items-center">
                                                            <Link
                                                                href="/services"
                                                                onClick={() =>
                                                                    setMobileOpen(
                                                                        false,
                                                                    )
                                                                }
                                                                className={`
                                                                    flex
                                                                    flex-1
                                                                    items-center
                                                                    px-5
                                                                    py-4
                                                                    text-base
                                                                    font-semibold
                                                                    ${
                                                                        active
                                                                            ? "text-white"
                                                                            : "text-white/70"
                                                                    }
                                                                `}
                                                            >
                                                                Services
                                                            </Link>

                                                            <button
                                                                type="button"
                                                                aria-label="Toggle services"
                                                                aria-expanded={
                                                                    mobileServicesOpen
                                                                }
                                                                onClick={() =>
                                                                    setMobileServicesOpen(
                                                                        (
                                                                            prev,
                                                                        ) =>
                                                                            !prev,
                                                                    )
                                                                }
                                                                className="
                                                                    flex
                                                                    h-[56px]
                                                                    w-[56px]
                                                                    items-center
                                                                    justify-center
                                                                    border-l
                                                                    border-white/[0.06]
                                                                    text-white/50
                                                                    transition-colors
                                                                    hover:text-white
                                                                "
                                                            >
                                                                <ChevronDown
                                                                    size={
                                                                        18
                                                                    }
                                                                    className={`
                                                                        transition-transform
                                                                        duration-300
                                                                        ${
                                                                            mobileServicesOpen
                                                                                ? "rotate-180"
                                                                                : ""
                                                                        }
                                                                    `}
                                                                />
                                                            </button>
                                                        </div>

                                                        {/* Services children */}
                                                        <AnimatePresence initial={false}>
                                                            {mobileServicesOpen && (
                                                                <motion.div
                                                                    initial={{
                                                                        height: 0,
                                                                        opacity: 0,
                                                                    }}
                                                                    animate={{
                                                                        height: "auto",
                                                                        opacity: 1,
                                                                    }}
                                                                    exit={{
                                                                        height: 0,
                                                                        opacity: 0,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.2,
                                                                    }}
                                                                    className="border-t border-white/[0.06]"
                                                                >
                                                                    <div className="p-2">
                                                                        {services.map(
                                                                            (
                                                                                service,
                                                                            ) => (
                                                                                <Link
                                                                                    key={
                                                                                        service.slug
                                                                                    }
                                                                                    href={`/services/${service.slug}`}
                                                                                    onClick={() => {
                                                                                        setMobileOpen(
                                                                                            false,
                                                                                        );

                                                                                        setMobileServicesOpen(
                                                                                            false,
                                                                                        );
                                                                                    }}
                                                                                    className="
                                                                                        group
                                                                                        flex
                                                                                        items-center
                                                                                        gap-3
                                                                                        rounded-lg
                                                                                        px-3
                                                                                        py-3
                                                                                        transition-colors
                                                                                        hover:bg-white/[0.04]
                                                                                    "
                                                                                >
                                                                                    <span className="w-6 text-[9px] font-semibold tracking-[0.12em] text-red-500">
                                                                                        {
                                                                                            service.number
                                                                                        }
                                                                                    </span>

                                                                                    <span className="min-w-0 flex-1">
                                                                                        <span className="block text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                                                                                            {
                                                                                                service.title
                                                                                            }
                                                                                        </span>

                                                                                        <span className="mt-0.5 block truncate text-[8px] uppercase tracking-[0.12em] text-white/25">
                                                                                            {
                                                                                                service.category
                                                                                            }
                                                                                        </span>
                                                                                    </span>

                                                                                    <ArrowUpRight
                                                                                        size={
                                                                                            14
                                                                                        }
                                                                                        className="
                                                                                            text-white/20
                                                                                            transition-all
                                                                                            group-hover:-translate-y-0.5
                                                                                            group-hover:translate-x-0.5
                                                                                            group-hover:text-red-500
                                                                                        "
                                                                                    />
                                                                                </Link>
                                                                            ),
                                                                        )}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                </motion.div>
                                            );
                                        }

                                        {/* =================================
                                            OTHER MOBILE LINKS
                                        ================================== */}
                                        return (
                                            <motion.div
                                                key={
                                                    link.href
                                                }
                                                initial={{
                                                    opacity: 0,
                                                    x: 24,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    x: 0,
                                                }}
                                                transition={{
                                                    delay:
                                                        index *
                                                        0.05,
                                                    duration: 0.3,
                                                }}
                                                className="mb-2"
                                            >
                                                <Link
                                                    href={
                                                        link.href
                                                    }
                                                    onClick={() =>
                                                        setMobileOpen(
                                                            false,
                                                        )
                                                    }
                                                    className={`
                                                        group
                                                        flex
                                                        items-center
                                                        justify-between
                                                        rounded-xl
                                                        border
                                                        px-5
                                                        py-4
                                                        text-base
                                                        font-semibold
                                                        transition-all
                                                        duration-300
                                                        ${
                                                            active
                                                                ? "border-red-500/20 bg-red-500/10 text-white"
                                                                : "border-white/[0.06] bg-white/[0.02] text-white/70 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                                                        }
                                                    `}
                                                >
                                                    <span>
                                                        {
                                                            link.label
                                                        }
                                                    </span>

                                                    <ArrowUpRight
                                                        size={
                                                            17
                                                        }
                                                        className={
                                                            active
                                                                ? "text-red-500"
                                                                : "text-white/25 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                        }
                                                    />
                                                </Link>
                                            </motion.div>
                                        );
                                    },
                                )}
                            </div>
                        </div>

                        {/* =================================================
                            MOBILE BOTTOM ACTIONS
                        ================================================== */}
                        <div className="border-t border-white/[0.06] px-5 pb-8 pt-6 sm:px-8">
                            <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-3">
                                <Link
                                    href="/login"
                                    onClick={() =>
                                        setMobileOpen(
                                            false,
                                        )
                                    }
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        rounded-lg
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-white/80
                                        transition-colors
                                        hover:bg-white/[0.06]
                                    "
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/contact"
                                    onClick={() =>
                                        setMobileOpen(
                                            false,
                                        )
                                    }
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-red-600
                                        py-3.5
                                        text-sm
                                        font-semibold
                                        text-white
                                        transition-colors
                                        hover:bg-red-500
                                    "
                                >
                                    Let&apos;s Talk
                                </Link>
                            </div>

                            {/* Social links */}
                            <div className="mt-6 flex justify-center gap-3">
                                {/* Instagram */}
                                <a
                                    href={
                                        instagramUrl
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        text-white/60
                                        transition-all
                                        hover:border-white/20
                                        hover:bg-white/[0.06]
                                        hover:text-white
                                    "
                                >
                                    <FaInstagram
                                        size={
                                            18
                                        }
                                    />
                                </a>

                                {/* YouTube */}
                                <a
                                    href={
                                        youtubeUrl
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="YouTube"
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        text-white/60
                                        transition-all
                                        hover:border-white/20
                                        hover:bg-white/[0.06]
                                        hover:text-white
                                    "
                                >
                                    <FaYoutube
                                        size={
                                            18
                                        }
                                    />
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href={
                                        whatsappUrl
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-white/10
                                        bg-white/[0.03]
                                        text-white/60
                                        transition-all
                                        hover:border-white/20
                                        hover:bg-white/[0.06]
                                        hover:text-white
                                    "
                                >
                                    <span className="text-[11px] font-bold">
                                        WA
                                    </span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}