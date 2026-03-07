import type { Metadata } from "next";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Datrix YB | Soluciones Tecnológicas",
    template: "%s | Datrix YB",
  },
  description:
    "Datrix YB desarrolla soluciones tecnológicas a medida: aplicaciones web, software empresarial y transformación digital para tu negocio.",
  keywords: [
    "desarrollo web",
    "soluciones tecnológicas",
    "software a medida",
    "transformación digital",
    "desarrollo de aplicaciones",
    "empresa tecnológica Argentina",
  ],
  authors: [{ name: "Datrix YB" }],
  creator: "Datrix YB",
  metadataBase: new URL("https://datrix-yb.netlify.app"), // ✏️ reemplazá con tu dominio real
  openGraph: {
    title: "Datrix YB | Soluciones Tecnológicas",
    description:
      "Desarrollamos soluciones tecnológicas a medida para impulsar tu negocio.",
    url: "https://datrix-yb.netlify.app", // ✏️ reemplazá con tu dominio real
    siteName: "Datrix YB",
    images: [
      {
        url: "/public/logo.svg", // ✏️ agregá una imagen 1200x630
        width: 1200,
        height: 630,
        alt: "Datrix YB - Soluciones Tecnológicas",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Datrix YB | Soluciones Tecnológicas",
    description: "Soluciones tecnológicas a medida para tu negocio.",
    images: ["/public/logo.svg"],
  },
  verification: {
    google: "lwwLuQvKu0eg3XFvk_MCfeVkIYvYevYTmPoVBZc7Y8I",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
         {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E173HMC4FN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E173HMC4FN');
          `}
        </Script>
          <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

