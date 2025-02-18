import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src="/assets/icons/gameG.svg" alt="GameGeek Logo" className={styles.gamegeekLogo} />
            <img src="/assets/icons/game.svg" alt="" />
          </div>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumn}>
              <h4>Services</h4>
              <ul>
                <li>Gift Card</li>
                <li>Mobile App</li>
                <li>Shipping & Delivery</li>
                <li>Order Pickup</li>
                <li>Account Signup</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>Help</h4>
              <ul>
                <li>ShopCart Help</li>
                <li>Returns</li>
                <li>Track Orders</li>
                <li>Contact Us</li>
                <li>Feedback</li>
                <li>Security & Fraud</li>
              </ul>
            </div>
            <div className={styles.footerColumn}>
              <h4>About Us</h4>
              <ul>
                <li>News & Blog</li>
                <li>Help</li>
                <li>Press Center</li>
              </ul>
            </div>
          </div>
        </div>
      
      <div className={styles.footerSocial}>
        <img src="/assets/icons/twitter.svg" alt="Twitter" className={styles.socialIcon} />
        <img src="/assets/icons/link.svg" alt="LinkedIn" className={styles.socialIcon} />
        <img src="/assets/icons/face.svg" alt="Facebook" className={styles.socialIcon} />
        <img src="/assets/icons/inst.svg" alt="Instagram" className={styles.socialIcon} />
      </div>
      <div className={styles.footerBottom}>
        <img src="/assets/icons/GG.svg" alt="GG Logo" className={styles.ggLogo} />
        <p className={styles.footerLink}>Help Center</p>
        <p className={styles.footerLink}>Privacy & Policy</p>
        <p className={styles.footerLink}>Terms of Service</p>
        <p className={styles.footerLink}>All rights reserved by GameGeek | 2023</p>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
