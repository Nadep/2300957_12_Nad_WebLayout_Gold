import Layout from "../../components/layout";
import HeroSection from "./sections/HeroSection";
import OurServiceSection from "./sections/OurServiceSection";
import WhyUsSection from "./sections/WhyUsSection";
import TestimoniSection from "./sections/TestimoniSection";
import CTABannerSection from "./sections/CTABannerSection";
import FAQSection from "./sections/FAQSection";
import FooterSection from "./sections/Footer";

export default function Hero() {
  return (
    <Layout>
      <HeroSection />
      <OurServiceSection />
      <WhyUsSection />
      <TestimoniSection /> <div style={{ marginTop: '100px' }} />
      <CTABannerSection /> <div style={{ marginTop: '100px' }} />
      <FAQSection /> <div style={{ marginTop: '100px' }} />
      <FooterSection />
    </Layout>
  )
}