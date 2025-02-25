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
          <li><a href="/brands">Brands</a></li>
          {/*<li><a href="/sales">Sales</a></li>*/}
          <li><a href="/help">Help</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <div className={style.btns}>
          <Link to={"/cart"}>
            <img src="/assets/icons/fi-bs-shopping-cart.svg" alt="" width="35px"/>
            </Link>
        </div>
      </div>
      <div className={style.under}></div>
    </div>
  </nav>
  
  );
}
