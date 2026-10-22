import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { backgroundAssets } from "../../public/index";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:3000";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "WESMILAP International Limited | Engineering, Construction & Project Management",
    template: "%s | WESMILAP International Limited",
  },

  description:
    "WESMILAP International Limited provides engineering, construction, power infrastructure, civil and structural works, and project management services in Nigeria.",

  applicationName: "WESMILAP International Limited",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "WESMILAP International Limited",
    title: "WESMILAP International Limited | Engineering & Construction",
    description:
      "Engineering, construction, power infrastructure, and project management solutions in Nigeria.",
    locale: "en_NG",
    images: [
      {
        url: backgroundAssets.landscape,
        width: 1200,
        height: 630,
        alt: "WESMILAP International Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "WESMILAP International Limited",
    description:
      "Engineering, construction, power infrastructure, and project management solutions in Nigeria.",
    images: [backgroundAssets.landscape],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WESMILAP International Limited",
              url: siteUrl,
              description:
                "Engineering, construction, power infrastructure, and project management services in Nigeria.",
              logo: `${siteUrl.replace(/\/$/, "")}/wesmilac_logo_color.jpeg`,
              areaServed: {
                "@type": "Country",
                name: "Nigeria",
              },
              knowsAbout: [
                "Engineering",
                "Civil and structural construction",
                "Power infrastructure",
                "Project management",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
