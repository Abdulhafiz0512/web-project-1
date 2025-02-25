import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <div className="about-banner wave-animation">
        <h1 className="fade-in">Welcome to GameGeek</h1>
        <p className="fade-in">Your ultimate destination for high-quality gaming gear and accessories.</p>
      </div>
      
      <div className="about-content">
        <h2 className="slide-in">Why Choose GameGeek?</h2>
        <ul className="list-container pulse-animation">
          <li className="list-item glow-effect">More than 15+ professional gaming brands</li>
          <li className="list-item glow-effect">Over 2500+ gaming products</li>
          <li className="list-item glow-effect">Exclusive deals and discounts</li>
          <li className="list-item glow-effect">Fast shipping and reliable customer service</li>
          <li className="list-item glow-effect">Expert recommendations and latest gaming news</li>
        </ul>
        
        <h2 className="slide-in">Our Mission</h2>
        <p className="fade-in">
          At GameGeek, we believe gaming is more than just a hobby—it's a passion. Our mission is to equip every gamer 
          with the tools they need to succeed, whether you're a casual player or a professional esports competitor.
        </p>

        <div className="grid-container">
          <div className="grid-item zoom-in flip-animation">
            <h3>Exclusive Deals</h3>
            <p>Get access to limited-time offers and discounts on top gaming gear.</p>
          </div>
          <div className="grid-item zoom-in flip-animation">
            <h3>Expert Reviews</h3>
            <p>Our team provides detailed insights on the latest gaming products.</p>
          </div>
          <div className="grid-item zoom-in flip-animation">
            <h3>Fast Shipping</h3>
            <p>Enjoy quick delivery on all orders, no matter where you are.</p>
          </div>
        </div>

        <h2 className="slide-in">Join Us</h2>
        <p className="fade-in">
          Become part of the GameGeek community today! Follow us on social media, explore our latest collections, 
          and stay ahead of the game with our expert-curated content.
        </p>
        
        <div className="contact bounce-in pulse-animation">
          <p><strong>Contact Us:</strong></p>
          <p>Phone: +4904-049-950</p>
        </div>
      </div>
    </div>
  );
}
