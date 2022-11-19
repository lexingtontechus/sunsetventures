import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-trueZinc-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-trueZinc-700 dark:text-trueZinc-100 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <Link
                  href="https://www.sunsetventures.nft"
                  className="text-trueZinc-700 dark:text-trueZinc-100 hover:text-trueZinc-700 text-sm font-semibold py-1"
                >
                  Sunset Ventures Inc.
                </Link>
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                <li>
                  <a
                    href="https://www.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-trueZinc-600 hover:text-trueZinc-800 text-sm font-semibold block py-1 px-3"
                  >
                    Sunset Ventures
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-trueZinc-700 dark:text-trueZinc-100 hover:text-trueZinc-800 text-sm font-semibold block py-1 px-3"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="http://blog.creative-tim.com?ref=nnjs-footer-admin"
                    className="text-trueZinc-700 dark:text-trueZinc-100 hover:text-trueZinc-800 text-sm font-semibold block py-1 px-3"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
