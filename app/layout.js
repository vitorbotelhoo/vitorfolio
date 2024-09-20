import { Gabarito } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  weight: '400',
  subsets: ['latin'], });

const manrope = Manrope({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Vitor Portfolio",
  description: "Product Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
      <link rel="icon" href="/jelly.png" sizes="any" />
    </html>
  );
}
