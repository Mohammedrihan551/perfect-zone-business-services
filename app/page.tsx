import HeroSection from "@/components/ui/HeroSection";
import ServicesSection from "@/components/ui/ServicesSection";
import TestimonialsSection from "@/components/ui/TestimonialsSection";
import WhyChooseUsSection from "@/components/ui/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </main>
  );
}
