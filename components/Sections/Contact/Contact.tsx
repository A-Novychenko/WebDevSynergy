"use client";
import Image from "next/image";
// import { useForm } from 'react-hook-form';

import ImgContact from "../../../public/image_contact.png";
import styles from "./Contact.module.scss";


export const Contact = ({dictionary}: {dictionary: Dictionaries}) => {
    // const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    return (
        <section className={styles.container}>
            <h4 className={styles.subtitle}>{dictionary["server-component"].contact.subtitle}</h4>
            <h3 className={styles.title}>{dictionary["server-component"].contact.title}</h3>
            <p className={styles.description}>{dictionary["server-component"].contact.description}</p>
            <div className={styles.wrap}>
                <Image className={styles.image_contact} src={ImgContact} alt="Image contact" />
                <form className={styles.form}>
                    <input className={styles.input} type="text" id="name" placeholder={dictionary["server-component"].contact.form.name} />
                    <input className={styles.input} type="email" id="email" placeholder={dictionary["server-component"].contact.form.email} />
                    <textarea className={styles.textarea} placeholder={dictionary["server-component"].contact.form.message} />
                    <button className={styles.button} type="submit">{dictionary["server-component"].contact.form.button}</button>
                </form>
            </div>
        </section>
    )
}