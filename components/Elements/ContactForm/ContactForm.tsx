"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Hourglass } from "react-loader-spinner";

import styles from "./ContactForm.module.scss";

export const ContactForm = ({ dictionary }: { dictionary: Dictionaries }) => {
  const [visibleMsg, setVisibleMsg] = useState("");
  const [load, setLoad] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>();
  const onSubmit: SubmitHandler<ContactFormInputs> = async ({
    name,
    email,
    msg,
  }) => {
    try {
      setLoad(true);
      const sendData = `<b>Замовлення із сайта</b>\n<b>Ім'я: ${name}</b>\n<b>Email: ${email}</b>\n\n<b>${msg}</b>\n`;

      const res = await fetch(`/api/tg/`, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sendData),
      });
      if (!res.ok) {
        throw new Error("Error TG send");
      }

      reset();
      setLoad(false);
      setVisibleMsg("success");
      setTimeout(() => {
        setVisibleMsg("");
      }, 3000);
    } catch (error) {
      setLoad(false);
      setVisibleMsg("fail");
      setTimeout(() => {
        setVisibleMsg("");
      }, 3000);
    }
  };

  return (
    <>
      {!visibleMsg ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.label}>
              <input
                {...register("name", { required: true, minLength: 2 })}
                className={styles.input}
                placeholder={dictionary["server-component"].contact.form.name}
              />
              {errors.name && (
                <span className={styles.error}>
                  This field is required(2+ characters)
                </span>
              )}
            </div>

            <div className={styles.label}>
              <input
                type="email"
                {...register("email", { required: true })}
                className={styles.input}
                placeholder={dictionary["server-component"].contact.form.email}
              />
              {errors.email && (
                <span className={styles.error}>This field is required</span>
              )}
            </div>

            <div className={styles.label}>
              <textarea
                {...register("msg", {
                  required: true,
                  minLength: 2,
                  maxLength: 1000,
                })}
                className={styles.textarea}
                placeholder={
                  dictionary["server-component"].contact.form.message
                }
              />
              {errors.msg && (
                <span className={styles.error}>
                  This field is required(2...1000 characters)
                </span>
              )}
            </div>

            <button className={styles.button} type="submit">
              {dictionary["server-component"].contact.form.button}
            </button>
            {load && (
              <div className={styles.loader_wrap}>
                <Hourglass
                  visible={true}
                  height="100"
                  width="100"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={["#0AD87A", "#72ed72"]}
                />
              </div>
            )}
          </form>
        </>
      ) : (
        <div className={styles.notify_wrap}>
          <p
            className={styles.notify_msg}
            style={{
              backgroundColor: visibleMsg === "success" ? "green" : "red",
            }}
          >
            {visibleMsg === "success"
              ? "Message sent successfully!"
              : `Message not sent! Please try again later.`}
          </p>
        </div>
      )}
    </>
  );
};
