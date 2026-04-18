import { HeroSection } from "@/components/hero-section"
import { ExpertiseSection } from "@/components/expertise-section"
import { WorkSection } from "@/components/work-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full max-w-full bg-[#FDF6F0] overflow-x-hidden">
      <HeroSection />
      <ExpertiseSection />
      <WorkSection />
      <BrandsSection />
      <Footer />
    </main>
  )
}
