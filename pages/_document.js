import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import Script from "next/script";
import Navbar from "../components/navbar";
import Footer from "../components/footermini";

//import Head from "next/head";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sunsetventures.nft/" />
          <meta property="og:title" content="Sunset Ventures Inc." />
          <meta property="og:description" content="Sunset Ventures Inc." />
          <meta
            property="og:image"
            content="https://storageapi.fleek.co/9ec37732-832c-4af1-a4fa-cc87c28c6dae-bucket/assets/img/logo-sunset.svg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://twitter.com/sunsetventuresinc"
          />
          <meta property="twitter:title" content="sunsetventuresinc" />
          <meta
            property="twitter:description"
            content="Quantitative algorithm trading."
          />
          <meta
            property="twitter:image"
            content="https://storageapi.fleek.co/9ec37732-832c-4af1-a4fa-cc87c28c6dae-bucket/assets/img/logo-sunset.svg"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="icon"
            href="https://storageapi.fleek.co/9ec37732-832c-4af1-a4fa-cc87c28c6dae-bucket/assets/img/logo-sunset.svg"
          />
        </Head>
        <body className="lightmode dark:darkmode" class="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
