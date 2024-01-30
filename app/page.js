"use client";

import Hero from "./components/hero";
import Faq from "./components/faq";
import Cta from "./components/cta";
import SectionTitle from "./components/sectionTitle";
const Home = () => {
  return (
    <>
      <Hero />
      <SectionTitle pretitle="Our Story" title="Sunset Ventures">
        &quot;Our primary goal is to establish a wealth strategy for our clients
        through the use of Artificial Intelligence-driven quantitative
        trading.&quot;
        <p className="my-2">
          Our platform utilizes AI & ML to develop prediction algorithms to
          leverage potential trades and hedge risk.
        </p>
      </SectionTitle>
      <Faq />
      <Cta />
    </>
  );
};

export default Home;
