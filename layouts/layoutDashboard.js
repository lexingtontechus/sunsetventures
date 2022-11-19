import React from "react";

// components

import SEO from "../components/seo";
import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/sidebar.js";
//import HeaderStats from "../components/dashboard/headerStats.js";
import Footer from "../components/dashboard/footer.js";

export default function Admin({ children }) {
  return (
    <>
      <SEO
        title="Profile | Sunset Ventures"
        description="Profile Sunset Ventures. Quantitative Trading. SEC Approved. Cryptocurrency Trading. Smart Algorithms. Smart FX."
      />
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <Navbar />
        {/* Header */}
        {/*<HeaderStats />*/}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
