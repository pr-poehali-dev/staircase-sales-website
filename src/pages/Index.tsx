import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import AdvantagesSection from "@/components/AdvantagesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductCatalog />
      <AdvantagesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
