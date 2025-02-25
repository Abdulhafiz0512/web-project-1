import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import styles from "./sales.module.css";

const Sales = () => {
  const [timeLeft, setTimeLeft] = useState(3600);
  const [showMoreDeals, setShowMoreDeals] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.newPrice.replace(',', '.')), 
      image_url: product.image,
      quantity: 1,
      brand_name: "Gaming Brand", 
      color_options: []
    }));
  };
  

  const discountedProducts = [
    { id: 1, name: "LOGITECH GAMING HEADSET", oldPrice: "99,99 €", newPrice: "79,99 €", discount: "20%", image: "/assets/Images/items5.png" },
    { id: 2, name: "CHAIR GAMING MGCPROFBL", oldPrice: "149,90 €", newPrice: "119,90 €", discount: "20%", image: "/assets/Images/items.png" },
    { id: 3, name: "MANDO XBOX CONTROLLER", oldPrice: "54,99 €", newPrice: "44,99 €", discount: "18%", image: "/assets/Images/items2.png" },
    { id: 4, name: "PC GAMING NEOHEO105", oldPrice: "899,99 €", newPrice: "799,99 €", discount: "11%", image: "/assets/Images/items3.png" }
  ];

  const moreDeals = [
    { id: 5, name: "GAMING KEYBOARD RGB", oldPrice: "69,99 €", newPrice: "49,99 €", discount: "29%", image: "/assets/Images/items6.png" },
    { id: 6, name: "GAMING MOUSE PRO", oldPrice: "59,99 €", newPrice: "39,99 €", discount: "33%", image: "/assets/Images/items7.png" },
    { id: 7, name: "ULTRA HD GAMING MONITOR", oldPrice: "399,99 €", newPrice: "349,99 €", discount: "13%", image: "/assets/Images/items8.png" },
    { id: 8, name: "GAMING DESK SETUP", oldPrice: "499,99 €", newPrice: "429,99 €", discount: "14%", image: "/assets/Images/items9.png" }
  ];

  return (
    <div>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>BIG SALE! UP TO 50% OFF</h1>
        <p className={styles.heroSubtitle}>Grab your favorite gaming gear at unbeatable prices.</p>
        <button className={styles.shopNowButton}>Shop Now</button>
      </section>

      <section className={styles.salesSection}>
        <h2 className={styles.sectionTitle}>Limited-Time Deals</h2>
        <p className={styles.timer}>Hurry! Sale ends in: {formatTime(timeLeft)}</p>

        <div className={styles.productsGrid}>
          {discountedProducts.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <img src={product.image} alt={product.name} className={styles.productImage} />
                <span className={styles.discountTag}>{product.discount} OFF</span>
              </div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.oldPrice}>{product.oldPrice}</p>
              <p className={styles.newPrice}>{product.newPrice}</p>
              <button className={styles.buyNowButton} onClick={() => handleAddToCart(product)}>Buy Now</button>
            </div>
          ))}
        </div>

        {showMoreDeals && (
          <div className={`${styles.productsGrid} ${styles.fadeIn}`}>
            {moreDeals.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageContainer}>
                  <img src={product.image} alt={product.name} className={styles.productImage} />
                  <span className={styles.discountTag}>{product.discount} OFF</span>
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.oldPrice}>{product.oldPrice}</p>
                <p className={styles.newPrice}>{product.newPrice}</p>
                <button className={styles.buyNowButton} onClick={() => handleAddToCart(product)}>Buy Now</button>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Don't Miss Out!</h2>
        <p className={styles.ctaText}>Exclusive deals available for a limited time only.</p>
        <button className={styles.ctaButton} onClick={() => setShowMoreDeals(!showMoreDeals)}>
          {showMoreDeals ? 'Show Less' : 'Explore More Deals'}
        </button>
      </section>
    </div>
  );
};

export default Sales;