import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import AnalyticsPreview from "@/components/landing/AnalyticsPreview";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import CTASection from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AnalyticsPreview />
        <TestimonialsSection />
        <PricingSection />
        <CTASection
          title="Ready to trade with discipline?"
          description="Join thousands of traders who use Journal Hub to track, review, and improve their performance every day."
          primaryCTA="Start Journaling Free"
          primaryHref="/dashboard"
          secondaryCTA="View Pricing"
          secondaryHref="/pricing"
        />
      </main>
      <Footer />
    </>
  );
}
