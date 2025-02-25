# GameGeek E-Commerce Website

## Overview
GameGeek is an e-commerce website specializing in gaming products, with a focus on headphones and audio accessories. The website features product listings, filtering and sorting options, an interactive shopping cart, and static information pages.

## Features
- **Main Page:** Displays a list of gaming products with images, descriptions, and prices.
- **Add to Cart:** Clicking the "Add to Cart" button adds the product to the shopping cart and disables the button.
- **Cart Page:** Displays selected products, allowing users to increase or decrease quantity or remove items.
- **Filtering & Sorting:** Users can filter products by brand, connectivity, and color, and sort by price.
- **Static Pages:** Includes "Brands," "What's New," "Sales," "Help," and "About" pages.
- **Clear Cart Button:** Removes all items from the cart.
- **Proceed to Checkout:** Currently does not perform any actions.

## Technologies Used
- **Frontend:** React.js, HTML, CSS
- **Styling:** Custom CSS animations and effects
- **State Management:** Local state (React Hooks)

## Project Structure
```
GameGeek/
│── src/
│   │── components/
│   │   │── about/
│   │   │   │── About.css
│   │   │   │── about.jsx
│   │   │── aside/
│   │   │   │── Sidebar.jsx
│   │   │   │── sidebar.module.css
│   │   │── brands/
│   │   │   │── brands.jsx
│   │   │   │── brands.module.css
│   │   │── cart/
│   │   │   │── Cart.jsx
│   │   │   │── cart.module.css
│   │   │── filter/
│   │   │   │── Filter.jsx
│   │   │   │── filter.module.css
│   │   │── footer/
│   │   │   │── Footer.jsx
│   │   │   │── footer.module.css
│   │   │── header/
│   │   │   │── Header.jsx
│   │   │   │── header.module.css
│   │   │── help/
│   │   │   │── help.jsx
│   │   │   │── help.module.css
│   │   │── hero/
│   │   │   │── banner.png
│   │   │   │── Hero.jsx
│   │   │   │── hero.module.css
│   │   │── nav/
│   │   │   │── Nav.jsx
│   │   │   │── nav.module.css
│   │   │── new/
│   │   │   │── new.jsx
│   │   │── ProductDetails/
│   │   │   │── ProductDetails.jsx
│   │   │   │── productDetails.module.css
│   │   │── ProductList/
│   │   │   │── productList.jsx
│   │   │   │── productList.module.css
│   │   │── sales/
│   │   │   │── sales.jsx
│   │── store/
│   │   │── cartSlice.js
│   │   │── headphonesSlice.js
│   │   │── store.js
│   │── App.css
│   │── App.js
│   │── App.test.js
│   │── index.css
│   │── index.js
│   │── logo.svg
│   │── reportWebVitals.js
│   │── setupTests.js
│── content/
│── design/
│── public/
│── package.json
│── package-lock.json
│── README.md
│── DEVELOPMENT_TIMELINE.md
│── .gitignore

```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Abdulhafiz0512/web-project-1
   ```
2. Navigate to the project folder:
   ```bash
   cd web-project-1
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Browse products on the main page.
- Use filters to refine search results.
- Click "Add to Cart" to add items (button turns gray when added).
- View selected items in the cart page.
- Adjust product quantities using "+" and "-" buttons.
- Remove items from the cart using the "-" button.
- Click "Clear Cart" to empty the cart.
- Click "Proceed to Checkout" (currently inactive).

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out via:
- **Phone:** +4904-049-950
- **Social Media:** Twitter | LinkedIn | Facebook | Instagram
