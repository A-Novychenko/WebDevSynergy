import type {Metadata, ResolvingMetadata} from "next";

import {getDictionary} from "@/get-dictionary";
import {Locale} from "../../../i18n-config";
import {TG_form} from "./TG_form";

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
    title: `WDS | ${lang === "en" ? "TEST PAGE" : "ТЕСТОВА СТОРІНКА"}`,
  };
}

export default async function TGformPage({
  params: {lang},
}: {
  params: {lang: Locale};
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <h1 style={{color: "white", textAlign: "center", paddingBottom: 40}}>
        TGformPage
      </h1>
      <TG_form />
    </>
  );
}
