import React, { useState } from "react";
import styles from "./help.module.css";

const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    countryCode: "+998"
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{2}[-.\s]?[0-9]{2}$/
    if (emailRegex.test(formData.email) && (formData.phone==="" || phoneRegex.test(formData.phone))) {
      console.log("Form submitted:", formData);
      setIsEmailValid(true);
      setIsPhoneValid(true);
      formData.name=""
      formData.email=""
      formData.phone=""
      formData.comment=""
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
    else{
      console.log("Form is invalid:", formData);
      setShowSuccessMessage(false);
      if(emailRegex.test(formData.email))setIsEmailValid(false);
      if(formData.phone==="" || phoneRegex.test(formData.phone))setIsPhoneValid(false);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    }
  };

  return (
    <div className={styles.helpContainer}>
      <h2 className={styles.helpTitle}>Need Help?</h2>
      <p className={styles.helpText}>We're here to assist you with anything you need. Explore the topics below or contact our support team directly.</p>

      <div className={styles.faqSection}>
        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
        <ul className={styles.faqList}>
          <li className={styles.faqItem}><strong>How do I track my order?</strong><br />You can track your order by logging into your account and visiting the 'Orders' section.</li>
          <li className={styles.faqItem}><strong>What is your return policy?</strong><br />We offer a 30-day return policy on all items. Please check our returns page for more details.</li>
          <li className={styles.faqItem}><strong>How do I contact customer support?</strong><br />You can reach out to us via  directly at support@gamegeek.com.</li>
        </ul>
      </div>

      <div className={styles.contactSection}>
        <h3 className={styles.contactTitle}>Still need help?</h3>
        <p className={styles.contactText}>Our support team is available Monday to Friday from 9 AM to 6 PM.</p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.inputField}
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className={isEmailValid ? styles.inputField : styles.invalidInput}
              required
            />
          </div>
          <div className={styles.formRow}>
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className={styles.countryCodeSelect}
            >
              <option value="+998">+998 (Uzbekistan)</option>
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+49">+49 (Germany)</option>
              <option value="+33">+33 (France)</option>
              <option value="+91">+91 (India)</option>
              <option value="+81">+81 (Japan)</option>
              <option value="+61">+61 (Australia)</option>
              <option value="+86">+86 (China)</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={isPhoneValid ? styles.inputField : styles.invalidInput}
            />
          </div>
          <textarea
            name="comment"
            placeholder="Comment *"
            value={formData.comment}
            onChange={handleChange}
            className={styles.textArea}
            required
          />
          <button type="submit" className={styles.contactButton}>Send</button>
        </form>

        {showSuccessMessage && (
            <div className={styles.successMessage}>
              ✓ Message Sent. Our Operators Will Reach Out To You Soon!
            </div>
        )}

        {(!isEmailValid || ! isPhoneValid) && (
            <div className={styles.failMessage}>
               Form Is Invalid
            </div>
        )}
      </div>
    </div>
  );
};

export default Help;
