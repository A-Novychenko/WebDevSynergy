import Image from "next/image";

import {Locale} from "@/i18n-config";
import {Logo} from "../../Elements/Logo/Logo";
import {NavLinks} from "../../Elements/NavLinks/NavLinks";
import LocaleSwitcher from "../../Elements/localeSwitcher/LocaleSwitcher";
import burgerMenu from "../../../public/icons/burger-menu.svg";

import styles from "./Header.module.css";
import {BurgerSwitch} from "@/components/Elements/BurgerMenu/BurgerSwitch";

export const Header = ({lang}: {lang: Locale}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Logo />

          <LocaleSwitcher />
          <BurgerSwitch />
        </div>
      </div>
    </header>
  );
};
