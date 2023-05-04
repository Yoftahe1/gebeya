import React from "react";
import { Link } from "react-router-dom";
import styles from "./hero.module.css";
interface HeroProps {
  // : string;
}

const Hero: React.FC<HeroProps> = ({}) => {
  return (
    <div className={styles.hero}>
      <h4>Trade-in-offer</h4>
      <div>
        <h1>Super value deals</h1>
        <h1 className={styles.h1}>On all products</h1>
      </div>
      <Link className={styles.button} to='/shop'>Shop Now</Link>
    </div>
  );
};

export default Hero;
