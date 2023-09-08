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
    <>
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.nav_links_wrap}>
            <div className={styles.nav_links}>
              <NavLinks lang={lang} />
            </div>
            <div className={styles.logo_wrap}>
              <Logo />
              <p className={styles.logo_title}>WebDevSynergy</p>
            </div>
          </div>

          <div className={styles.contacts_wrap}>
            <ul id="contact" className={styles.contacts_list}>
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
              <li className={styles.icon_item_pl}>
                <Image
                  className={styles.flag_pl}
                  src={flagUa}
                  alt="flag ukraine"
                  width={36}
                  height={36}
                />
              </li>
              <li className={styles.icon_item_ua}>
                <Image
                  className={styles.flag_ua}
                  src={flagPl}
                  alt="flag ukraine"
                  width={36}
                  height={36}
                />
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <footer className={styles.footer_desc}>
        <div className={styles.wrap_desc}>
          <div className={styles.nav_links_wrap_desc}>
            <div className={styles.logo_wrap_desc}>
              <Logo />
              <p className={styles.logo_title_desc}>WebDevSynergy</p>
            </div>
            <div className={styles.nav_links_desc}>
              <NavLinks lang={lang} />
            </div>
            <ul className={styles.icon_list_desc}>
              <li className={styles.icon_item_ua_desc}>
                <Image
                  className={styles.flag_ua_desc}
                  src={flagUa}
                  alt="flag ukraine"
                  width={36}
                  height={36}
                />
              </li>
              <li className={styles.icon_item_pl_desc}>
                <Image
                  className={styles.flag_pl_desc}
                  src={flagPl}
                  alt="flag ukraine"
                  width={36}
                  height={36}
                />
              </li>
            </ul>
          </div>

          <ul id="contact" className={styles.contacts_list_desc}>
            <li>
              <Link
                href="mailto:wds.webdevsynergy@gmail.com"
                className={styles.contacts_link_desc}
              >
                wds.webdevsynergy@gmail.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:+380665443225"
                className={styles.contacts_link_desc}
              >
                +380 665 443 225
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
