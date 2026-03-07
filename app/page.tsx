import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import PracticeAreas from "@/components/home/PracticeAreas";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import LeadCaptureSection from "@/components/home/LeadCaptureSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBadges />
      <PracticeAreas />
      <HowItWorks />
      <LeadCaptureSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
