import React, { useState } from "react";
import styles from "./help.module.css";

const countries = [
  { code: "+998", name: "Uzbekistan", flag: "https://flagcdn.com/w20/uz.png" },
  { code: "+1", name: "USA", flag: "https://flagcdn.com/w20/us.png" },
  { code: "+44", name: "UK", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "+49", name: "Germany", flag: "https://flagcdn.com/w20/de.png" },
  { code: "+33", name: "France", flag: "https://flagcdn.com/w20/fr.png" },
  { code: "+91", name: "India", flag: "https://flagcdn.com/w20/in.png" },
  { code: "+81", name: "Japan", flag: "https://flagcdn.com/w20/jp.png" },
  { code: "+61", name: "Australia", flag: "https://flagcdn.com/w20/au.png" },
  { code: "+86", name: "China", flag: "https://flagcdn.com/w20/cn.png" },
];

const Help = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
    countryCode: countries[0].code,
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCountrySelect = (countryCode) => {
    setFormData({ ...formData, countryCode });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const selectedCountry = countries.find(
    (country) => country.code === formData.countryCode
  );

  return (
    <div className={styles.helpContainer}>
      <h2 className={styles.helpTitle}>Need Help?</h2>
      <p className={styles.helpText}>
        We're here to assist you with anything you need. Explore the topics
        below or contact our support team directly.
      </p>
      <div className={styles.faqSection}>
        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
        <ul className={styles.faqList}>
          <li className={styles.faqItem}><strong>How do I track my order?</strong><br />You can track your order by logging into your account and visiting the 'Shopping Cart' section.</li>
          <li className={styles.faqItem}><strong>What is your return policy?</strong><br />We offer a 30-day return policy on all items. Please check our returns page for more details.</li>
          <li className={styles.faqItem}><strong>How do I contact customer support?</strong><br />You can reach out to us via  directly at support@GameGeek.com.</li>
        </ul>
      </div>

      <div className={styles.contactSection}>
        <h3 className={styles.contactTitle}>Still need help?</h3>
        <p className={styles.contactText}>
          Our support team is available Monday to Friday from 9 AM to 6 PM.
        </p>

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
              className={styles.inputField}
              required
            />
          </div>

          <div className={styles.formRow}>
            <div
              className={styles.customSelect}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div className={styles.selectedOption}>
                <img
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  className={styles.flagIcon}
                />
                {selectedCountry.code} ({selectedCountry.name})
              </div>
              {isDropdownOpen && (
                <ul className={styles.optionsList}>
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      className={styles.optionItem}
                      onClick={() => handleCountrySelect(country.code)}
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className={styles.flagIcon}
                      />
                      {country.code} ({country.name})
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <input
              mtype="text"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className={styles.inputField}
              required
            />
          </div>

          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            className={styles.textArea}
          />
          <button type="submit" className={styles.contactButton}>
            Send
          </button>
        </form>

        {showSuccessMessage && (
          <div className={styles.successMessage}> Message Sent. Our Operators Will Reach Out To You Soon!</div>
        )}
      </div>
    </div>
  );
};

export default Help;