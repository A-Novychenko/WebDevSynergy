import { Contact } from "@/components/Sections/HomePage/Contact/Contact";
import styles from "../../../components/Sections/ServicesPage/CorporateWebsiteDevelopment/corporate.module.scss"

import type { Metadata, ResolvingMetadata } from "next";

import { getDictionary } from "@/get-dictionary";
import { Locale } from "../../../i18n-config";
import { CorporateDev } from "@/components/Sections/ServicesPage/CorporateWebsiteDevelopment/CorporateWebsiteDevelopment";
import { arrayServices } from "@/data/services";

type Props = {
  params: { lang: "uk" | "en" };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: `WDS | ${lang === "en" ? "Services" : "Послуги"}`,
  };
}

export default async function ServicesPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <CorporateDev
            services={dictionary}
            lang={lang}
            arrayServices={arrayServices}
          />
          <Contact dictionary={dictionary} />
        </div>
      </section>

    </>
  );
}
