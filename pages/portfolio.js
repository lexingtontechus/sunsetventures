import React from "react";
import Image from "next/image";

import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";

import Subscriptions from "../components/dashboard/subscription";
import LayoutDashboard from "../layouts/layoutDashboard";

//import CardLineChart from "../components/dashboard/cards/cardLineChart.js";
//import CardBarChart from "../components/dashboard/cards/cardBarChart.js";
//import CardPageVisits from "../components/dashboard/cards/cardPageVisits.js";
//import CardSocialTraffic from "../components/dashboard/cards/cardSocialTraffic.js";

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | Sunset Ventures"
        description="Portfolio Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <LayoutDashboard>
        <div className="relative mx-auto text-trueZinc-700 dark:text-trueZinc-100">
          <Subscriptions />
        </div>
      </LayoutDashboard>
    </>
  );
}
