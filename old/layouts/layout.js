import React from "react";

// components

import Navbar from "../components/navbar";
import Footer from "../components/footermini";
import Cal from "../components/cal";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

export default function Layout({ children }) {
  return (
    <>
      <div className="relative h-full w-full mx-auto px-8">
        <Navbar />
        <div className="relative mb-4">
          <div className="mx-auto w-full">{children}</div>
        </div>
        <Footer />
        <PopupWidget />
        <Cal />
      </div>
    </>
  );
}
