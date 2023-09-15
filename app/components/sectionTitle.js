export default function SectionTitle(props) {
  return (
    <section
      className={`flex w-full flex-col my-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}
    >
      {props.pretitle && (
        <div className="text-md font-bold tracking-wider uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl">
          {props.children}
        </p>
      )}
    </section>
  );
}
