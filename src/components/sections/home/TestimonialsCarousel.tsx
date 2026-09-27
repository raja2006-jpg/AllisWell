"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { sampleTestimonials } from "@/data/testimonials";
import { formatDate } from "@/lib/utils";

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Star
                    key={i}
                    size={14}
                    className={i < rating ? "text-amber-400 fill-amber-400" : "text-brand-gray-600"}
                />
            ))}
        </div>
    );
}

export function TestimonialsCarousel() {
    const [current, setCurrent] = useState(0);

    const prev = useCallback(() => {
        setCurrent((c) => (c === 0 ? sampleTestimonials.length - 1 : c - 1));
    }, []);

    const next = useCallback(() => {
        setCurrent((c) => (c === sampleTestimonials.length - 1 ? 0 : c + 1));
    }, []);

    const testimonial = sampleTestimonials[current];

    return (
        <section className="section-padding bg-brand-gray-900 border-y border-white/[0.05]">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">Client Reviews</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-white mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-brand-silver max-w-lg mx-auto">
                        Real feedback from real businesses we&apos;ve helped promote.
                    </p>
                </motion.div>

                <div className="relative max-w-2xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -30 }}
                            transition={{ duration: 0.35 }}
                            className="glass-card p-8 text-center border border-white/[0.08]"
                        >
                            {/* Avatar */}
                            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-brand-red/30 mx-auto mb-4">
                                <Image
                                    src={testimonial.avatarUrl}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                />
                            </div>

                            <StarRating rating={testimonial.rating} />

                            <blockquote className="text-brand-silver leading-relaxed my-5 text-sm md:text-base italic">
                                &ldquo;{testimonial.review}&rdquo;
                            </blockquote>

                            <div>
                                <p className="font-bold text-brand-white text-sm">{testimonial.name}</p>
                                <p className="text-xs text-brand-red mt-0.5">{testimonial.businessName}</p>
                                <p className="text-xs text-brand-silver mt-1">{formatDate(testimonial.date)}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver hover:text-brand-white hover:border-brand-red/40 transition-all"
                            aria-label="Previous review"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {sampleTestimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`transition-all rounded-full ${i === current ? "w-6 h-2 bg-brand-red" : "w-2 h-2 bg-brand-gray-600 hover:bg-brand-silver"
                                        }`}
                                    aria-label={`Go to review ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-brand-silver hover:text-brand-white hover:border-brand-red/40 transition-all"
                            aria-label="Next review"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <Link
                        href="/reviews"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red hover:text-brand-red-light transition-colors"
                    >
                        View All Reviews <ArrowRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
