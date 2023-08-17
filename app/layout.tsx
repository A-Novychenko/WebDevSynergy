import {BacgroundParticle} from "@/components/BacgroundParticle/BacgroundParticle";
import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/Header/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "ProJuniors-portfolio",
  description: "ProJuniors-portfolio",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <BacgroundParticle />
        {children}
      </body>
    </html>
  );
}
