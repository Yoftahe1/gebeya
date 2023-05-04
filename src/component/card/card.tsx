import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import shoe from "../../assets/shoe.webp";
import styles from "./card.module.css";
import { useDispatch } from "react-redux";
import { push } from "../../store/carts";
import cart from "../../model/cart";
interface CardProps {
  product: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ product, price }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function addToCart() {
    dispatch(
      push({ catagories: [], product: product, price: price, quantity: 1 })
    );
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} onClick={() => navigate("/detail")}>
        <div className={styles.imgContainer}>
          <img src={shoe} alt="product" className={styles.image} />
        </div>
        <div>
          <p className={styles.name}>{product}</p>
          <div className={styles.container}>
            <p className={styles.price}>{price}$</p>
          </div>
        </div>
      </div>
      <div className={styles.cart} onClick={addToCart}>
        <MdOutlineShoppingCart />
      </div>
    </div>
  );
};

export default Card;
