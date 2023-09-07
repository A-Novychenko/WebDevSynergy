import Link from "next/link";
import {Locale} from "@/i18n-config";
import {Logo} from "../../Elements/Logo/Logo";
import {NavLinks} from "../../Elements/NavLinks/NavLinks";
import flagUa from "../../../public/icons/flag-ukraine.svg";
import flagPl from "../../../public/icons/flag-poland.svg";

import styles from "./Footer.module.scss";
import Image from "next/image";

export const Footer = ({lang}: {lang: Locale}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.logo_wrap}>
          <Logo />
          <p className={styles.logo_title}>WebDevSynergy</p>
        </div>

        <ul className={styles.contacts_list}>
          <li>
            <Link
              href="mailto:wds.webdevsynergy@gmail.com"
              className={styles.contacts_link}
            >
              wds.webdevsynergy@gmail.com
            </Link>
          </li>
          <li>
            <Link href="tel:+380665443225" className={styles.contacts_link}>
              +380 665 443 225
            </Link>
          </li>
        </ul>
        <ul className={styles.icon_list}>
          <li>
            <Image src={flagUa} alt="flag ukraine" width={36} height={36} />
          </li>
          <li>
            <Image src={flagPl} alt="flag ukraine" width={36} height={36} />
          </li>
        </ul>

        {/* <NavLinks lang={lang} /> */}
      </div>
    </footer>
  );
};
