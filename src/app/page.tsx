import { CTA } from "@/components/sections/CTA";
import { Features } from "@/components/sections/Features";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Problem } from "@/components/sections/Problem";
import { SocialProof } from "@/components/sections/SocialProof";
import { Technology } from "@/components/sections/Technology";
import { Testimonials } from "@/components/sections/Testimonials";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Technology />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
