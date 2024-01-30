"use client";
import Link from "next/link";

const Footer = () => (
  <div className="btm-nav px-8 py-4">
    <div className="mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-10 border-t border-accent pt-2">
      <div className="w-full text-center">
        <p className="text-sm">
          Copyright © {new Date().getFullYear()}
          <span className="px-2">
            <Link href="/terms" className="text-sm hover:text-secondary">
              Terms
            </Link>
          </span>
          <span className="px-2">
            <Link href="/privacy" className="text-sm hover:text-secondary">
              Privacy
            </Link>
          </span>
        </p>
      </div>
    </div>
  </div>
);
export default Footer;
