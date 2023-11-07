"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Locale } from "@/i18n-config";

import styles from "./NavLinks.module.scss";

const dictionary = {
  en: {
    home: "Home",
    services: "Services",
    projects: "Projects",
    technologies: "Technologies",
    ourTeam: "Our team",
    contact: "Contact",
  },
  uk: {
    home: "Домашня",
    services: "Послуги",
    projects: "Проекти",
    technologies: "Технології",
    ourTeam: "Команда",
    contact: "Контакти",
  },
};

export const NavLinks = ({ lang }: { lang: Locale }) => {
  const pathname = usePathname();
  const currentPath = pathname.slice(4);

  return (
    <nav className={styles.wrap}>
      <ul className={styles.link_list}>
        <li className={styles.link_item}>
          <Link
            href={`/${lang}/`}
            style={{ color: currentPath === "" ? "#0ad87a" : "#f6f7f9" }}
            className={styles.link}
          >
            {dictionary[`${lang}`].home}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link
            href={`/${lang}/services`}
            style={{
              color: currentPath === "services" ? "#0ad87a" : "#f6f7f9",
            }}
            className={styles.link}
          >
            {dictionary[`${lang}`].services}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link
            href={`/${lang}/projects`}
            style={{
              color: currentPath === "projects" ? "#0ad87a" : "#f6f7f9",
            }}
            className={styles.link}
          >
            {dictionary[`${lang}`].projects}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link
            href={`/${lang}/technologies`}
            style={{
              color: currentPath === "technologies" ? "#0ad87a" : "#f6f7f9",
            }}
            className={styles.link}
          >
            {dictionary[`${lang}`].technologies}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link
            href={`/${lang}/ourteam`}
            style={{
              color: currentPath === "ourteam" ? "#0ad87a" : "#f6f7f9",
              whiteSpace: "nowrap",
            }}
            className={styles.link}
          >
            {dictionary[`${lang}`].ourTeam}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link
            href={`/${lang}/#contact`}
            style={{ color: currentPath === "contact" ? "#0ad87a" : "#f6f7f9" }}
            className={styles.link_contact}
          >
            {dictionary[`${lang}`].contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
