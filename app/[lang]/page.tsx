import type {Metadata, ResolvingMetadata} from "next";

import {getDictionary} from "../../get-dictionary";
import {Locale} from "../../i18n-config";
import {Hero} from "@/components/Sections/HomePage/Hero/Hero";

import {Contact} from "@/components/Sections/HomePage/Contact/Contact";

import {arraySkills} from "@/data/skills";
import {Technologies} from "@/components/Sections/HomePage/Technologies/Technologies";
import {Team} from "@/components/Sections/HomePage/Team/Team";
import {arrayTeam} from "@/data/team";
import {Services} from "@/components/Sections/HomePage/Services/Services";
import {arrayServices} from "@/data/services";

import {Project} from "@/components/Sections/HomePage/Projects/Project";

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
    title: `WDS | ${lang === "en" ? "Home" : "Головна"}`,
  };
}

export default async function Home({params: {lang}}: {params: {lang: Locale}}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Hero dictionary={dictionary} lang={lang} />
      <Services
        services={dictionary}
        lang={lang}
        arrayServices={arrayServices}
      />

      <Technologies arraySkills={arraySkills} tech={dictionary} />
      <Team arrayTeam={arrayTeam} lang={lang} teams={dictionary} />

      <Contact dictionary={dictionary} />

      <Project lang={lang} project={dictionary} />
    </>
  );
}
