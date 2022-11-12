//import Link from "next/link";
import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";

export default function FooterMini() {
  const footer = [
    { name: "About", href: "/about" },
    { name: "Profile", href: "/profile" },
    { name: "Contact", href: "/contact" }
  ];
  const legal = [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" }
  ];

  return (
    <footer className="relative px-8 py-4">
      <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-2 mx-auto mt-5 border-t border-trueGray-100 dark:border-trueGray-700">
        <div className="w-full text-center">
          <p className="text-sm text-trueGray-700 dark:text-trueGray-100">
            Copyright © {new Date().getFullYear()}.{" "}
            <span className="px-2">
              <Link href="/terms">
Terms
              </Link>
            </span>
            <span className="px-2">
              <Link href="/privacy">
           Privacy
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

const Backlink = () => {
  return (
    <>
      <button
        className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-trueGray-900 
        bg-trueOrange-600 border border-trueGray-300 rounded shadow-sm place-items-center left-5 bottom-5 
        dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300"
        type="button"
      >
        <Image
          alt="0xaloysius"
          className="w-5 mr-1"
          src="/img/logo.svg"
        />
        0xaloysius
      </button>
    </>
  );
};
