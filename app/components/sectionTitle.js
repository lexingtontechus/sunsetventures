"use client";
export default function SectionTitle(props) {
  return (
    <section
      className={`flex w-full flex-col px-8 my-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <h1 className="text-md font-bold tracking-wider uppercase">
          {props.pretitle}
        </h1>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <h3 className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl">
          {props.children}
        </h3>
      )}
    </section>
  );
}
