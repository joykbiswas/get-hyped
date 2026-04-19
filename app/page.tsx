// import { HeroSection } from "@/components/hero-section";
// import { ExpertiseSection } from "@/components/expertise-section";
import { WorkSection } from "@/components/work-section";
import { BrandsSection } from "@/components/brands-section";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { HeroSection } from "@/components/hero-section";
import ExpertiseSection from "@/components/expertise-section";
// import { ExpertiseSection } from "@/components/expertise-section";

export default function Home() {
  return (
    <main className=" max-w-screen-2xl mx-auto bg-[#FDF6F0] ">
      <Navbar />

      <HeroSection />
      <About />
      <ExpertiseSection />
      <WorkSection />
      <BrandsSection />
      <Footer />
    </main>
  );
}
