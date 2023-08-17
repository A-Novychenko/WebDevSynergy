import {Logo} from "../Logo/Logo";
import {NavLinks} from "../NavLinks/NavLinks";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Logo />
          <NavLinks />
        </div>
      </div>
    </header>
  );
};
