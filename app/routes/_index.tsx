import { Navbar } from "~/components/landing/navbar";
import { HeroSection } from "~/components/landing/hero-section";
import { AboutSection } from "~/components/landing/about-section";
import { MenuSection } from "~/components/landing/menu-section";
import { GallerySection } from "~/components/landing/gallery-section";
import { ContactSection } from "~/components/landing/contact-section";
import { Footer } from "~/components/landing/footer";

export default function IndexPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--background)" }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
