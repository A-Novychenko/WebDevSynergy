import Link from "next/link";

import styles from "./Burger.module.scss";

export const BurgerMenu = () => {
  return (
    <div className={styles.burger_menu}>
      <ul className={styles.burger_menu_list}>
        <li>
          <Link href="#">Home</Link>
        </li>
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">Projects</Link>
        </li>
        <li>
          <Link href="#">Technologies</Link>
        </li>
        <li>
          <Link href="#">Our team</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
