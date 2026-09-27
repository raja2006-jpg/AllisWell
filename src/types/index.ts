// Shared TypeScript types for the application

export type UserRole = "user" | "admin" | "super_admin" | "editor";
export type UserStatus = "active" | "inactive" | "banned";
export type ReviewStatus = "pending" | "approved" | "rejected";
export type LeadStatus = "new" | "contacted" | "in_progress" | "closed";

export interface Profile {
    id: string;
    name: string | null;
    email: string;
    avatar_url: string | null;
    provider: string | null;
    status: UserStatus;
    created_at: string;
}

export interface AdminUser {
    id: string;
    user_id: string;
    role: UserRole;
    created_at: string;
}

export interface Review {
    id: string;
    user_id: string | null;
    name: string;
    business_name: string;
    avatar_url: string | null;
    rating: number;
    review: string;
    status: ReviewStatus;
    created_at: string;
}

export interface Lead {
    id: string;
    user_id: string | null;
    name: string;
    email: string;
    avatar_url: string | null;
    phone: string;
    business_name: string;
    service: string;
    message: string;
    preferred_contact: string;
    status: LeadStatus;
    created_at: string;
}

export interface Notification {
    id: string;
    type: "new_user" | "new_review" | "new_lead" | "review_approved" | "review_rejected";
    title: string;
    body: string;
    read: boolean;
    created_at: string;
    meta?: Record<string, unknown>;
}

export interface NavItem {
    label: string;
    href: string;
}
