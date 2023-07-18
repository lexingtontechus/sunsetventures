"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div classsName="relative flex flex-col justify-center overflow-hidden min-h-screen px-8">
      <h1 className="text-center text-5xl font-black uppercase mt-16">
        AI Is Overworked!
      </h1>
      <Player
        autoplay
        loop
        src="/json/error404.json"
        style={{ height: "500px", width: "500px" }}
        className="m-8"
      ></Player>
      <div className="mx-auto w-full text-center">
        <button className="btn btn-accent uppercase">
          <Link href="/">HOME</Link>
        </button>
      </div>
    </div>
  );
}
