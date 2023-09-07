import Link from "next/link";

import styles from "./Burger.module.scss";

export const BurgerMenu = ({dictionary}: {dictionary: Dictionaries}) => {
  return (
    <div className={styles.burger_menu}>
      <ul className={styles.burger_menu_list}>
        <li className={styles.item}>
          <Link
            href="#"
            data-item={dictionary["server-component"].header.links.home}
            className={styles.link}
          >
            {dictionary["server-component"].header.links.home}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#"
            data-item={dictionary["server-component"].header.links.services}
            className={styles.link}
          >
            {dictionary["server-component"].header.links.services}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#"
            data-item={dictionary["server-component"].header.links.projects}
            className={styles.link}
          >
            {dictionary["server-component"].header.links.projects}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#"
            data-item={dictionary["server-component"].header.links.technologies}
            className={styles.link}
          >
            {dictionary["server-component"].header.links.technologies}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#"
            data-item={dictionary["server-component"].header.links.ourTeam}
            className={styles.link}
          >
            {dictionary["server-component"].header.links.ourTeam}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href="#"
            data-item={dictionary["server-component"].header.links.contact}
            className={styles.link_contact}
          >
            {dictionary["server-component"].header.links.contact}
          </Link>
        </li>
      </ul>
    </div>
  );
};
