import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Providers } from "./providers";
import "./index.css";
import "./globals.css";

export const metadata = {
  title: "Sunset Ventures Inc.",
  description:
    "Sunset Ventures, Quantitative Trading, Cryptocurrency Trading, Smart Algorithms,Smart FX.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      //className="lightmode dark:darkmode"
    >
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          variables: {
            colorPrimary: "#ea580c",
            colorText: "white",
          },
          layout: {
            helpPageUrl: "/contact",
            logoImageUrl: "/img/logo-sunset.svg",
            logoPlacement: "inside",
            privacyPageUrl: "/privacy",
            showOptionalFields: true,
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "iconButton",
            termsPageUrl: "/terms",
          },
        }}
      >
        <Providers>
          <body>
            <Navbar />
            <div className="mb-8">{children}</div>
            <Footer />
          </body>
        </Providers>
      </ClerkProvider>
    </html>
  );
}
