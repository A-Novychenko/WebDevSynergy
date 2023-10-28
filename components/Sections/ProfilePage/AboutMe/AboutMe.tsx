import Image from "next/image";
import styles from "./AboutMe.module.scss";

type AboutMeProps = {
  person: Person;
  lang: string;
};

export const AboutMe = ({person, lang}: AboutMeProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.content_box}>
        <div className={styles.photo_wrap}>
          <Image
            className={styles.photo}
            src={`${person?.imgAbout.src}`}
            alt={`${lang === "en" ? "Photo" : "Фото"} ${
              person?.textFields[lang].firstName
            } ${person?.textFields[lang].lastName}`}
            width={544}
            height={544}
          />
        </div>
        <div className={styles.text_box}>
          <p className={styles.address}>{person?.address[lang]}</p>
          <h2 className={styles.sub_title}>
            {`${lang === "en" ? " About me" : "Про мене"} `}
          </h2>
          <p className={styles.descr}>{person?.profile.aboutMe[lang]}</p>
        </div>
      </div>
    </section>
  );
};
