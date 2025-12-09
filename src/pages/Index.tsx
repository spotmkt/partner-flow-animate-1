import HeroSection from "@/components/omnia/HeroSection";
import FeaturesSection from "@/components/omnia/FeaturesSection";
import ServicesSection from "@/components/omnia/ServicesSection";
import StatsSection from "@/components/omnia/StatsSection";
import ContactFormSection from "@/components/omnia/ContactFormSection";
import Footer from "@/components/omnia/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <ContactFormSection />
      <Footer />
    </main>
  );
};

export default Index;
