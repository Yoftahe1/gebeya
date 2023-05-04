import React from "react";
import styles from './homePage.module.css'
import Hero from "../../component/hero/hero";
interface HomePageProps {
  // : string;
}

const HomePage: React.FC<HomePageProps> = ({}) => {
  return <div className={styles.homePage}>
    <Hero/>
  </div>;
};

export default HomePage;
