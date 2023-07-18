//import { UserProvider } from "@auth0/nextjs-auth0";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { MyUserContextProvider } from "../utils/useUser";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ThemeProvider } from "next-themes";
import "../styles/tailwind.css";
import "../styles/custom.css";
import { NextUIProvider } from "@nextui-org/react";
import SEO from "../components/seo";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // Create a new supabase browser client on every first render.
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ThemeProvider attribute="class">
        <NextUIProvider>
          <MyUserContextProvider>
            <SEO />
            <Component {...pageProps} />
          </MyUserContextProvider>
        </NextUIProvider>
      </ThemeProvider>
    </SessionContextProvider>
  );
}

//export default MyApp;
