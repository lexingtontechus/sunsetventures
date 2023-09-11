"use client";

import { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div classsName="relative flex flex-col justify-center overflow-hidden m-8 min-h-screen">
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
