import React from "react";

// components

import Navbar from "../components/dashboard/navbar";
import Sidebar from "../components/dashboard/sidebar.js";

import Footer from "../components/dashboard/footer.js";

export default function Admin({ children }) {
  return (
    <>
      <div className="relative h-full w-full mx-auto px-8">
        <Navbar />
        {/* Header */}
        <div className="relative mb-8">
        
          <div className="mx-auto w-full -m-24">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
