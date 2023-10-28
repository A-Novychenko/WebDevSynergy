import type {Metadata, ResolvingMetadata} from "next";
import {Roboto} from "next/font/google";

import {Locale} from "../../i18n-config";
import {Header} from "@/components/Sections/Header/Header";
import {Footer} from "@/components/Sections/Footer/Footer";
import {ModalProvider} from "@/components/Providers/ModalProvider";
import {BacgroundParticle} from "@/components/Elements/BacgroundParticle/BacgroundParticle";

import "../globals.css";
import styles from "./page.module.scss";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
});

// export const metadata: Metadata = {
//   description:
//     "WebDevSynergy (WDS) - web studio for the development of design and sites. Design, landing, corporate sites, web applications",
// };

// type Props = {
//   params: {lang: "uk" | "en"};
//   searchParams: {[key: string]: string | string[] | undefined};
// };

// export async function generateMetadata(
//   {params, searchParams}: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const lang = params.lang;

//   return {
//     title: `WDS | ${lang === "en" ? "Home" : "Головна"}`,
//   };
// }

export default function RootLayout({
  children,
  params: {lang},
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  return (
    <html lang={lang}>
      <body className={roboto.className}>
        <BacgroundParticle />

        <ModalProvider>
          <Header lang={lang} />
        </ModalProvider>

        <main className={styles.main_container}>{children}</main>

        <Footer lang={lang} />
      </body>
    </html>
  );
}
