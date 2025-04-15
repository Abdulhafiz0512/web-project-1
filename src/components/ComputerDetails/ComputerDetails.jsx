import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./computerDetails.module.css";
import { addToCart } from "../../store/cartSlice";

const ComputerDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const computers = useSelector((state) => state.computers.computers);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [isAdded, setIsAdded] = useState(false);
  const computer = computers.find((comp) => comp.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!computer) {
    return <div className={styles.error}>Computer not found.</div>;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ pr: computer, quan: quantity }));
    setButtonText("Added!");
    setIsAdded(true);

    setTimeout(() => {
      setButtonText("Add to Cart");
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={styles.computerDetails}>
      <div className={styles.breadcrumb}>
        <span>Categories / <Link to="/computers">Computers</Link> / </span>
        <span className={styles.computerName}>{computer.name}</span>
      </div>

      <div className={styles.computerContainer}>
        <div className={styles.computerImage}>
          <img src={computer.image_url} alt={computer.name} />
          <div className={styles.thubnails}>
            <img src={computer.image_url} alt="" />
            <img src={computer.image_url} alt="" />
            <img src={computer.image_url} alt="" />
            <img src={computer.image_url} alt="" />
            <img src={computer.image_url} alt="" />
          </div>
        </div>

        <div className={styles.computerInfo}>
          <h1 className={styles.computerTitle}>{computer.name}</h1>
          <p className={styles.computerSubtitle}>{computer.description}</p>
          <div className={styles.computerRating}>
            <span>{"★".repeat(Math.floor(computer.ratings_stars))}</span>
            <span>{"☆".repeat(5 - Math.floor(computer.ratings_stars))}</span>
            <span>({computer.rating_counts})</span>
          </div>
          <div className={styles.dottedLine}></div>

          <div className={styles.computerPrice}>
            ${computer.price.toFixed(2)} or 99.99/month
          </div>
          <p className={styles.computerPayment}>
            Suggested payments with 6 month special financing
          </p>
          <div className={styles.dottedLine}></div>

          <div className={styles.computerOptions}>
            <h4>Choose a color</h4>
            <div className={styles.colorOptions}>
              {computer.color_options.map((color, index) => (
                <div
                  key={index}
                  className={styles.colorCircle}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
          <div className={styles.dottedLine}></div>
          <div className={styles.addToCartSection}>
            <div className={styles.quantityControl}>
              <button
                className={styles.quantityButton}
                onClick={handleDecrease}
              >
                −
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className={styles.quantityInput}
              />
              <button
                className={styles.quantityButton}
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
            <div className={styles.stockInfo}>
              Only <span>16 items</span> left! <br />
              Don't miss it
            </div>
          </div>
          <button
            className={`${styles.addToCartButton} ${
              isAdded ? styles.added : ""
            }`}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            <img src="/assets/icons/white-cart.svg" alt="" />
            {buttonText}
          </button>

          <div className={styles.deliveryInfo}>
            <div className={styles.freeDelivery}>
              <img
                src="/assets/icons/fi-rs-school-bus.svg"
                alt="Free delivery"
              />
              <div>
                Free delivery
                <br />
                <small>Enter your Postal Code for Delivery Availability</small>
              </div>
            </div>
            <div className={styles.returnDelivery}>
              <img
                src="/assets/icons/fi-rs-box-alt.svg"
                alt="Return delivery"
              />
              <div>
                Return Delivery
                <br />
                <small>Free delivery 30 Days return</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerDetails; 