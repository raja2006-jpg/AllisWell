"use client";

import { motion } from "framer-motion";
import AccordionGallery from "@/components/ui/AccordionGallery";
import { portfolioItems } from "@/data/portfolio";

export function PortfolioSection() {
    const galleryItems = portfolioItems
        .slice(0, 5)
        .map((item) => ({
            image: item.imageUrl,
            label: item.title,
            alt: `${item.title} portfolio project`,
        }));

    const defaultIndex =
        galleryItems.length > 0
            ? Math.min(
                  2,
                  galleryItems.length - 1,
              )
            : 0;

    return (
        <section className="relative isolate overflow-hidden bg-[#080808] py-24 md:py-32 lg:py-36">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-[-240px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-brand-red/[0.08] blur-[150px]" />

                <div
                    className="absolute inset-0 opacity-[0.018]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                    }}
                />
            </div>

            <div className="section-container relative z-10">
                {/* Heading */}
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
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
                        }}
                        className="mb-5 flex items-center justify-center gap-3"
                    >
                        <span className="h-px w-8 bg-brand-red" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-red">
                            Featured Work
                        </p>

                        <span className="h-px w-8 bg-brand-red" />
                    </motion.div>

                    <motion.h2
                        initial={{
                            opacity: 0,
                            y: 25,
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
                        }}
                        className="text-4xl font-black leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Our{" "}
                        <span className="text-white/35">
                            Portfolio.
                        </span>
                        
                        
                    </motion.h2>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 15,
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
                            delay: 0.1,
                        }}
                        className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 md:text-base md:leading-8"
                    >
                        A selection of brands, businesses and stories we&apos;ve
                        helped bring to life through content, promotion and
                        digital experiences.
                    </motion.p>
                </div>

                {/* Gallery */}
                <motion.div
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
                        amount: 0.12,
                    }}
                    transition={{
                        duration: 0.9,
                        delay: 0.15,
                        ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                        ],
                    }}
                    className="relative mx-auto mt-14 max-w-[1400px] md:mt-16 lg:mt-20"
                >
                    <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-brand-red/[0.035] blur-3xl" />

                    <div className="relative rounded-[22px] border border-white/[0.08] bg-[#0f0f0f] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.5)] md:p-3">
                        {galleryItems.length > 0 ? (
                            <AccordionGallery
                                items={galleryItems}
                                defaultIndex={
                                    defaultIndex
                                }
                                accentColor="#E3262E"
                                overlayColor="#050505"
                                textColor="#FFFFFF"
                                grayscale
                                showLabels
                                duration={0.6}
                                ease="power3.out"
                                parallax={0.5}
                                tilt={8}
                                stagger={0.06}
                                height={460}
                                gap={10}
                                radius={16}
                                expandRatio={0.52}
                                orientation="horizontal"
                                trigger="hover"
                            />
                        ) : (
                            <div className="flex min-h-[460px] items-center justify-center rounded-[16px] bg-[#0b0b0b]">
                                <p className="text-sm text-white/35">
                                    Portfolio projects coming soon.
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}