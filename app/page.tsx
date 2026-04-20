import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { VideoSection } from '@/components/video-section'
import { HowItWorksSection } from '@/components/how-it-works'
import { FeaturesSection } from '@/components/features-section'
import { CoverageSection } from '@/components/coverage-section'
import { RegistrationSection } from '@/components/registration-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CoverageSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
