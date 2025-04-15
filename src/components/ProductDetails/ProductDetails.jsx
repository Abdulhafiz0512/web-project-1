import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./productDetails.module.css";
import { addToCart } from "../../store/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.headphones.products);
  console.log(products, id);
  const [buttonText, setButtonText] = useState("Add to Cart");
  const [isAdded, setIsAdded] = useState(false);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (products && products.length > 0) {
      const foundProduct = products.find((prod) => prod.id == parseInt(id));
      setProduct(foundProduct);
    }
  }, [products, id]);

  if (!product) {
    return (
      <div className={styles.error}>
        <h2>Product not found</h2>
        <p>The product you are looking for does not exist or has been removed.</p>
        <Link to="/" className={styles.backLink}>Return to Home</Link>
      </div>
    );
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
    dispatch(addToCart({ pr: product, quan: quantity }));
    setButtonText("Added!");
    setIsAdded(true);

    setTimeout(() => {
      setButtonText("Add to Cart");
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className={styles.productDetails}>
      <div className={styles.breadcrumb}>
        <span>Categories / <Link to="/">Gaming Headsets & Audio</Link> / </span>
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
            <span>{"★".repeat(Math.floor(product.ratings_stars))}</span>
            <span>{"☆".repeat(5 - Math.floor(product.ratings_stars))}</span>
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
