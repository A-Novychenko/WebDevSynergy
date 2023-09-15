import Link from "next/link";
import {usePathname} from "next/navigation";

import {Backdrop} from "./Backdrop";
import {useModal} from "@/components/Providers/ModalProvider";

import styles from "./Burger.module.scss";

export const BurgerMenu = ({dictionary, lang}: BurgerProps) => {
  const {openModal} = useModal();
  const pathname = usePathname();
  const currentPath = pathname.slice(4);

  return (
    <Backdrop>
      <ul
        className={styles.burger_menu_list}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            openModal(false);
          }
        }}
      >
        <li className={styles.item}>
          <Link
            href={`/${lang}/`}
            style={{color: currentPath === "" ? "#0ad87a" : "#f6f7f9"}}
            className={styles.link}
            onClick={() => openModal(false)}
          >
            {dictionary["server-component"].header.links.home}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={`/${lang}/services`}
            style={{color: currentPath === "services" ? "#0ad87a" : "#f6f7f9"}}
            className={styles.link}
            onClick={() => openModal(false)}
          >
            {dictionary["server-component"].header.links.services}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={`/${lang}/projects`}
            style={{color: currentPath === "projects" ? "#0ad87a" : "#f6f7f9"}}
            className={styles.link}
            onClick={() => openModal(false)}
          >
            {dictionary["server-component"].header.links.projects}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={`/${lang}/technologies`}
            style={{
              color: currentPath === "technologies" ? "#0ad87a" : "#f6f7f9",
            }}
            className={styles.link}
            onClick={() => openModal(false)}
          >
            {dictionary["server-component"].header.links.technologies}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={`/${lang}/ourteam`}
            style={{color: currentPath === "ourteam" ? "#0ad87a" : "#f6f7f9"}}
            className={styles.link}
            onClick={() => openModal(false)}
          >
            {dictionary["server-component"].header.links.ourTeam}
          </Link>
        </li>
        <li className={styles.item}>
          <Link
            href={`/${lang}/#contact`}
            style={{color: currentPath === "contact" ? "#0ad87a" : "#f6f7f9"}}
            className={styles.link_contact}
            onClick={() => openModal(false)}
          >
            {dictionary["server-component"].header.links.contact}
          </Link>
        </li>
      </ul>
    </Backdrop>
  );
};
