import Head from "next/head";

export default function SEO({
  title = "Sunset Ventures",
  description = "Quantitative algoritmic trading.",
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
