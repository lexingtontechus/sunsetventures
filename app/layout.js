import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Providers } from "./providers";
import "./index.css";
import "./globals.css";
import { Inter } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sunset Ventures Inc.",
  description:
    "Sunset Ventures, Quantitative Trading, Cryptocurrency Trading, Smart Algorithms,Smart FX.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#ea580c",
          colorText: "#ea580c",
          colorInputText: "#075985",
        },
        layout: {
          helpPageUrl: "/contact",
          logoImageUrl: "/logo_sunset.svg",
          logoPlacement: "inside",
          privacyPageUrl: "/privacy",
          showOptionalFields: true,
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "iconButton",
          termsPageUrl: "/terms",
        },
      }}
    >
      <html suppressHydrationWarning lang="en" className={inter.className}>
        <body>
          <Providers>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
