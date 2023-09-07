import Link from "next/link";

import {getDictionary} from "@/get-dictionary";
import {Locale} from "@/i18n-config";

import styles from "./NavLinks.module.scss";

export const NavLinks = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);

  return (
    <nav className={styles.wrap}>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].header.links.home}
      >
        {dictionary["server-component"].header.links.home}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].header.links.technologies}
      >
        {dictionary["server-component"].header.links.technologies}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].header.links.projects}
      >
        {dictionary["server-component"].header.links.projects}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].header.links.ourTeam}
      >
        {dictionary["server-component"].header.links.ourTeam}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].header.links.services}
      >
        {dictionary["server-component"].header.links.services}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].header.links.contact}
      >
        {dictionary["server-component"].header.links.contact}
      </Link>
    </nav>
  );
};
