import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./productDetails.module.css";
import { addToCart } from "../../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.headphones.products);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [isAdded, setIsAdded] = useState(false);
  const product = products.find((prod) => prod.id == parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className={styles.error}>Product not found.</div>;
  }
  const handleIncrease = () => {
    setQuantity(quantity+1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity-1);
    }
  };

  
  const handleAddToCart = () => {
    dispatch(addToCart({ pr:product, quan:quantity }));
    setButtonText("Added!");
    setIsAdded(true);

    // Reset the button after 2 seconds
    setTimeout(() => {
      setButtonText("Add to Cart");
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.breadcrumb}>
<<<<<<< HEAD
        <span>Categories / <a href="/">Gaming Headsets & Audio</a> / </span>
=======
        <span>Products / Gaming Headsets & Audio / </span>
>>>>>>> 0ed3ed9b4096a3c00e2dae16dc4b50ed1a48f0b8
        <span className={styles.productName}>{product.name}</span>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={product.image_url} alt={product.name} />
          <div className={styles.thubnails}>
            <img src={product.image_url} alt="" />
            <img src={product.image_url} alt="" />
            <img src={product.image_url} alt="" />
            <img src={product.image_url} alt="" />
            <img src={product.image_url} alt="" />
          </div>
        </div>

        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productSubtitle}>{product.description}</p>
          <div className={styles.productRating}>
            {/* Assuming there's a rating value */}
            <span>★★★★☆</span>
            <span>({product.rating_counts})</span>
          </div>
          <div className={styles.dottedLine}></div>

          <div className={styles.productPrice}>
            ${product.price.toFixed(2)} or 99.99/month
          </div>
          <p className={styles.productPayment}>
            Suggested payments with 6 month special financing
          </p>
          <div className={styles.dottedLine}></div>

          <div className={styles.productOptions}>
            <h4>Choose a color</h4>
            <div className={styles.colorOptions}>
              {product.color_options.map((color, index) => (
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

export default ProductDetails;
