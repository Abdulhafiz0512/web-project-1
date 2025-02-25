import React from "react";
import styles from "./brands.module.css";
import { useState } from "react";


const Brands = () => {
  const [activeTab, setActiveTab] = useState("TRENDING");
 
  const trendingProducts = [
    {
      id: 1,
      name: "LOGITECH GAMING HEADSET",
      price: "99,99 $",
      image: "/assets/Images/items.png"
    },
    {
      id: 2,
      name: "CHAIR GAMING MGCPROFBL GAMING",
      price: "149,90 $",
      image: "/assets/Images/items2.png"
    },
    {
      id: 3,
      name: "MANDO MICROSOFT XBOX CONTROLLER",
      price: "54,99 $",
      image: "/assets/Images/items3.png"
    },
    {
      id: 4,
      name: "PC GAMING NEOHEO105 NEOPC",
      price: "899,99 $",
      image: "/assets/Images/items4.png"
    }
  ];
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h2 className={styles.heroTitle}>START YOUR GAME</h2>
            <h3 className={styles.heroSubtitle}>WITH THE BEST</h3>
            <p className={styles.heroText}>
              We've Got Everything
              <br />
              You Need For Gaming Supremacy
            </p>
            <a href="/"> <button className={styles.shopButton}>Shop</button></a>
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  MORE THAN{" "}
                  <span className={styles.highlight}>
                    15+ POPULAR <br />
                    PROFESSIONAL
                  </span>{" "}
                  <br />
                  BRANDS
                </span>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>
                  <span className={styles.highlight}>2500+</span> ITEMS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.newsSection}>
        <h2 className={styles.sectionTitle}>DISCOVER NEWS AND INNOVATIONS</h2>
        <div className={styles.container}>
          <div className={styles.newsGrid}>
            <div className={styles.newsItem}>
              <img
                src="/assets/Images/brands2.png"
                alt="Gaming news"
                className={styles.newsImage}
              />
              <h3 className={styles.newsTitle}>ALWAYS IN THE GAME</h3>
              <p className={styles.newsText}>
                Stay ahead of the latest and greatest gaming tech, featuring new
                releases, exclusive deals, and exciting pre-orders.
              </p>
              <a className={styles.seeMore}>See More</a>
            </div>
            <div className={styles.newsItem}>
              <img
                src="/assets/Images/brands3.png"
                alt="Gaming accessories"
                className={styles.newsImage}
              />
              <h3 className={styles.newsTitle}>ENHANCE YOUR EXPERIENCE</h3>
              <p className={styles.newsText}>
                Upgrade your world by elevating your setup and personalizing
                your space with our collection of stylish and functional gaming
                accessories.
              </p>
              <a className={styles.seeMore}>See More</a>
            </div>
            <div className={styles.newsItem}>
              <img
                src="/assets/Images/brands4.png"
                alt="Gaming keyboards"
                className={styles.newsImage}
              />
              <h3 className={styles.newsTitle}>COMMAND THE BATTLE!</h3>
              <p className={styles.newsText}>
                Take control with our diverse range of gaming keyboards,
                featuring mechanical switches for tactile feedback etc.
              </p>
              <a className={styles.seeMore}>See More</a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.trendingSection}>
        <div className={styles.container}>
          <div className={styles.tabContainer}>
            <div className={styles.tabIndicator}>
              <div
                className={styles.activeIndicator}
                style={{
                  left:
                    activeTab === "TRENDING"
                      ? "0%"
                      : activeTab === "NEW"
                      ? "33.33%"
                      : "66.66%",
                }}
              ></div>
            </div>
          </div>


          <div className={styles.productsContainer}>


            <div className={styles.productsGrid}>
              {trendingProducts.map((product) => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageContainer}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={styles.productImage}
                    />
                  </div>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
      <section className={styles.joinUsBanner}>
        <div className={styles.joinUsOverlay}></div>
        <div className={styles.joinUsContent}>
          <h2 className={styles.joinUsTitle}>
            MAKE YOUR <br />
            BEST DECISION-<span className={styles.joinUsHighlight}>JOIN US</span>
          </h2>
          <button className={styles.joinButton}>Join</button>
        </div>
      </section>
    </div>
  );
};


export default Brands;


