"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { useRouter } from "next/navigation";
export default function Error() {
  const router = useRouter();
  return (
    <div className="hero min-h-screen svg-home">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold uppercase">AI Is Overworked!</h1>
          <Player
            autoplay
            loop
            src="/json/error404.json"
            style={{ height: "500px", width: "500px" }}
            className="m-8"
          ></Player>
          <button
            className="btn btn-accent uppercase"
            onClick={() => router.push("/")}
          >
            HOME
          </button>
        </div>
      </div>
    </div>
  );
}
