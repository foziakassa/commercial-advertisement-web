import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config.js';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commercial and Advertisement - Professional Marketing Services Ethiopia",
  description: "Leading commercial and advertisement company in Ethiopia offering professional marketing, branding, printing, and design services for businesses.",
  keywords: ["commercial advertisement", "marketing services Ethiopia", "branding", "printing services", "graphic design", "business marketing", "Ethiopia advertising"],
  authors: [{ name: "Commercial and Advertisement" }],
  creator: "Commercial and Advertisement",
  publisher: "Commercial and Advertisement",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Commercial and Advertisement",
    title: "Commercial and Advertisement - Professional Marketing Services",
    description: "Leading commercial and advertisement company in Ethiopia offering professional marketing, branding, printing, and design services for businesses.",
    images: [
      {
        url: "https://yourwebsite.com/image/logo.png",
        width: 1200,
        height: 630,
        alt: "Commercial and Advertisement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial and Advertisement - Professional Marketing Services",
    description: "Leading commercial and advertisement company in Ethiopia offering professional marketing, branding, printing, and design services for businesses.",
    images: ["https://yourwebsite.com/image/logo.png"],
  },
  verification: {
    google: "pcNHh7Ui_wJv5H_nSB0GFOhqv26xAYmEmL9u0EuTdPE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Commercial and Advertisement",
    url: "https://yourwebsite.com",
    logo: "https://yourwebsite.com/image/logo.png",
    description: "Leading commercial and advertisement company in Ethiopia offering professional marketing, branding, printing, and design services for businesses.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ET",
      addressRegion: "Addis Ababa",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Amharic"],
    },
    sameAs: [
      "https://www.facebook.com/yourpage",
      "https://www.instagram.com/yourpage",
      "https://www.linkedin.com/company/yourpage",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pcNHh7Ui_wJv5H_nSB0GFOhqv26xAYmEmL9u0EuTdPE" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
