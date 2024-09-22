import { Gabarito, Manrope } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-gabarito',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '700'],
});

export const metadata = {
  title: "Vitor Portfolio",
  description: "Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gabarito.variable} ${manrope.variable}`}>
      <body className={gabarito.className}>{children}</body>
      <link rel="icon" href="/jelly.png" sizes="any" />
    </html>
  );
}
