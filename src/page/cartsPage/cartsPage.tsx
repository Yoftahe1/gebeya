import React from "react";
import Carts from "../../component/carts/carts";
import banner from "../../assets/banners/b3.png";
import styles from "./cartsPage.module.css";
interface CartsPageProps {
  // : string;
}

const CartsPage: React.FC<CartsPageProps> = ({}) => {
  return (
    <div className={styles.cartsPage}>
      <div className={styles.banner}>
        <img className={styles.img} src={banner} alt="banner" />
        <p className={styles.title}>#carts</p>
      </div>
      <Carts />
    </div>
  );
};

export default CartsPage;
