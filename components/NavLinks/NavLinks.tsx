import Link from "next/link";
import styles from "./NavLinks.module.css";
import {getDictionary} from "@/get-dictionary";
import {Locale} from "@/i18n-config";

export const NavLinks = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <nav className={styles.wrap}>
      <Link className={styles.link} href="">
        {dictionary["server-component"].links.home}
      </Link>
      <Link className={styles.link} href="">
        {dictionary["server-component"].links.technologies}
      </Link>
      <Link className={styles.link} href="">
        {dictionary["server-component"].links.projects}
      </Link>
      <Link className={styles.link} href="">
        {dictionary["server-component"].links.ourTeam}
      </Link>
      <Link className={styles.link} href="">
        {dictionary["server-component"].links.services}
      </Link>
      <Link className={styles.link} href="">
        {dictionary["server-component"].links.contact}
      </Link>
    </nav>
  );
};
