"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function Loading() {
  return (
    <div classsName="relative flex flex-col justify-center overflow-hidden px-8 min-h-screen mx-auto">
      <h1 className="text-center text-5xl font-black uppercase mt-16">
        Calculating Risk & Margins
      </h1>
      <Player
        autoplay
        loop
        src="/json/loading.json"
        style={{ height: "500px", width: "500px" }}
        className="m-8"
      ></Player>
    </div>
  );
}
