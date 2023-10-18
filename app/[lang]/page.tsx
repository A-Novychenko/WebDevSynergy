import {getDictionary} from "../../get-dictionary";
import {Locale} from "../../i18n-config";
import {Hero} from "@/components/Sections/Hero/Hero";

import {Contact} from "@/components/Sections/Contact/Contact";

import {arraySkills} from "@/data/skills";
import {Technologies} from "@/components/Sections/Technologies/Technologies";
import {Team} from "@/components/Sections/Team/Team";
import {arrayTeam} from "@/data/team";
import {Services} from "@/components/Sections/Services/Services";
import {arrayServices} from "@/data/services";
import {BannerSwiper} from "@/components/Elements/ProjectsSwiper/testSwiper";
import {Project} from "@/components/Sections/Projects/Project";

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

      <Project lang={lang} />
    </>
  );
}
