"use client";

import Image from "next/image";

import {BurgerMenu} from "./BurgerMenu";
import {useModal} from "@/components/Providers/ModalProvider";
import burgerMenu from "../../../public/icons/burger.svg";
import close from "../../../public/icons/close.svg";

import styles from "./Burger.module.scss";

export const BurgerSwitch = ({dictionary}: {dictionary: Dictionaries}) => {
  const {isOpen, openModal} = useModal();

  const toggleOpenModal = () => {
    openModal(!isOpen);
  };

  return (
    <>
      <div className={styles.btn_wrap}>
        {!isOpen && (
          <button type="button" className={styles.btn}>
            <Image
              className={styles.icon}
              src={burgerMenu}
              alt="icon-line"
              width={56}
              height={56}
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
              width={56}
              height={56}
              priority
              onClick={toggleOpenModal}
              style={{fill: "red", stroke: "green", color: "yellow"}}
            />
          </button>
        )}
      </div>
      {isOpen && <BurgerMenu dictionary={dictionary} />}
    </>
  );
};
