import React from "react";
import Card from "../../component/card/card";
import banner from "../../assets/banners/b1.jpg";
import styles from "./shopPage.module.css";
interface ShopPageProps {
  // : string;
}

const ShopPage: React.FC<ShopPageProps> = ({}) => {
  return (
    <div className={styles.shopPage}>
      <div className={styles.banner}>
        <img className={styles.img} src={banner} alt="banner" />
        <p className={styles.title}>#stayhome</p>
      </div>
      <div className={styles.container}>
        <Card product={"af"} price={10} />
        <Card product={"jordan"} price={20} />
        <Card product={"phone"} price={30} />
        <Card product={"pc"} price={40} />
        <Card product={"af"} price={10} />
        <Card product={"jordan"} price={20} />
        <Card product={"phone"} price={30} />
        <Card product={"pc"} price={40} />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button}>Prev</button>
        <button className={styles.button}>Next</button>
      </div>
    </div>
  );
};

export default ShopPage;
