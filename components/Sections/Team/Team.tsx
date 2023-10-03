import Image from "next/image";

import styles from "./team.module.scss";

type TeamProps = {
  arrayTeam: Person[];
  lang: "uk" | "en";
  teams: Dictionaries;
};

export const Team = ({ arrayTeam, lang, teams }: TeamProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h4 className={styles.text_above_header}>
          {teams["server-component"].team.above_header}
        </h4>
        <h3 className={styles.title}>{teams["server-component"].team.title}</h3>
        <p className={styles.subtitle}>
          {teams["server-component"].team.subtitle}
        </p>
        <ul className={styles.wraper_dev}>
          {arrayTeam.map((team) => {
            return (
              <li className={styles.card} key={team.id}>
                <Image
                  className={styles.img}
                  src={team.img}
                  alt={team.textFields.en.firstName}
                />
                <div className={styles.wraper_dev_first}>
                  <div>
                    <h4 className={styles.last_name}>
                      {team.textFields[lang].firstName}
                    </h4>
                    <h4 className={styles.last_name}>
                      {team.textFields[lang].lastName}
                    </h4>
                  </div>
                  <p className={`${styles.subtitle} ${styles.subtitle_width}`}>
                    {team.profession}
                  </p>
                  <ul className={styles.wraper_social}>
                    <li className={styles.social_hover} key={team.linkedin.linkedin}>
                      <a href={team.linkedin.url} target="_blank">
                        <Image src={team.linkedin.linkedin} alt={"linkedin"} />
                      </a>
                    </li>
                    <li className={styles.social_hover} key={team.telegram.telegram}>
                      <a href={team.telegram.url} target="_blank">
                        <Image src={team.telegram.telegram} alt={"telegram"} />{" "}
                      </a>
                    </li>
                    <li className={styles.social_hover} key={team.github.github}>
                      <a href={team.github.url} target="_blank">
                        <Image src={team.github.github} alt={"github"} />
                      </a>
                    </li>
                    <li className={styles.social_hover} key={team.resume.resume}>
                      <a href={team.resume.url} target="_blank">
                        <Image src={team.resume.resume} alt={"resume"} />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
