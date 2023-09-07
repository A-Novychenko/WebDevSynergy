import Link from "next/link";

import {Backdrop} from "./Backdrop";
import {useModal} from "@/components/Providers/ModalProvider";

import styles from "./Burger.module.scss";

export const BurgerMenu = ({dictionary}: {dictionary: Dictionaries}) => {
  const {isOpen, openModal} = useModal();
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
    </Backdrop>
  );
};
