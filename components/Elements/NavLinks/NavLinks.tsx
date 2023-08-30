import Link from "next/link";
import styles from "./NavLinks.module.css";
import {getDictionary} from "@/get-dictionary";
import {Locale} from "@/i18n-config";

export const NavLinks = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <nav className={styles.wrap}>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].links.home}
      >
        {dictionary["server-component"].links.home}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].links.technologies}
      >
        {dictionary["server-component"].links.technologies}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].links.projects}
      >
        {dictionary["server-component"].links.projects}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].links.ourTeam}
      >
        {dictionary["server-component"].links.ourTeam}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].links.services}
      >
        {dictionary["server-component"].links.services}
      </Link>
      <Link
        className={styles.link}
        href=""
        data-item={dictionary["server-component"].links.contact}
      >
        {dictionary["server-component"].links.contact}
      </Link>
    </nav>
  );
};
