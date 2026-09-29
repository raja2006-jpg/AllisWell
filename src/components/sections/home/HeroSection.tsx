"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaInstagram, FaYoutube } from "react-icons/fa6";


/* =========================================================
   Antigravity - client side only
========================================================= */

const Antigravity = dynamic(
  () =>
    import("@/components/ui/Antigravity").then(
      (mod) => mod.default
    ),
  {
    ssr: false,
    loading: () => null,
  }
);

/* =========================================================
   SOCIAL LINKS
========================================================= */

const instagramUrl =
  "https://www.instagram.com/alliswellmsvlogsz/";

const youtubeUrl =
  "https://www.youtube.com/@alliswellmsvlogsz";

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

/* =========================================================
   HERO SECTION
========================================================= */


export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0000] text-white">
      
      {/* =======================================================
          BASE BACKGROUND
      ======================================================== */}

      <div className="absolute inset-0 z-0 bg-[#00000]" />

      {/* =======================================================
          ANTIGRAVITY BACKGROUND

          IMPORTANT:
          - stays behind the whole hero
          - does NOT replace the right-side image
          - capsule particles
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 opacity-[0.32]">
          <Antigravity
            count={300}
            magnetRadius={6}
            ringRadius={7}
            waveSpeed={0.4}
            waveAmplitude={1}
            particleSize={1.5}
            lerpSpeed={0.05}
            color="#ef233c"
            autoAnimate={true}
            particleVariance={1}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={3}
            particleShape="capsule"
            fieldStrength={10}
          />
        </div>
      </div>

      {/* =======================================================
          DARK READABILITY LAYER
      ======================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#050505]/90 via-[#050505]/65 to-[#050505]/25" />

      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-40 bg-gradient-to-b from-[#050505]/90 to-transparent" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[30%] bg-gradient-to-t from-[#050505] to-transparent" />

      {/* =======================================================
          RED ATMOSPHERIC GLOWS
      ======================================================== */}

      

      <div className="pointer-events-none absolute -right-[180px] top-[3%] z-[2] h-[560px] w-[560px] rounded-full bg-red-600/[0.055] blur-[160px]" />

      {/* =======================================================
          SUBTLE GRID
      ======================================================== */}

      

      {/* =======================================================
          HERO CONTENT
      ======================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] items-center px-5 pb-12 pt-[115px] sm:px-8 lg:px-5 lg:pb-16">
        
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-12">

          {/* ===================================================
              LEFT CONTENT
          ==================================================== */}

          <div className="order-2 lg:order-1">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >

              {/* Small label */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                }}
                className="mb-7 flex items-center gap-3"
              >
                <span className="h-px w-9 bg-red-500" />
                
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40 sm:text-[11px]">
                  Digital Marketing • Media • Promotions
                </span>
              </motion.div>

              {/* =================================================
                  MAIN BRAND TITLE
              ================================================== */}

              <div>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                  className="max-w-[820px] text-[clamp(2.8rem,5.5vw,5.6rem)] font-black uppercase leading-[0.86] tracking-[-0.065em]"
                >
                  <span className="text-red-500">A</span>LL{" "}
                  <span className="text-red-500">I</span>S{" "}
                  <span className="text-red-500">W</span>ELL
                </motion.h1>

                {/* MS VLOGS */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -18,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.45,
                  }}
                  className="mt-5 flex items-center gap-4"
                >
                  <span className="h-px w-8 bg-red-500 sm:w-12" />

                  <span className="text-[clamp(0.9rem,1.8vw,1.25rem)] font-medium uppercase tracking-[0.34em] text-white/55">
                    MS Vlogs
                  </span>
                </motion.div>
              </div>

              {/* =================================================
                  TAGLINE
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.6,
                }}
                className="mt-10"
              >
                <p className="text-[clamp(1.05rem,1.8vw,1.35rem)] font-medium tracking-wide text-white/75">
                  <span className="text-white">
                    Your Brand.
                  </span>{" "}
                  <span className="text-white">
                    Our Strategy.
                  </span>{" "}
                  <span className="text-red-500">
                    Digital Growth.
                  </span>
                </p>

                <p className="mt-5 max-w-[640px] text-sm leading-7 text-white/45 sm:text-base">
                  Digital promotions, social media visibility
                  and engaging video content for local businesses,
                  shops, hotels, restaurants, brands and creators.
                </p>
              </motion.div>

              {/* =================================================
                  CTA
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.75,
                }}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-500 hover:shadow-[0_1px_4px_rgba(220,38,38,0.28)]"
                >
                  Get Your Business Featured

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </motion.div>

              {/* =================================================
                  SOCIAL PROOF
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.95,
                }}
                className="mt-12 flex flex-wrap items-center gap-5"
              >
                {/* Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                  aria-label="Visit All Is Well MS Vlogs Instagram"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-pink-500 backdrop-blur-md transition-all duration-300 group-hover:border-pink-500/30 group-hover:bg-pink-500/10">
                    <FaInstagram
                      size={22}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      @alliswellmsvlogsz
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      Instagram 
                    </p>
                  </div>
                </a>

                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                {/* YouTube */}
                <a
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3"
                  aria-label="Visit All Is Well MS Vlogs YouTube"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-red-500 backdrop-blur-md transition-all duration-300 group-hover:border-red-500/30 group-hover:bg-red-500/10">
                    <FaYoutube
                      size={22}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-white">
                      @alliswellmsvlogsz
                    </p>

                    <p className="text-[10px] uppercase tracking-[0.15em] text-white/35">
                      YouTube Channel
                    </p>
                  </div>
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ===================================================
              RIGHT SIDE — EXISTING IMAGE
              KEEP THIS
          ==================================================== */}

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                x: 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
              }}
              className="relative w-full max-w-[480px]"
            >

              {/* Red ambient glow */}
              <div className="pointer-events-none absolute -inset-8 rounded-[42px] bg-red-600/[0.07] blur-[60px]" />

              {/* Outer frame */}
              <div className="relative mx-auto w-[min(88vw,440px)]">

                <div className="absolute -inset-[1px] rounded-[34px] bg-gradient-to-br from-white/15 via-transparent to-red-500/30" />

                {/* =================================================
                    IMAGE CARD
                ================================================== */}

                <div className="relative aspect-[0.82] overflow-hidden rounded-[32px] border border-white/10 bg-[#0b0b0b] shadow-[0_30px_100px_rgba(0,0,0,0.55)]">

                  <Image
                    src="/logo2.jpeg"
                    alt="All Is Well MS Vlogs"
                    fill
                    priority
                    sizes="(max-width: 768px) 88vw, 440px"
                    className="object-cover object-center"
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

                  {/* Top red line */}
                  <div className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-transparent via-red-500/80 to-transparent" />

                  {/* Circular All Is Well logo */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-5 top-5 h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-white/70 bg-black shadow-[0_0_35px_rgba(220,38,38,0.2)]"
                  >
                    <Image
                      src="/logo1.jpg"
                      alt="All Is Well Logo"
                      fill
                      className="object-cover"
                      sizes="60px"
                    />
                  </motion.div>
                </div>
              </div>

              {/* Bottom decorative line */}
              <div className="pointer-events-none absolute -bottom-7 left-1/2 h-px w-[68%] -translate-x-1/2 bg-gradient-to-r from-transparent via-red-500/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM GLOW
      ========================================================== */}

      

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================== */}

      <motion.div
        animate={{
          y: [0, 6, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        
      </motion.div>
    </section>
  );
}