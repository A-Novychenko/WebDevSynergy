import Link from "next/link";

import {getDictionary} from "@/get-dictionary";
import {Locale} from "@/i18n-config";

import styles from "./NavLinks.module.scss";

export const NavLinks = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);

  return (
    <nav className={styles.wrap}>
      <ul className={styles.link_list}>
        <li className={styles.link_item}>
          <Link
            className={styles.link}
            href="/"
            data-item={dictionary["server-component"].header.links.home}
          >
            {dictionary["server-component"].header.links.home}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link className={styles.link} href="">
            {dictionary["server-component"].header.links.services}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link className={styles.link} href="">
            {dictionary["server-component"].header.links.projects}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link className={styles.link} href="">
            {dictionary["server-component"].header.links.technologies}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link className={styles.link} href="">
            {dictionary["server-component"].header.links.ourTeam}
          </Link>
        </li>
        <li className={styles.link_item}>
          <Link className={styles.link_contact} href="#contact">
            {dictionary["server-component"].header.links.contact}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
