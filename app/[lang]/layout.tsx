import {BacgroundParticle} from "@/components/BacgroundParticle/BacgroundParticle";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/Header/Header";
import {Locale} from "../../i18n-config";

import "../globals.css";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "WDS | Home",
  description:
    "WebDevSynergy (WDS) - web studio for the development of design and sites. Design, landing, corporate sites, web applications",
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
