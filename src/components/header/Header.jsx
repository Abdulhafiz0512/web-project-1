import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
        <div className={style.container}>
      <div className={style.logo}>
        <Link to={"/"}><img src="/assets/icons/GG.svg" alt="logo" /></Link>
        <div className={style.cell}>
          <img src="/assets/icons/tel.svg" alt="phone" />
          <p>+4904-049-950</p>
        </div>
      </div>
      <div className={style.ads}>
        <p>Get 50% Off on the Selected items </p>
        <div className={style.green_line}></div>
        <p>Shop now</p>
      </div>
      <div className={style.end}>
        <div className={style.sel}>
          <select name="lang" id="lang">
            <option value="0">English</option>
          </select>
          <img src="/assets/icons/flag.svg" alt="flag" />
        </div>
        <div className={style.loc}>
          <img src="/assets/icons/loc.svg" alt="location" />
          <p>Location</p>
        </div>
      </div>
      </div>
    </header>
  );
}
