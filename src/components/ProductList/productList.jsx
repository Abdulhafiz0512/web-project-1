import React, { useEffect, useState } from 'react';
import { addToCart } from '../../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import styles from "./productList.module.css"
import { Link } from 'react-router-dom';
const ProductList = ({ sortBy }) => {
  const products = useSelector(state => state.headphones.products);
  const dispatch = useDispatch();
  const cartItems =useSelector(state=> state.cart.cartItems)
  const selectedColors = useSelector(state => state.headphones.selectedColors);
  const selectedBrands = useSelector(state => state.headphones.selectedBrands);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filteredProducts = products.filter(product => {
      const matchesColor = selectedColors.length === 0 || product.color_options.some(color => selectedColors.includes(color));
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand_name);
      return matchesColor && matchesBrand;
    });

    if (sortBy) {
      if (sortBy === "cheap") {
        filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sortBy === "expensive") {
        filteredProducts.sort((a, b) => b.price - a.price);
      }
    }

    setFilteredProducts(filteredProducts);
  }, [products, selectedColors, selectedBrands, sortBy]);

  return (
  <main className={styles.productList}>
    <div className={styles.products}>
      {filteredProducts.map(product => (
        <div key={product.id} className={styles.productCard}>
          <img src={product.image_url} alt={product.name} className={styles.productImage} />
          <h3 className={styles.productName}><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
          <h1 className={styles.productDescription}>{product.description}</h1>
          <div className={styles.colors}>
            {product.color_options.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className={styles.colorCircle}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
          <p className={styles.productPrice}>${product.price}</p>
          
          <button
            className={styles.addToCartButton}
            onClick={() => dispatch(addToCart({pr:product, quan:1}))}
            disabled={cartItems.some(item => item.id === product.id)}
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

export default ProductList;
