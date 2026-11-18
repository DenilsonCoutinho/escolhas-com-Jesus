import {
  Audience, Faq, FinalCta, Footer, Hero, HowItWorks, InsideCard, Offer, Problem, Situations, Testimonials,
} from "@/components/Sections";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Problem />
        <HowItWorks />
        <InsideCard />
        <Situations />
        <Audience />
        <Offer />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
