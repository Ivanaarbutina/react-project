import { ReactNode } from "react";
import Button from "./button";
import Close from "../assets/close.tsx";

type ModalProps = {
  title: string;
  children: ReactNode;
  size?: "lg" | "md" | "sm";
  onClick: () => void;
  isOpen: boolean;
};

const Modal = ({ title, children, size, isOpen, onClick }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className={`modal modal--${size}`}>
          <div className="modal__header">
            <h3>{title}</h3>
            <div className="modal__icon" onClick={() => onClick()}>
              <Close />
            </div>
          </div>
          <div className="modal__body">{children}</div>
          <div className="modal__foother">
            <Button text="click me" />
            <Button text="me too" color="red" />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
