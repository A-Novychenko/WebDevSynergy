import {BacgroundParticle} from "@/components/BacgroundParticle/BacgroundParticle";
import "../globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/Header/Header";

const inter = Inter({subsets: ["latin"]});
import {Locale, i18n} from "../../i18n-config";

export const metadata: Metadata = {
  title: "ProJuniors-portfolio",
  description: "ProJuniors-portfolio",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <BacgroundParticle />
        <Header lang={params.lang} />

        {children}
      </body>
    </html>
  );
}