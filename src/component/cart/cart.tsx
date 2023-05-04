import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { pop, increment, decrement } from "../../store/carts";
import styles from "./cart.module.css";
import cart from "../../model/cart";
interface CartProps {
  element: cart;
  index: number;
}

const Cart: React.FC<CartProps> = ({ element, index }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.cart}>
      <div className={styles.imgContainer}>
        <img className={styles.image} alt="product" />
      </div>
      <p className={styles.product}>{element.product}</p>
      <p className={styles.price}>{element.price}$</p>
      <div className={styles.quantity}>
        <div
          className={styles.button}
          onClick={() => dispatch(decrement(index))}
        >
          <AiOutlineMinus />
        </div>
        <p className={styles.amount}>{element.quantity}</p>
        <div
          className={styles.button}
          onClick={() => dispatch(increment(index))}
        >
          <AiOutlinePlus />
        </div>
      </div>
      <p className={styles.subtotal}>{element.quantity*element.price}$</p>
      <div className={styles.remove} onClick={() => dispatch(pop(index))}>
        <MdOutlineDeleteOutline />
      </div>
    </div>
  );
};

export default Cart;
