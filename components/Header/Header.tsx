import {Logo} from "../Logo/Logo";
import {NavLinks} from "../NavLinks/NavLinks";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Logo />
          <NavLinks />
          <LocaleSwitcher />
        </div>
      </div>
    </header>
  );
};
