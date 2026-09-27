"use client";

import { motion } from "framer-motion";
import { Users, Video, MapPin, Eye } from "lucide-react";

const reasons = [
    {
        icon: Users,
        title: "Real Audience Reach",
        description:
            "Our Instagram following of 48.3K+ is an authentic, locally relevant audience — not bots or purchased followers.",
    },
    {
        icon: Video,
        title: "Engaging Video Content",
        description:
            "We create content people actually watch — combining storytelling, visuals, and real on-ground presence.",
    },
    {
        icon: MapPin,
        title: "Local Business Focus",
        description:
            "We understand local businesses, their customer base, and what it takes to stand out in a regional market.",
    },
    {
        icon: Eye,
        title: "Social Media Visibility",
        description:
            "Your business gets seen across Instagram and YouTube with professionally crafted promotional content.",
    },
];

export function WhyUs() {
    return (
        <section className="section-padding bg-brand-black">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-red mb-3">Why Choose Us</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-brand-white mb-4">
                        Why Work With AllIsWellMSVlogsz
                    </h2>
                    <p className="text-brand-silver max-w-lg mx-auto">
                        We combine creator authenticity with business-minded promotion for results that matter.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {reasons.map((reason, i) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group flex gap-5 p-6 rounded-2xl bg-brand-gray-800 border border-white/[0.06] hover:border-brand-red/25 hover:bg-brand-gray-700 transition-all"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red/20 transition-all">
                                <reason.icon size={22} className="text-brand-red" />
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-brand-white mb-2">{reason.title}</h3>
                                <p className="text-sm text-brand-silver leading-relaxed">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
