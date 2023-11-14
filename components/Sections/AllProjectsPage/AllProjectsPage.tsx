"use client";
import styles from "./AllProjectsPage.module.scss";
import { projects } from "../../../data/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import arrow from "@/public/arrow.svg";

type TechIcon = string;

type ProjectProops = {
  lang: "uk" | "en";
  project: Dictionaries;
};

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
};

export const AllProjectsPage = ({ lang, project }: ProjectProops) => {
  const [filter, setFilter] = useState<"all" | "developer" | "design">("all");
  const [shuffledProjects, setShuffledProjects] = useState<any[]>([]);

  useEffect(() => {
    setShuffledProjects(shuffleArray(projects));
  }, [filter]);

  const handleFilterChange = (newFilter: "all" | "developer" | "design") => {
    setFilter(newFilter);
  };

  const filteredProjects = shuffledProjects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "developer") return p.role === "developer";
    if (filter === "design") return p.role === "designer";
    return false;
  });

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.subHeader}>
          {project["server-component"].project.subtitle}
        </h2>
        <h1 className={styles.header}>
          {project["server-component"].project.title}
        </h1>
        <p className={styles.description}>
          {project["server-component"].project.description}
        </p>
        <div className={styles.btnWrapper}>
          <button
            type="button"
            className={`${styles.btn_left} ${
              filter === "all" ? styles.active : ""
            }`}
            onClick={() => setFilter("all")}>
            {project["server-component"].project.btnAll}
          </button>
          <button
            type="button"
            className={`${styles.btn} ${
              filter === "developer" ? styles.active : ""
            }`}
            onClick={() => setFilter("developer")}>
            {project["server-component"].project.btnDeveloper}
          </button>
          <button
            type="button"
            className={`${styles.btn_right} ${
              filter === "design" ? styles.active : ""
            }`}
            onClick={() => setFilter("design")}>
            {project["server-component"].project.btnDesign}
          </button>
        </div>
        <ul className={styles.projectList}>
          {filteredProjects.map(
            ({ title, poster, id, role, discription, techIcon }) => (
              <li key={id} className={styles.projectItem}>
                <div className={styles.projectsThumb}>
                  <div className={styles.projectsImgThumb}>
                    <Image src={poster} alt={title} className={styles.img} />
                    <span className={styles.projectsRole}>{role}</span>
                  </div>
                  <div className={styles.nameTechWrapper}>
                    <h3 className={styles.projectName}>{title}</h3>
                    <button type="button" className={styles.btnProject}>
                      <Image
                        className={styles.icon}
                        src={arrow}
                        alt="icon-arrow"
                        width={16}
                        height={14}
                        priority
                      />
                    </button>
                    <span>
                      <ul className={styles.skill_list}>
                        {techIcon
                          .slice(0, 4)
                          .map((element: TechIcon, index: number) => {
                            return (
                              <li key={index}>
                                <Image
                                  className={styles.skillsIcon}
                                  src={element}
                                  alt={element}
                                  width={24}
                                  height={24}
                                />
                              </li>
                            );
                          })}
                      </ul>
                    </span>
                  </div>
                  <p>{discription[lang]}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};
