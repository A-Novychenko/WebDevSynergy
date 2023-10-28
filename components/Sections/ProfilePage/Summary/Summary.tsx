import Link from "next/link";
import styles from "./Summary.module.scss";
import Image from "next/image";

type SummaryProps = {
  person: Person;
  lang: string;
};

export const Summary = ({person, lang}: SummaryProps) => {
  return (
    <section>
      <div className={styles.content_box}>
        <div className={styles.text_box}>
          <p className={styles.role}>Fullstack developer, Team Lead</p>
          <p className={styles.intro}>
            {`${lang === "en" ? "Hello, I am" : "Привіт, я"}`}
            <span className={styles.intro_name}>
              {` ${person?.textFields[lang].firstName} 
          ${person?.textFields[lang].lastName}`}
            </span>
          </p>
          <p className={styles.summary}>{`${person?.profile.summary[lang]}`}</p>

          <div className={styles.link_box}>
            <Link className={styles.order_link} href={`/${lang}/services`}>
              {lang === "en" ? "Order service" : "Замовити послугу"}
            </Link>
            <Link className={styles.projects_link} href={`/${lang}/projects`}>
              {lang === "en" ? "Check projects" : "Переглянути проекти"}
            </Link>
          </div>
        </div>

        <div className={styles.photo_wrap}>
          <Image
            className={styles.photo}
            src={`${person?.img.src}`}
            alt={`${lang === "en" ? "Photo" : "Фото"} ${
              person?.textFields[lang].firstName
            } ${person?.textFields[lang].lastName}`}
            width={544}
            height={544}
          />
        </div>
      </div>
    </section>
  );
};
