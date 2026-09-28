"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { ServiceConfig } from "@/data/services";

interface ServiceFAQProps {
    items: ServiceConfig["faq"];
}

export default function ServiceFAQ({
    items,
}: ServiceFAQProps) {
    return (
        <section className="border-t border-black/[0.10] py-16 sm:py-20">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1fr] lg:gap-16">
                <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#E3262E]">
                        FAQs
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#111]">
                        Common questions.
                    </h2>
                </div>

                <div>
                    {items.map((item, index) => (
                        <motion.details
                            key={item.question}
                            initial={{
                                opacity: 0,
                                y: 10,
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
                                duration: 0.5,
                                delay: index * 0.05,
                            }}
                            className="group border-b border-black/[0.09] py-5"
                        >
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-sm font-semibold text-[#111]">
                                {item.question}

                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 transition-all duration-300 group-open:bg-[#E3262E] group-open:text-white">
                                    <Plus
                                        size={13}
                                        className="transition-transform duration-300 group-open:rotate-45"
                                    />
                                </span>
                            </summary>

                            <p className="max-w-2xl pt-4 text-xs leading-6 text-black/45">
                                {item.answer}
                            </p>
                        </motion.details>
                    ))}
                </div>
            </div>
        </section>
    );
}