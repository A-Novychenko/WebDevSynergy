import {getDictionary} from "@/get-dictionary";
import {arrayTeam} from "@/data/team";
import {arraySkills} from "@/data/skills";

import {Summary} from "@/components/Sections/ProfilePage/Summary/Summary";
import {SocialLinks} from "@/components/Sections/ProfilePage/SocialLinks/SocialLinks";
import {AboutMe} from "@/components/Sections/ProfilePage/AboutMe/AboutMe";
import {Project} from "@/components/Sections/HomePage/Projects/Project";
import {Technologies} from "@/components/Sections/HomePage/Technologies/Technologies";

import styles from "./styles.module.scss";

export default async function ProfilePage({
  params: {id, lang},
}: {
  params: {id: number; lang: "uk" | "en"};
}) {
  const dictionary = await getDictionary(lang);

  const getPerson = arrayTeam.find(
    (person) => person.id.toString() === id.toString()
  );

  if (!getPerson) {
    throw new Error("try again later");
  }

  const person: Person = getPerson;

  return (
    <>
      {/* Потрібно переробити контейнери */}
      <div className={styles.container}>
        <h1 className="visually-hidden">
          {`${lang === "en" ? "Portfolio" : "Портфоліо"} ${
            person?.textFields[lang].firstName
          } 
          ${person?.textFields[lang].lastName}`}
        </h1>

        <Summary lang={lang} person={person} />
        <SocialLinks person={person} lang={lang} />
        <AboutMe person={person} lang={lang} />
      </div>

      {/* Потрібно кастомізувати дейту */}
      <Project project={dictionary} lang={lang} />
      <Technologies arraySkills={arraySkills} tech={dictionary} />
    </>
  );
}
