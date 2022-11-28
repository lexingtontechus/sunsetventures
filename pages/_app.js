import { UserProvider } from "@auth0/nextjs-auth0";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import SEO from "../components/seo";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "sunset/meeting",
        buttonText: "Book Us",
        buttonColor: "#18181b",
        buttonTextColor: "#fafafa",
        buttonPosition: "bottom-left",
      });
      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#18181b" },
        },
      });
    })();
  }, []);
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
