"use client";

import {usePathname} from "next/navigation";
import Link from "next/link";
import {Locale, i18n} from "../../i18n-config";
import styles from "./LocaleSwitcher.module.css";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const redirectedPathName = (locale: Locale) => {
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
                  pathName.slice(1, 3) === locale ? styles.active : styles.none
                }
              >
                {locale === "uk" ? "ua" : locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
