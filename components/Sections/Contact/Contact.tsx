"use client";
import Image from "next/image";
// import { useForm } from 'react-hook-form';

import ImgContact from "../../../public/image_contact.png";
import styles from "./Contact.module.scss";


export const Contact = () => {
    // const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    return (
        <section className={styles.container}>
            <h4 className={styles.text}>Let`s innovate together and create a digital future that`s uniquely yours</h4>
            <h3 className={styles.title}>Get in Touch</h3>
            <p className={styles.subtitle}>Ready to take your business to the next level? We`re here to help! Whether you have a project in mind or need expert guidance, our team is just a message away. Contact us today to discuss your ideas and learn how we can collaborate to turn them into reality.</p>
            <div className={styles.wrap}>
                <Image className={styles.image_contact} src={ImgContact} alt="Image contact" />
                <form className={styles.form}>
                    <input type="text" id="name" placeholder="Enter your name" />
                    <input type="email" id="email" placeholder="Enter your e-mail" />
                    <textarea placeholder="Enter your message" />
                    <button type="submit">Send message</button>
                </form>
            </div>
        </section>
    )
}