"use client";

import styles from "./ServicesItem.module.scss";
import Link from "next/link";
import Image from "next/image";

import arrow from "../../../public/arrow.svg";
import { useEffect, useState } from "react";

type ServicesItemProps = {
  background: string;
  lang: "uk" | "en";
  serviceName: string;
};

export const ServicesItem = ({
  background,
  lang,
  serviceName,
}: ServicesItemProps) => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <li
      className={styles.item}
      style={{
        background: isWideScreen
          ? `linear-gradient(0deg, rgba(3, 7, 18, 0.80) 0%, rgba(3, 7, 18, 0.80) 100%), url(${background}) `
          : `#030712`,
        backgroundSize: isWideScreen ? "cover" : "auto",
      }}>
      <div className={styles.wrap}>
        <span className={styles.title}>{serviceName}</span>
        <button className={styles.btn} type="button">
          <Link href={`/${lang}/services`} className={styles.link}>
            <span className={styles.mobiletextFields}>{serviceName}</span>
            <span className={styles.desktopTextFields}>More</span>
            <Image
              className={styles.icon}
              src={arrow}
              alt="icon-arrow"
              width={16}
              height={14}
              priority
            />
          </Link>
        </button>
      </div>
    </li>
  );
};
