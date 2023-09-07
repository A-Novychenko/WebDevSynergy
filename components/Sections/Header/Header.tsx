import {Locale} from "@/i18n-config";
import {Logo} from "../../Elements/Logo/Logo";
import {NavLinks} from "../../Elements/NavLinks/NavLinks";
import LocaleSwitcher from "../../Elements/localeSwitcher/LocaleSwitcher";
import {BurgerSwitch} from "@/components/Elements/BurgerMenu/BurgerSwitch";
import {getDictionary} from "@/get-dictionary";
import {LogoName} from "@/components/Elements/Logo/LogoName";

import styles from "./Header.module.scss";

export const Header = async ({lang}: {lang: Locale}) => {
  const dictionary = await getDictionary(lang);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <Logo />
          <LogoName />

          <>
            {/* <NavLinks lang={lang} /> */}
            <LocaleSwitcher />
            <BurgerSwitch dictionary={dictionary} />
          </>
        </div>
      </div>
    </header>
  );
};
