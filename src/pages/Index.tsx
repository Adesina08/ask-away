import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="services">
          <ServicesSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
