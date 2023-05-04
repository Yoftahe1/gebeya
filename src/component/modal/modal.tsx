import React, { useState } from "react";
import { createPortal } from "react-dom";
import {AiOutlineClose} from 'react-icons/ai'
import styles from "./modal.module.css";
interface ModalProps {
  changeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ changeModal }) => {
  const [isSignIn, setIsSignIn] = useState(true);
  return createPortal(
    <>
      <div className={styles.overlay} onClick={changeModal}></div>
      <div className={styles.modal}>
        <div className={styles.svg} onClick={changeModal}><AiOutlineClose/></div>
        
        <h2>{isSignIn ? "Sign-In" : "Sign-Up"}</h2>
        <input className={styles.input} placeholder="Enter Email" />
        <input className={styles.input} placeholder="Enter Password" />
        <button className={styles.button}>
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </button>
        <div>
          <p>{isSignIn ? "Don't have account?" : "Already have account?"}</p>
          <p
            className={styles.change}
            onClick={() => setIsSignIn((prev) => !prev)}
          >
            {isSignIn ? "Sign Up" : "Sign In"}
          </p>
        </div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
