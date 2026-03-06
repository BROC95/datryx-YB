import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});


export const metadata = {
  title: "Caramelo Boutique | Regalos Personalizados y Costura Creativa",
   icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  description:
    "Caramelo Boutique ofrece accesorios personalizados, vinchas y productos de sublimación para eventos y moda.",
  keywords: [
    "vinchas",
    "accesorios personalizados",
    "sublimación",
    "vinchas para niñas",
    "accesorios boutique",
    "accesorios personalizados Argentina"
  ],
  openGraph: {
    title: "Caramelo Boutique",
    description:
      "Vinchas, accesorios y productos personalizados para eventos.",
    url: "https://caramelo-boutique.netlify.app",
    siteName: "Caramelo Boutique",
    images: [
      {
        url: "/public/logo-caramelo.png",
        width: 1200,
        height: 630
      }
    ],
    type: "website"
  }
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans text-stone-800 bg-stone-50" suppressHydrationWarning>{children}</body>
    </html>
  );
}
