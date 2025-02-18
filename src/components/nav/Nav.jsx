import React from "react";
import style from "./nav.module.css"
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <nav>
    <div className={style.containerWrapper}>
      <div className={style.container}>
        <Link to={"/"}> <img src="/assets/icons/GameGeek.svg" alt="" /></Link>
        <ul className={style.links}>
          <li>Categories</li>
          <li>Brands</li>
          <li>What's new</li>
          <li>Sales</li>
          <li>Help</li>
          <li>About</li>
        </ul>
        <div className={style.btns}>
          <img src="/assets/icons/fi-bs-search.svg" alt="" />
          <img src="/assets/icons/fi-bs-user.svg" alt="" />
          <Link to={"/cart"}>
            <img src="/assets/icons/fi-bs-shopping-cart.svg" alt="" />
            </Link>
        </div>
      </div>
      <div className={style.under}></div>
    </div>
  </nav>
  
  );
}
