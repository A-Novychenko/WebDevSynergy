"use client";

import Image from "next/image";
import {useState} from "react";

import {BurgerMenu} from "./BurgerMenu";
import burgerMenu from "../../../public/icons/burger.svg";
import close from "../../../public/icons/close.svg";

import styles from "./Burger.module.scss";

export const BurgerSwitch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  console.log("isOpen", isOpen);

  return (
    <>
      <div className={styles.btn_wrap}>
        {!isOpen && (
          <button type="button" className={styles.btn}>
            <Image
              className={styles.icon}
              src={burgerMenu}
              alt="icon-line"
              width={32}
              height={22}
              priority
              onClick={toggleOpenModal}
            />
          </button>
        )}
        {isOpen && (
          <button type="button" className={styles.btn}>
            <Image
              className={styles.icon}
              src={close}
              alt="icon-line"
              width={22}
              height={22}
              priority
              onClick={toggleOpenModal}
            />
          </button>
        )}
      </div>
      {isOpen && <BurgerMenu />}
    </>
  );
};
