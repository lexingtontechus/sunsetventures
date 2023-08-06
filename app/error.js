"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
export default function Error() {
  const router = useRouter();
  return (
    <div classsName="relative flex flex-col justify-center overflow-hidden min-h-screen px-8 hero-overlay">
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
        <button
          className="btn btn-neutral uppercase"
          onClick={() => router.push("/")}
        >
          HOME
        </button>
      </div>
    </div>
  );
}
