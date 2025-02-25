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
│   │   │── ProductList.js
│   │   │── Cart.js
│   │   │── Filters.js
│   │   │── Header.js
│   │   │── Footer.js
│   │── pages/
│   │   │── Home.js
│   │   │── About.js
│   │   │── CartPage.js
│   │── styles/
│   │   │── styles.css
│── public/
│── package.json
│── README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/gamegeek.git
   ```
2. Navigate to the project folder:
   ```bash
   cd gamegeek
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

## Future Improvements
- Implement a backend to store cart data persistently.
- Enhance checkout functionality.
- Improve UI/UX with additional animations and interactive elements.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, reach out via:
- **Phone:** +4904-049-950
- **Website:** [GameGeek](https://your-website-link.com)
- **Social Media:** Twitter | LinkedIn | Facebook | Instagram

## February 25
- **QA Engineer** reviewed the entire project, identified key missing elements, and assigned missing tasks to **Frontend Developer**, **Designer**, and **Project Manager**.
- **QA Engineer** developed test files.
- **Project Manger** developed About page and project documentation
