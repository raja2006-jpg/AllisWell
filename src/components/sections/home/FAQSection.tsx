"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

export function FAQSection() {
    const [openId, setOpenId] = useState<string | null>(faqs[0].id);

    return (
        <section className="section-padding bg-brand-gray-900 border-y border-white/[0.05]">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">FAQs</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-brand-silver max-w-lg mx-auto">
                        Common questions about working with AllIsWellMSVlogsz.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openId === faq.id;
                        return (
                            <motion.div
                                key={faq.id}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`rounded-2xl border transition-all overflow-hidden ${isOpen
                                        ? "border-brand-red/30 bg-brand-gray-700"
                                        : "border-white/[0.06] bg-brand-gray-800 hover:border-white/10"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-semibold text-sm text-brand-white">{faq.question}</span>
                                    <motion.div
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="shrink-0"
                                    >
                                        {isOpen ? (
                                            <Minus size={18} className="text-brand-red" />
                                        ) : (
                                            <Plus size={18} className="text-brand-silver" />
                                        )}
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <p className="px-6 pb-5 text-sm text-brand-silver leading-relaxed">{faq.answer}</p>
                                            
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
