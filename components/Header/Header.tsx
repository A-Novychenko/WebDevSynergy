import {Locale} from "@/i18n-config";
import {Logo} from "../Logo/Logo";
import {NavLinks} from "../NavLinks/NavLinks";
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher";

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
