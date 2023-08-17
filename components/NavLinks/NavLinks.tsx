import Link from "next/link";
import styles from "./NavLinks.module.css";

export const NavLinks = () => {
  return (
    <nav className={styles.wrap}>
      <Link className={styles.link} href="">
        Home
      </Link>
      <Link className={styles.link} href="">
        Technologies
      </Link>
      <Link className={styles.link} href="">
        Projects
      </Link>
      <Link className={styles.link} href="">
        Our team
      </Link>
      <Link className={styles.link} href="">
        Services
      </Link>
      <Link className={styles.link} href="">
        Contact
      </Link>
    </nav>
  );
};
