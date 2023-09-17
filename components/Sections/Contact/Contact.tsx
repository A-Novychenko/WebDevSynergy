// import Image from "next/image";

// import ImgContact from "../../../public/image_contact.png";

import { FormContact } from './FormContact';

import styles from "./Contact.module.scss";

export const Contact = ({dictionary}: {dictionary: Dictionaries}) => {

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <h4 className={styles.subtitle}>
          {dictionary["server-component"].contact.subtitle}
        </h4>
        <h3 className={styles.title}>
          {dictionary["server-component"].contact.title}
        </h3>
        <p className={styles.description}>
          {dictionary["server-component"].contact.description}
        </p>
        <div className={styles.wrap}>
          <div className={styles.image}></div>
          {/* <Image
            className={styles.image_contact}
            src={ImgContact}
            alt="Image contact"
          /> */}
          <FormContact dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
};
