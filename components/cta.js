import React from "react";
import Link from "next/link";
import Container from "./container";

export default function Cta() {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-trueZinc-700 dark:text-trueZinc-100 bg-trueZinc-100 dark:bg-trueZinc-800 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl text-trueZinc-700 dark:text-trueZinc-100">
            Ready to explore our platform?
          </h2>
          <p className="mt-2 font-medium text-trueZinc-700 dark:text-trueZinc-100 text-opacity-90 lg:text-xl"></p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/contact"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-trueZinc-100 dark:text-trueZinc-700 bg-trueZinc-900 dark:bg-trueZinc-50 rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Request A Demo
          </Link>
        </div>
      </div>
    </Container>
  );
}
