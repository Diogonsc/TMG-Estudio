import { MouseSpotlight } from "./primitives";
import {
  About,
  Audience,
  Differentials,
  Faq,
  FinalCta,
  FloatingWhatsApp,
  Footer,
  Gallery,
  Hero,
  Navbar,
  Process,
  Services,
  Stats,
  Testimonials,
} from "./sections";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-clip bg-background">
      <div className="pointer-events-none fixed inset-0 z-[1] bg-grain opacity-[0.025]" aria-hidden />
      <MouseSpotlight />
      <Navbar />
      <main className="w-full overflow-x-clip">
        <Hero />
        <Stats />
        <About />
        <Audience />
        <Differentials />
        <Services />
        <Process />
        <Gallery />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
