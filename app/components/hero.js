import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero min-h-screen svg-home">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold uppercase">Sunset Ventures Inc.</h1>
          <p className="py-6 font-semibold text-2xl">
            Quantitative algoritmic trading in forex.
          </p>
          <p className="py-6 font-semibold text-2xl">
            Crypto hedge fund trading in digital assets.
          </p>
          <button className="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>
  );
}
