import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Mail, Phone } from "lucide-react";
import {
    getServiceBySlug,
    photoFrameSizes,
    services,
    visitingCardTypes,
} from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
    title: "Contact",
    description:
        "Send an enquiry to AllIsWellMSVlogsz about a service, package or digital-store product.",
};

type ContactSearchParams = Record<
    string,
    string | string[] | undefined
>;

interface ContactPageProps {
    searchParams: Promise<ContactSearchParams>;
}

function firstParam(
    params: ContactSearchParams,
    key: string,
): string | undefined {
    const value = params[key];
    return Array.isArray(value) ? value[0] : value;
}

export default async function ContactPage({
    searchParams,
}: ContactPageProps) {
    const params = await searchParams;
    const serviceValue = firstParam(params, "service");
    const service = serviceValue
        ? getServiceBySlug(serviceValue) ??
          services.find(
              (item) =>
                  item.title.toLowerCase() === serviceValue.toLowerCase(),
          )
        : undefined;
    const offerId =
        firstParam(params, "offer") ?? firstParam(params, "package");
    const offerTitle = service?.offers.find(
        (offer) => offer.id === offerId,
    )?.title;
    const tier = firstParam(params, "tier");
    const product = firstParam(params, "product");
    const variant = firstParam(params, "variant");
    const size = firstParam(params, "size");
    const isCustom = firstParam(params, "custom") === "true";
    const card = visitingCardTypes.find(
        (item) => item.id === variant,
    );
    const frameSize = photoFrameSizes.find(
        (item) => item.id === size,
    );

    const selection = [
        service?.title ?? serviceValue,
        offerTitle ?? offerId,
        tier ? `${tier.charAt(0).toUpperCase()}${tier.slice(1)} package` : undefined,
        product === "visiting-card"
            ? `${card?.title ?? variant ?? "Visiting card"}${variant ? " visiting card" : ""}`
            : product === "photo-frame"
              ? `Photo frame${isCustom ? " — custom size" : frameSize ? ` — ${frameSize.label}` : ""}`
              : undefined,
    ].filter((value): value is string => Boolean(value));

    const enquiryMessage = [
        "Hello AllIsWellMSVlogsz, I would like to enquire about:",
        ...selection.map((item) => `• ${item}`),
    ].join("\n");
    const whatsappUrl = new URL(siteConfig.social.whatsapp);
    whatsappUrl.searchParams.set("text", enquiryMessage);
    const emailHref =
        `mailto:${siteConfig.contact.email}` +
        `?subject=${encodeURIComponent("Service enquiry")}` +
        `&body=${encodeURIComponent(enquiryMessage)}`;

    return (
        <section className="min-h-[65vh] bg-[#080808] px-5 py-16 text-white sm:px-8 sm:py-24">
            <div className="mx-auto max-w-5xl">
                <Link
                    href={service ? `/services/${service.slug}` : "/services"}
                    className="inline-flex min-h-11 items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white"
                >
                    <ArrowLeft size={13} />
                    {service ? "Back to service" : "All Services"}
                </Link>

                <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_0.72fr] lg:items-start">
                    <div>
                        <p className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.24em] text-[#E3262E]">
                            <span className="h-px w-8 bg-[#E3262E]" />
                            Enquiry
                        </p>
                        <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                            Let&apos;s talk about what you have in mind.
                        </h1>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                            This is an enquiry only. No payment is taken here;
                            our team will follow up to confirm details and
                            availability.
                        </p>
                    </div>

                    <div className="border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                        <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                            Selected service / product
                        </p>
                        {selection.length ? (
                            <ul className="mt-5 space-y-3">
                                {selection.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-white/80"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E3262E]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-4 text-sm leading-6 text-white/50">
                                No service selected yet. You can return to the
                                service directory and choose an option first.
                            </p>
                        )}

                        <div className="mt-8 space-y-3">
                            <a
                                href={whatsappUrl.toString()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-12 items-center justify-between bg-[#E3262E] px-5 text-[9px] font-bold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-black"
                            >
                                Continue on WhatsApp
                                <ArrowUpRight size={14} />
                            </a>
                            <a
                                href={emailHref}
                                className="flex min-h-12 items-center justify-between border border-white/15 px-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-white hover:text-white"
                            >
                                Email this enquiry
                                <Mail size={14} />
                            </a>
                            <a
                                href={`tel:${siteConfig.contact.phone1}`}
                                className="flex min-h-12 items-center justify-between border border-white/15 px-5 text-[9px] font-bold uppercase tracking-[0.16em] text-white/70 transition-colors hover:border-white hover:text-white"
                            >
                                Call {siteConfig.contact.phone1}
                                <Phone size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
