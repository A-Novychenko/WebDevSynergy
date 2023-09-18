"use client";

import styles from "./Contact.module.scss";

export const FormContact = ({dictionary}: {dictionary: Dictionaries}) => {
    return (
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            id="name"
            placeholder={dictionary["server-component"].contact.form.name}
          />
          <input
            className={styles.input}
            type="email"
            id="email"
            placeholder={dictionary["server-component"].contact.form.email}
          />
          <textarea
            className={styles.textarea}
            placeholder={dictionary["server-component"].contact.form.message}
          />
          <button className={styles.button} type="submit">
            {dictionary["server-component"].contact.form.button}
          </button>
        </form>
    )
}