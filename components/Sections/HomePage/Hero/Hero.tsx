import Link from "next/link";

import styles from "./Hero.module.scss";

type HeroProps = {
  lang: "uk" | "en";
  dictionary: Dictionaries;
};

export const Hero = ({ dictionary, lang }: HeroProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mainThumb}>
          <h2 className={styles.subHeader}>
            {dictionary["server-component"].hero.subtitle}
          </h2>
          <h1 className={styles.header}>
            {dictionary["server-component"].hero.titleStart}
            <span className={styles.headerAccent}>
              {dictionary["server-component"].hero.accents}
            </span>
            {dictionary["server-component"].hero.titleEnd}
          </h1>
          <p className={styles.description}>
            {dictionary["server-component"].hero.description}
          </p>
          <div className={styles.btnThumb}>
            <button className={styles.accentBtn} type="button">
              <Link href={`/${lang}/services`} className={styles.link}>
                {dictionary["server-component"].hero.btnSecvice}
              </Link>
            </button>
            <button className={styles.btn} type="button">
              <Link href={`/${lang}/projects`} className={styles.link}>
                {dictionary["server-component"].hero.btnProject}
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.imgThumb}></div>
      </div>
    </section>
  );
};
