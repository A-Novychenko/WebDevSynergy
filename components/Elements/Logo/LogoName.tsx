"use client";

import {useModal} from "@/components/Providers/ModalProvider";

import styles from "./Logo.module.scss";

export const LogoName = () => {
  const {isOpen} = useModal();

  return isOpen ? <p className={styles.logo_title}>WebDevSynergy</p> : null;
};
