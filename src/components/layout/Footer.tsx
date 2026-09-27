import Image from "next/image";
import Link from "next/link";
import { Camera, Play, MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const footerLinks = {
    pages: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Packages", href: "/packages" },
    ],
    legal: [
        { label: "Reviews", href: "/reviews" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Use", href: "/terms" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-brand-gray-900 border-t border-white/[0.06]">
            <div className="section-container py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Col 1: Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-block w-fit mb-5" aria-label="AllIsWellMSVlogsz">
                            <div className="relative w-[140px] h-[50px] md:w-[180px] md:h-[60px]">
                                <Image src="/logos/logo3.png" alt="All Is Well Logo" fill className="object-contain" sizes="(max-width: 768px) 140px, 180px" />
                            </div>
                        </Link>
                        <p className="text-sm text-brand-silver leading-relaxed max-w-[240px]">
                            Digital promotions, social media marketing & engaging video content for local businesses & brands.
                        </p>
                        <div className="mt-6 flex gap-3">
                            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-brand-silver hover:text-brand-white hover:border-brand-red hover:bg-brand-red/10 transition-all">
                                <Camera size={16} />
                            </a>
                            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-brand-silver hover:text-brand-white hover:border-brand-red hover:bg-brand-red/10 transition-all">
                                <Play size={16} />
                            </a>
                            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-brand-silver hover:text-brand-white hover:border-brand-red hover:bg-brand-red/10 transition-all">
                                <MessageCircle size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Pages */}
                    <div>
                        <h3 className="text-sm font-semibold text-brand-white uppercase tracking-widest mb-5">Pages</h3>
                        <ul className="space-y-3">
                            {footerLinks.pages.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-brand-silver hover:text-brand-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-brand-white uppercase tracking-widest mb-5">Company</h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="text-sm text-brand-silver hover:text-brand-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact */}
                    <div>
                        <h3 className="text-sm font-semibold text-brand-white uppercase tracking-widest mb-5">Connect</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href={`tel:${siteConfig.contact.phone1}`}
                                    className="flex items-center gap-2.5 text-sm text-brand-silver hover:text-brand-white transition-colors">
                                    <Phone size={14} className="text-brand-red shrink-0" />
                                    {siteConfig.contact.phone1}
                                </a>
                            </li>
                            <li>
                                <a href={`tel:${siteConfig.contact.phone2}`}
                                    className="flex items-center gap-2.5 text-sm text-brand-silver hover:text-brand-white transition-colors">
                                    <Phone size={14} className="text-brand-red shrink-0" />
                                    {siteConfig.contact.phone2}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${siteConfig.contact.email}`}
                                    className="flex items-center gap-2.5 text-sm text-brand-silver hover:text-brand-white transition-colors break-all">
                                    <Mail size={14} className="text-brand-red shrink-0" />
                                    {siteConfig.contact.email}
                                </a>
                            </li>
                            <li>
                                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 text-sm text-brand-silver hover:text-brand-white transition-colors">
                                    <MessageCircle size={14} className="text-brand-red shrink-0" />
                                    WhatsApp Us
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-2.5 text-sm text-brand-silver">
                                    <MapPin size={14} className="text-brand-red shrink-0" />
                                    {siteConfig.contact.address}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/[0.06]">
                <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-brand-silver">
                        © 2026 AllIsWellMSVlogsz. All rights reserved.
                    </p>
                    <p className="text-xs text-brand-silver">
                        Digital Marketing & Business Promotion — Tamil Nadu
                    </p>
                </div>
            </div>
        </footer>
    );
}
