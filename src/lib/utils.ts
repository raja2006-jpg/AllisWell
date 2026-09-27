import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
    return new Intl.DateTimeFormat("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(dateString));
}

export function getWhatsAppUrl(message?: string): string {
    const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "916385295287";
    const text = message || "Hi, I would like to know more about your services.";
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppEnquiryUrl(data: {
    name?: string;
    business?: string;
    service?: string;
    phone?: string;
    message?: string;
}): string {
    const text = `New website enquiry
Name: ${data.name || "—"}
Business: ${data.business || "—"}
Service: ${data.service || "—"}
Phone: ${data.phone || "—"}
Message: ${data.message || "—"}`;
    return getWhatsAppUrl(text);
}
