import Link from "next/link";

export default function Cta() {
  return (
    <section>
      <div className="justify-between mx-auto m-4">
        <div className="flex-grow text-center">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Ready to explore our platform?
          </h2>
          <p className="mt-2 font-mediumtext-opacity-90 lg:text-xl"></p>
          <button className="btn btn-accent uppercase font-bold my-2">
            <Link href="/contact">Request A Demo</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
