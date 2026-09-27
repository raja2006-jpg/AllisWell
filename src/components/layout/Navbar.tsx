"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  Play,
  X,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const instagramUrl = "https://www.instagram.com/alliswellmsvlogsz/";
const youtubeUrl = "https://www.youtube.com/@alliswellmsvlogsz";
const whatsappUrl = "https://wa.me/916385295287";

export function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* =========================================================
          DESKTOP / MAIN NAVBAR
      ========================================================== */}
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/[0.07] bg-[#050505]/50 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl "
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-[88px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* =====================================================
              STACKED LOGOS
          ====================================================== */}
          <Link
            href="/"
            aria-label="All Is Well MS Vlogs - Home"
            className="group flex shrink-0 items-center"
          >
             <div className="flex flex-row items-center gap-[30px]">
  {/* Main Logo */}
  <div className="relative h-[90px] w-[300px] shrink-0 p-[5px] rounded-full ">
  <Image
    src="/logo1.jpeg"
    alt="All Is Well"
    fill
    priority
    quality={100}
    className="object-contain"
    sizes="(max-width: 768px) 220px, 300px"
  />
</div>

              

              
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAV LINKS
          ====================================================== */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative rounded-xl px-4 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                      active
                        ? "text-white"
                        : "text-white/55 hover:text-white"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-1 left-4 right-4 h-[1.5px] origin-left rounded-full bg-red-500 transition-transform duration-300 ${
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              DESKTOP RIGHT SIDE
          ====================================================== */}
          <div className="hidden items-center gap-2.5 lg:flex">
           

            {/* Login */}
            <Link
              href="/login"
              className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-white/75 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
            >
              Login
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500 "
            >
              Let&apos;s Talk
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 "
              />
            </Link>
          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ====================================================== */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.035] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] lg:hidden"
          >
            <motion.div
              animate={{ rotate: mobileOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </motion.div>
          </button>
        </nav>
      </header>

      {/* =========================================================
          MOBILE MENU
      ========================================================== */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="fixed inset-0 z-[90] flex flex-col bg-[#050505]/98 backdrop-blur-2xl lg:hidden"
          >
            {/* Mobile Header */}
            <div className="flex h-[88px] items-center justify-between border-b border-white/[0.06] px-5 sm:px-8">
              <Link
                href="/"
                aria-label="All Is Well MS Vlogs"
                onClick={() => setMobileOpen(false)}
              >
                <div className="flex flex-col items-center gap-[3px]">
                  <div className="relative h-[28px] w-[54px] overflow-hidden rounded-[10px] border border-white/15">
                    <Image
                      src="/logo1.jpg"
                      alt="All Is Well Logo"
                      fill
                      className="object-cover"
                      sizes="54px"
                    />
                  </div>

                  <div className="relative h-[28px] w-[54px] overflow-hidden rounded-[10px] border border-white/15">
                    <Image
                      src="/logo2.jpg"
                      alt="All Is Well MS Vlogs Logo"
                      fill
                      className="object-cover"
                      sizes="54px"
                    />
                  </div>
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex flex-1 flex-col justify-center px-6 sm:px-10">
              <div className="mx-auto w-full max-w-lg space-y-2">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.3,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between rounded-2xl border px-5 py-4 text-base font-semibold transition-all duration-300 ${
                          active
                            ? "border-red-500/20 bg-red-500/10 text-white"
                            : "border-white/[0.06] bg-white/[0.02] text-white/70 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {link.label}

                        <ArrowUpRight
                          size={17}
                          className={active ? "text-red-500" : "text-white/25"}
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Bottom Actions */}
            <div className="border-t border-white/[0.06] px-6 pb-8 pt-6 sm:px-10">
              <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] py-3.5 text-sm font-semibold text-white/80"
                >
                  Login
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white"
                >
                  Let&apos;s Talk
                </Link>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65"
                >
                  <FaInstagram size={18} />
                </a>

                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65"
                >
                  <FaYoutube size={18} />
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65"
                >
                  <span className="text-[11px] font-bold">WA</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}