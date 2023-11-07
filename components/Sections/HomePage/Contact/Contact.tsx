import { ContactForm } from "@/components/Elements/ContactForm/ContactForm";

import styles from "./Contact.module.scss";

export const Contact = ({ dictionary }: { dictionary: Dictionaries }) => {
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

          <ContactForm dictionary={dictionary} />
        </div>
      </div>
    </section>
  );
};
