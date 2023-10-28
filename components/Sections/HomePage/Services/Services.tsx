import Image from "next/image";
import Link from "next/link";

import arrow from "@/public/arrow.svg";
import {ServicesItem} from "@/components/Elements/ServicesItem/ServicesItem";

import styles from "./Services.module.scss";

type ServicesProps = {
  arrayServices: Service[];
  lang: "uk" | "en";
  services: Dictionaries;
};

export const Services = ({arrayServices, lang, services}: ServicesProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.header}>
          {services["server-component"].service.header}
        </h2>
        <h3 className={styles.subHeader}>
          {services["server-component"].service.subHeader}
        </h3>
        <p className={styles.description}>
          {services["server-component"].service.description}
        </p>
        <ul className={styles.serviceList}>
          {arrayServices.map((service) => {
            const backgroundStyle = {
              background: service.img,
            };

            return (
              <ServicesItem
                key={service.id}
                background={backgroundStyle.background.src}
                lang={lang}
                serviceName={service.textFields[lang].serviceName}
              />
            );
          })}

          <li key={"service"} className={`${styles.item} ${styles.itemBg}`}>
            <div className={styles.wrap}>
              <span className={styles.title}>Other services</span>
              <button className={styles.btn} type="button">
                <Link href={`/${lang}/services`} className={styles.link}>
                  <span className={styles.mobiletextFields}>
                    Other services link
                  </span>
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
        </ul>
      </div>
    </section>
  );
};
