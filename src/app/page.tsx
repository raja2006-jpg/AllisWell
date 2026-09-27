import { Metadata } from "next";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { BusinessCategories } from "@/components/sections/home/BusinessCategories";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { ServicesPreview } from "@/components/sections/home/ServicesPreview";
import { PortfolioSection } from "@/components/sections/home/PortfolioSection";
import ReelsShowcase from "@/components/sections/home/ReelsShowcase";
import { HowWeWork } from "@/components/sections/home/HowWeWork";
import { WhyUs } from "@/components/sections/home/WhyUs";
import { TestimonialsCarousel } from "@/components/sections/home/TestimonialsCarousel";
import { CTABanner } from "@/components/sections/home/CTABanner";
import { FAQSection } from "@/components/sections/home/FAQSection";
import { ContactCTA } from "@/components/sections/home/ContactCTA";

export const metadata: Metadata = {
  title: "AllIsWellMSVlogsz — Digital Marketing & Business Promotion",
  description:
    "We help local businesses, shops, hotels and brands grow through Instagram promotions, YouTube marketing and engaging video content. 48.3K+ Instagram followers.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <BusinessCategories />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioSection />
      <ReelsShowcase />
      <HowWeWork />
      <WhyUs />
      <TestimonialsCarousel />
      <CTABanner />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
