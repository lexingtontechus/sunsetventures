import Hero from "../components/hero";
import SectionTitle from "../components/sectionTitle";
import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";
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
        The portfolio is comprised of five (5) companies & one (1) non-profit.
        Each company is focused on a specific mission and innovations within its
        industry.
      </SectionTitle>
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
