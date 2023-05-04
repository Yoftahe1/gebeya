import React from "react";
import styles from "./footer.module.css";
interface FooterProps {
  // : string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={styles.footer}>
      <div>
        <p>Contact Us</p>
        <input />
      </div>
      <div>
        <p className={styles.title}>Categories</p>
        <p className={styles.element}>Trouser</p>
        <p className={styles.element}>T-Shirt</p>
        <p className={styles.element}>Shoes</p>
        <p className={styles.element}>Phone</p>
        <p className={styles.element}>Computer</p>
      </div>
    </div>
  );
};

export default Footer;
