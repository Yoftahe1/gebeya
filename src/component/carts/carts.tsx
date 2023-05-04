import Cart from "../cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { push } from "../../store/carts";
import cart from "../../model/cart";
import styles from "./carts.module.css";
interface CartsProps {
  // : string;
}

const Carts: React.FC<CartsProps> = ({}) => {
  const dispatch = useDispatch();
  const carts: cart[] = useSelector((state: RootState) => state.cart.carts);
  const total: number = useSelector((state: RootState) => state.cart.total);
  const date = new Date();
 
  return (
    <div className={styles.carts}>
      <div
        className={styles.header}
        onClick={() =>
          dispatch(
            push({ catagories:[],product: 'mmm', price: 100, quantity: 1 })
          )
        }
      >
        <p className={styles.image}>Image</p>
        <p className={styles.product}>Product</p>
        <p className={styles.price}>Price</p>
        <p className={styles.quantity}>Quantity</p>
        <p className={styles.subtotal}>Subtotal</p>
        <p className={styles.remove}>Remove</p>
      </div>
      <div className={styles.cartContainer}>
        {carts.map((element, index) => {
          return <Cart key={index} element={element} index={index} />;
        })}
      </div>
      {carts.length > 0 ? (
        <div className={styles.container}>
          <div className={styles.total}>
            <div className={styles.title}>Total</div>
            <div className={styles.value}>{total}</div>
          </div>
          <button className={styles.button}>Check Out</button>
        </div>
      ):<div className={styles.noCart}>No Product Added To Cart</div>}
    </div>
  );
};

export default Carts;
