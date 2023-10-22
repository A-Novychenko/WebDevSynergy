import { ProjectSwiper } from "@/components/Elements/ProjectsSwiper/ProjectSwiper";
import { Locale } from "@/i18n-config";
import styles from "./project.module.scss";

type ProjectProops = {
  lang: "uk" | "en";
  project: Dictionaries;
};

export const Project = ({ lang, project }: ProjectProops) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>
          {project["server-component"].project.subtitle}
        </p>
        <h2 className={styles.title}>{project["server-component"].project.title}</h2>
        <p className={styles.description}>{project["server-component"].project.description}</p>
        <ProjectSwiper lang={lang} />
      </div>
    </section>
  );
};
