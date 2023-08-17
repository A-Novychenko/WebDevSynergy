"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {i18n} from "../../i18n-config";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  console.log("first", typeof pathName.slice(1, 3));
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div>
      <ul className={styles.list}>
        {i18n.locales.map((locale) => {
          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                className={
                  pathName.slice(1, 3) === locale ? styles.active : styles.non
                }
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
