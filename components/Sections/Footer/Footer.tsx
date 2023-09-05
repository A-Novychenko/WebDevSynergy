import Link from "next/link";
import {Locale} from "@/i18n-config";
import {Logo} from "../../Elements/Logo/Logo";
import {NavLinks} from "../../Elements/NavLinks/NavLinks";

import styles from "./Footer.module.css";

export const Footer = ({lang}: {lang: Locale}) => {
  return (
    // <footer className={styles.footer}>
    //   <div className={styles.wrap}>
    //     <Logo />
    //     <div>
    //       <address>Kyiv, Ukraine</address>
    //       <Link
    //         href="mailto:wds.webdevsynergy@gmail.com"
    //         className={styles.contacts_link}
    //       >
    //         wds.webdevsynergy@gmail.com
    //       </Link>
    //       <Link href="tel:+380665443225" className={styles.contacts_link}>
    //         +380 665 443 225
    //       </Link>
    //     </div>
    //     <NavLinks lang={lang} />
    //   </div>
    // </footer>
    <footer>
      <p style={{color: "yellow"}}>footer</p>
    </footer>
  );
};
