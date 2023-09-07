import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { Hero } from "@/components/Sections/Hero/Hero";
import { Skills } from "@/components/Sections/Skills/Skills";
import { arraySkills } from "@/data/skills";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero />
      <Hero />
      <Skills arraySkills={arraySkills} />
      <Hero />
    </>
  );
}
