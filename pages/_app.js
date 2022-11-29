import { UserProvider } from "@auth0/nextjs-auth0";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { NextUIProvider } from "@nextui-org/react";
import SEO from "../components/seo";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider attribute="class">
        <NextUIProvider>
          <SEO />
          <Component {...pageProps} />
        </NextUIProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
