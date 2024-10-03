/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState(<div>hello</div>);
  const [variant, setVariant] = useState("");

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        setIsModalOpen,
        content,
        setContent,
        variant,
        setVariant,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => useContext(ModalContext);
