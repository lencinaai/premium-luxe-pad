import Sidebar from "@/components/layout/Sidebar";
import MobileHeader from "@/components/layout/MobileHeader";
import WhatsAppFloatingButton from "@/components/layout/WhatsAppFloatingButton";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TopPropertiesSection from "@/components/sections/TopPropertiesSection";
import SellerSection from "@/components/sections/SellerSection";
import EmptyDecoratedSection from "@/components/sections/EmptyDecoratedSection";
import LotAiSection from "@/components/sections/LotAiSection";
import CondoProjectSection from "@/components/sections/CondoProjectSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import SocialSection from "@/components/sections/SocialSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileHeader />

      <main className="lg:ml-72 pt-14 lg:pt-0">
        <HeroSection />
        <TopPropertiesSection />
        <SellerSection />
        <EmptyDecoratedSection />
        <LotAiSection />
        <CondoProjectSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <SocialSection />
        <Footer />
      </main>

      <WhatsAppFloatingButton />
    </div>
  );
}
