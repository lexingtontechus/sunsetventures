import React from "react";
import Image from "next/image";

import SEO from "../components/seo";
//import Video from "../components/video";
//import Testimonials from "../components/testimonials";

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
          <div className="relative h-full mx-auto text-trueZinc-700 dark:text-trueZinc-100">
            <div className="relative mt-8 px-4 md:px-10 mx-auto w-full -m-24">
              <div className="flex flex-wrap">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                  <div>
                   Your Portfolio
                  </div>
                </div>
                <div className="w-full xl:w-4/12 px-4">
                
                </div>
              </div>
              <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                
                </div>
                <div className="w-full xl:w-4/12 px-4">
                
                </div>
              </div>
            </div>
          </div>
        </LayoutDashboard>
        </>
  );
} 
