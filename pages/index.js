import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";
import SmartFX from "../components/smartfx";
import { smartfxOne, smartfxTwo } from "../components/smartfxdata";

import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <SEO title="Home | Sunset Ventures" description="Home Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX." />
      <Navbar />
      <Hero />
      <SectionTitle pretitle="Our Story" title="Sunset Ventures">
        Our primary goal is to establish a wealth strategy for our clients through the use of Artificial Intelligence-driven quantitative trading.
      </SectionTitle>
      <SmartFX data={smartfxOne}/>
      <SmartFX imgPos="right" data={smartfxTwo} />
      <Cta />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        How can an organization partner with Sunset Ventures?
      </SectionTitle>
      <Faq />

      <Footer />
      <PopupWidget />
    </>
  );
}
