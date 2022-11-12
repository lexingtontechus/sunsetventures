import Head from "next/head";

export default function SEO({
  title = "0xaloysius",
  description = "Entrepreneur in technology, biotech, cleantech, foodtech & mobility.",
}) {
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta key="description" name="description" content={description} />
      </Head>
    </>
  );
}
