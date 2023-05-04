import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import Modal from "../modal/modal";
import styles from "./header.module.css";
import cart from "../../model/cart";
import { RootState } from "../../store/store";
interface HeaderProps {
  // : string;
}

const Header: React.FC<HeaderProps> = ({}) => {
  const [modal, setModal] = useState(false);
  function changeModal() {
    setModal((prev) => !prev);
  }
  const carts: cart[] = useSelector((state: RootState) => state.cart.carts);
  return (
    <>
      {modal && <Modal changeModal={changeModal} />}
      <div className={styles.header}>
        <p className={styles.logo}>Gebeya</p>
        <div className={styles.container}>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink  className={({ isActive }) =>
              isActive ? styles.active : styles.link
            } to="/shop">
            Shop
          </NavLink>
          <NavLink  className={({ isActive }) =>
              isActive ? styles.active : styles.link
            } to="/catagories">
            Catagories
          </NavLink>
          <NavLink  className={({ isActive }) =>
              isActive ? styles.active : styles.link
            } to="/addProduct">
            Add Product
          </NavLink>
          <p className={styles.link} onClick={changeModal}>
            Sign-in
          </p>
          <NavLink className={styles.cart} to="/carts">
            <MdOutlineShoppingCart />
            {carts.length > 0 && (
              <div className={styles.carts}>{carts.length}</div>
            )}
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
