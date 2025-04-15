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
          <li><Link to="/computers">Computers</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/help">Help</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/admin">Admin</Link></li>
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
