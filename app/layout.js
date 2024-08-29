import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "Vitor Botelho's Portfolio",
  description: "Brand and Product Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
      <link rel="icon" href="/jelly.png" sizes="any" />
    </html>
  );
}
