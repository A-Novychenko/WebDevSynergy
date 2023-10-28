import {Contact} from "@/components/Sections/HomePage/Contact/Contact";

import type {Metadata, ResolvingMetadata} from "next";

import {getDictionary} from "@/get-dictionary";
import {Locale} from "../../../i18n-config";

type Props = {
  params: {lang: "uk" | "en"};
  searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata(
  {params, searchParams}: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const lang = params.lang;

  return {
    title: `WDS | ${lang === "en" ? "Services" : "Послуги"}`,
  };
}

export default async function ServicesPage({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Contact dictionary={dictionary} />
    </>
  );
}
