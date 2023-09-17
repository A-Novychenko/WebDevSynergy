"use client";

import {useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  msg: string;
};

export const TG_form = () => {
  const {BASE_URL} = process.env;
  const [visibleMsg, setVisibleMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({name, email, msg}) => {
    try {
      const sendData = `<b>Замовлення із сайта</b>\n<b>Ім'я: ${name}</b>\n<b>Email: ${email}</b>\n\n<b>${msg}</b>\n`;

      const res = await fetch(`/api/tg/`, {
        method: "POST",
        mode: "no-cors",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(sendData),
      });
      if (!res.ok) {
        throw new Error("Error TG send");
      }

      reset();
      setVisibleMsg("success");
      setTimeout(() => {
        setVisibleMsg("");
      }, 2000);
    } catch (error) {
      setVisibleMsg("fail");
      setTimeout(() => {
        setVisibleMsg("");
      }, 2000);
    }
  };

  return (
    <>
      {!visibleMsg ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            width: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              width: 500,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 30,
            }}
          >
            <span style={{paddingBottom: 8, fontSize: 20}}>Name</span>
            <input
              {...register("name", {required: true, minLength: 2})}
              style={{padding: 20, borderRadius: 16, fontSize: 24}}
            />
            {errors.name && (
              <span style={{color: "red", marginTop: 10, fontSize: 24}}>
                This field is required(2+ characters)
              </span>
            )}
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              width: 500,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 30,
            }}
          >
            <span style={{paddingBottom: 8, fontSize: 20}}>Email</span>
            <input
              type="email"
              {...register("email", {required: true})}
              style={{padding: 20, borderRadius: 16, fontSize: 24}}
            />
            {errors.email && (
              <span style={{color: "red", marginTop: 10, fontSize: 24}}>
                This field is required
              </span>
            )}
          </label>

          <label
            style={{
              display: "flex",
              flexDirection: "column",
              color: "white",
              width: 500,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 30,
            }}
          >
            <span style={{paddingBottom: 8, fontSize: 20}}>Message</span>
            <textarea
              {...register("msg", {
                required: true,
                minLength: 2,
                maxLength: 1000,
              })}
              style={{
                padding: 20,
                borderRadius: 16,
                fontSize: 24,
                resize: "none",
                height: 300,
              }}
            />
            {errors.msg && (
              <span style={{color: "red", marginTop: 10, fontSize: 24}}>
                This field is required(2...1000 characters)
              </span>
            )}
          </label>

          <input
            type="submit"
            style={{
              padding: 20,
              borderRadius: 16,
              fontSize: 24,
              cursor: "pointer",
            }}
          />
        </form>
      ) : (
        <div
          style={{
            width: 500,
            height: 700,
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 40,
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: 40,
              textAlign: "center",
              backgroundColor: visibleMsg === "success" ? "green" : "red",
              padding: 40,
              borderRadius: 40,
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
