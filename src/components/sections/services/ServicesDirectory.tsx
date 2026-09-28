"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowUpRight,
    BarChart3,
    Camera,
    Megaphone,
    Store,
} from "lucide-react";
import { services } from "@/data/services";

const serviceIcons = {
    megaphone: Megaphone,
    chart: BarChart3,
    camera: Camera,
    store: Store,
};

export default function ServicesDirectory() {
    return (
        <section className="relative overflow-hidden bg-[#f4f1ea] pb-24 sm:pb-28 lg:pb-32">
            <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
                <div className="border-t border-black/[0.10]">
                    {services.map((service, index) => {
                        const Icon = serviceIcons[service.icon];

                        return (
                            <motion.div
                                key={service.slug}
                                initial={{
                                    opacity: 0,
                                    y: 24,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.05,
                                }}
                            >
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="
                                        group
                                        relative
                                        grid
                                        grid-cols-[32px_40px_minmax(0,1fr)_36px]
                                        items-center
                                        gap-3
                                        border-b
                                        border-black/[0.10]
                                        py-7
                                        transition-all
                                        duration-400
                                        hover:bg-white/35
                                        sm:grid-cols-[55px_80px_minmax(0,1fr)_auto]
                                        sm:gap-6
                                        sm:py-9
                                    "
                                >
                                    <span className="text-[9px] font-bold tracking-[0.16em] text-black/25">
                                        {service.number}
                                    </span>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/60 text-black/50 transition-all duration-400 group-hover:border-[#E3262E]/30 group-hover:bg-[#E3262E] group-hover:text-white">
                                        <Icon size={16} strokeWidth={1.7} />
                                    </div>

                                    <div className="min-w-0">
                                        <div className="flex flex-wrap items-center gap-3">
                                            <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#E3262E]">
                                                {service.category}
                                            </p>

                                            <span className="hidden h-px w-4 bg-black/10 sm:block" />
                                        </div>

                                        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#111] transition-colors duration-300 group-hover:text-[#E3262E] sm:text-3xl">
                                            {service.title}
                                        </h2>

                                        <p className="mt-2 max-w-2xl text-xs leading-6 text-black/45 sm:text-sm">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-black/35 transition-all duration-400 group-hover:border-[#E3262E] group-hover:bg-[#E3262E] group-hover:text-white">
                                        <ArrowUpRight
                                            size={14}
                                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        />
                                    </div>

                                    <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#E3262E] transition-transform duration-500 group-hover:scale-x-100" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}