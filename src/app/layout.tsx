import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commercial And Advertisment ",
  description: "commercial and Advertisment plc in ethiopia around 22",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

       <head>
        <meta name="google-site-verification" content="pcNHh7Ui_wJv5H_nSB0GFOhqv26xAYmEmL9u0EuTdPE" />
        {/* <meta name="google-site-verification" content="T7lCU_iBOcZbN5BKWLH8NwJL4iBGlaxPAPiTWblGRMU" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
