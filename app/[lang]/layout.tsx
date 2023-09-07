import {BacgroundParticle} from "@/components/Elements/BacgroundParticle/BacgroundParticle";
import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import {Locale} from "../../i18n-config";

import {Header} from "@/components/Sections/Header/Header";
import {Footer} from "@/components/Sections/Footer/Footer";
import {ModalProvider} from "@/components/Providers/ModalProvider";

import "../globals.css";
import styles from "./page.module.scss";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "WDS | Home",
  description:
    "WebDevSynergy (WDS) - web studio for the development of design and sites. Design, landing, corporate sites, web applications",
};

export default function RootLayout({
  children,
  params: {lang},
}: {
  children: React.ReactNode;
  params: {lang: Locale};
}) {
  return (
    <html lang={lang}>
      <body className={poppins.className}>
        <BacgroundParticle />
        <ModalProvider>
          <Header lang={lang} />
        </ModalProvider>

        <main className={styles.main_container}>{children}</main>

        <Footer lang={lang} />
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
