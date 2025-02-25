import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/cartSlice";
import styles from "./cart.module.css"; // Import the CSS module
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const backToShopping = () => {
    navigate(-1);
  };
  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    backToShopping();
  };

  return (
    <div className={styles.cartContainer}>
      <button
        className={styles.backToShopping}
        onClick={() => backToShopping()}
      >
        <img src="./assets/icons/fi-rr-arrow-left.svg" alt="" />
        Back to shopping
      </button>
      <h2>SHOPPING CART</h2>
      <div className={styles.addedProducts}>
        <div className={styles.cartItems}>
          <div className={styles.nomlari}>
            <div className={styles.zero}></div>
            <p className={styles.first}>Product</p>
            <p className={styles.second}>Quantity</p>
            <div className={styles.space}></div>
            <p className={styles.third}>Price</p>
          </div>
          {cartItems.map((item) => (
            <div className={styles.cartItem} key={item.id}>
              <div className={styles.frs}>
                <button
                  className={styles.removeItem}
                  onClick={() => handleRemove(item.id)}
                >
                  <img src="/assets/icons/fi-bs-cross.svg" alt="" />
                </button>
                <div className={styles.productInfo}>
                  <img src={item.image_url} alt={item.name} />
                  <div className={styles.productDetails}>
                    <h3>{item.brand_name}</h3>
                    <h2>{item.name}</h2>
                    <div className={styles.colorOptions}>
                      {item.color_options.map((color, index) => (
                        <div
                          key={index}
                          className={styles.colorCircle}
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                    <p className={styles.inStock}>In stock</p>
                  </div>
                </div>
              </div>
              <div className={styles.quantity}>
                <button onClick={() => handleDecrement(item.id)}>−</button>
                <input type="text" value={item.quantity} readOnly />
                <button onClick={() => handleIncrement(item.id)}>+</button>
              </div>
              <div className={styles.price}>${item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        <div className={styles.cartTotals}>
          <h3>CART TOTALS</h3>
          <p style={{ marginBottom: "21px" }}>
            Shipping (3-5 Business Days): <span>Free</span>
          </p>
          <p style={{ marginBottom: "21px" }}>
            TAX (estimated for the United States (US)): <span>$0</span>
          </p>
          <p
            style={{
              borderBottom: "2px dotted #6A6969",
              paddingBottom: "41px",
            }}
          >
            Subtotal:{" "}
            <span>
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
          <p style={{ marginTop: "33px" }}>
            Total:{" "}
            <span>
              $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </p>
          {
            cartItems.length>0 ? <button className={styles.checkoutBtn}>PROCEED TO CHECKOUT</button> : null
          }
          {
            cartItems.length>0 ? <button onClick={handleClearCart} className={styles.checkoutBtn}>CLEAR CART</button> : null
          }
          <div className={styles.last}>
            <button
              className={styles.backToShopping}
              onClick={() => backToShopping()}
            >
              <img src="./assets/icons/fi-rr-arrow-left.svg" alt="" />
              Back to shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
