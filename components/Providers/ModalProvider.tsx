"use client";

import {createContext, useContext, useState} from "react";

const ModalContext = createContext({
  isOpen: false,
  openModal: (isOpen: boolean) => {},
});

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({children}: {children: React.ReactNode}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (flag: boolean) => {
    setIsOpen(flag);
  };

  return (
    <ModalContext.Provider value={{isOpen, openModal}}>
      {children}
    </ModalContext.Provider>
  );
};
