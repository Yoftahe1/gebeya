import React from "react";
import styles from "./catagoriesPage.module.css";
import Category from "../../component/category/category";
interface CatagoriesPageProps {
  // : string;
}

const CatagoriesPage: React.FC<CatagoriesPageProps> = ({}) => {
  const catagories = [
    "Men",
    "Women",
    "Trouser",
    "T-Shirt",
    "Shoe",
    "Dress",
    "Skirt",
    "heel",
    "Computer",
    "Mobile",
    "Ear-Phone",
  ];
  return (
    <div className={styles.catagoriesPage}>
      <div className={styles.catagories}>
        {catagories.map((element, index) => {
          return <Category key={index} category={element} />;
        })}
      </div>
    </div>
  );
};

export default CatagoriesPage;
