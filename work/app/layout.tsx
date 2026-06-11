import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://verdux.co";
const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VERDUX | Premium coworking and startup hub in Port Harcourt",
  description:
    "Join the VERDUX waitlist for early access to a premium coworking space and startup hub built around reliable power, enterprise internet, and serious community.",
  openGraph: {
    title: "VERDUX Waitlist",
    description:
      "Premium coworking, enterprise internet, and a serious founder community in Port Harcourt.",
    url: siteUrl,
    siteName: "VERDUX",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "VERDUX Waitlist",
    description:
      "Join the waitlist for early access to Port Harcourt's premium coworking and startup hub."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
