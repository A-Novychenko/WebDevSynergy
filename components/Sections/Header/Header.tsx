import {Locale} from "@/i18n-config";
import {Logo} from "../../Elements/Logo/Logo";
import {NavLinks} from "../../Elements/NavLinks/NavLinks";
import LocaleSwitcher from "../../Elements/localeSwitcher/LocaleSwitcher";

import styles from "./Header.module.css";

export const Header = ({lang}: {lang: Locale}) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Logo />
          <NavLinks lang={lang} />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};
