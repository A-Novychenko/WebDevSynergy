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
    title: `WDS | ${lang === "en" ? "Technologies" : "Технології"}`,
  };
}

export default async function TechnologiesPage({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return <h1 style={{color: "white", textAlign: "center"}}> Technologies </h1>;
}
