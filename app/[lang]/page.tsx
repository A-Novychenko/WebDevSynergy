import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { Hero } from "@/components/Sections/Hero/Hero";

import { arraySkills } from "@/data/skills";
import { Technologies } from "@/components/Sections/Technologies/Technologies";
import { Team } from "@/components/Sections/Team/Team";

export default async function Home({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Hero />
      <Technologies arraySkills={arraySkills} />
      <Team />
    </>
  );
}
