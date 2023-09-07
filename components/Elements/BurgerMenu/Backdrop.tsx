import {useModal} from "@/components/Providers/ModalProvider";

import styles from "./Burger.module.scss";

export const Backdrop = ({children}: {children: React.ReactNode}) => {
  const {openModal} = useModal();

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          openModal(false);
        }
      }}
    >
      {children}
    </div>
  );
};
