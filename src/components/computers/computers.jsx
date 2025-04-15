import React, { useEffect, useState } from 'react';
import { addToCart } from '../../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./computers.module.css"
import { Link } from 'react-router-dom';

const Computers = ({ sortBy }) => {
  const computers = useSelector(state => state.computers.computers);
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const selectedComputerColors = useSelector(state => state.computers.selectedComputerColors);
  const selectedComputerBrands = useSelector(state => state.computers.selectedComputerBrands);

  const [filteredComputers, setFilteredComputers] = useState([]);

  useEffect(() => {
    let filteredComputers = computers.filter(computer => {
      const matchesColor = selectedComputerColors.length === 0 || computer.color_options.some(color => selectedComputerColors.includes(color));
      const matchesBrand = selectedComputerBrands.length === 0 || selectedComputerBrands.includes(computer.brand_name);
      return matchesColor && matchesBrand;
    });

    if (sortBy) {
      if (sortBy === "cheap") {
        filteredComputers.sort((a, b) => a.price - b.price);
      } else if (sortBy === "expensive") {
        filteredComputers.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredComputers(filteredComputers);
  }, [computers, selectedComputerColors, selectedComputerBrands, sortBy]);

  return (
    <main className={styles.computers}>
      <div className={styles.products}>
        {filteredComputers.map(computer => (
          <div key={computer.id} className={styles.productCard}>
            <img src={computer.image_url} alt={computer.name} className={styles.productImage} />
            <h3 className={styles.productName}><Link to={`/computer/${computer.id}`}>{computer.name}</Link></h3>
            <h1 className={styles.productDescription}>{computer.description}</h1>
            <div className={styles.colors}>
              {computer.color_options.map((color, colorIndex) => (
                <div
                  key={colorIndex}
                  className={styles.colorCircle}
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
            <p className={styles.productPrice}>${computer.price}</p>
            <div className={styles.rating}>
              <span>{"★".repeat(Math.floor(computer.ratings_stars))}</span>
              <span>{"☆".repeat(5 - Math.floor(computer.ratings_stars))}</span>
              <span>({computer.rating_counts})</span>
            </div>
            <button
              className={styles.addToCartButton}
              onClick={() => dispatch(addToCart({pr:computer, quan:1}))}
              disabled={cartItems.some(item => item.id === computer.id)}
            >
              <img src="/assets/icons/white-cart.svg" className={styles.cartIcon} alt="" />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Computers; 