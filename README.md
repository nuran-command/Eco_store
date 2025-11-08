# EcoLife Store

## Project Overview
**EcoLife Store** is a responsive e-commerce website focused on eco-friendly products.  
It demonstrates front-end development concepts including HTML, CSS, JavaScript, jQuery, and Bootstrap.  
The website includes interactive features like product search, cart functionality, CRUD tables, and an image gallery with filtering and lightbox.

---

## Features

### Core Features
- **Product Listings**: Card layout with product images, descriptions, and prices.  
- **Pricing Table**: Table showing product name, description, and price.  
- **Shopping Cart**: Add products, view total, adjust quantity, and remove items.  
- **Dynamic Search**: Filter products in real-time as user types.  
- **Admin Product Manager**: Full CRUD table to add, edit, and delete products.  
- **Contact Form**: Name, email, message, password fields with validation, confirm password, and password strength indicator.  
- **Gallery Page**: Categorized images with filter buttons and lightbox for full-size viewing.  

### Design & UX
- Fully responsive using **Bootstrap** and custom media queries.  
- Consistent color scheme using CSS variables (`--green`, `--yellow`, `--blue`, etc.).  
- Card hover effects, smooth scrolling, and animations for interactivity.  
- Uniform image sizing with `object-fit: cover` and `loading="lazy"` for performance.  
- Pseudo-class styling (`.product-card:nth-child(odd)`) alternates card appearance.

---

## Project Structure
EcoLifeStore/
│
├─ index.html
├─ products.html
├─ about.html
├─ contact.html
├─ cart.html
├─ gallery.html
├─ admin.html
│
├─ css/
│   └─ style.css
│
├─ js/
│   ├─ main.js
│   ├─ cart.js
│   └─ validation.js
│
├─ img/
│   └─ [all images used]
│
└─ README.md

---

## Technologies Used
- HTML5 & CSS3  
- JavaScript & jQuery  
- Bootstrap 5  
- Responsive design / media queries  
- Lightbox plugin for gallery  
- Dynamic CRUD table management  

---

## Usage Instructions
1. Clone or download the repository.  
2. Open `index.html` in a web browser to view the homepage.  
3. Navigate to pages:
   - `products.html` – Product listings and search.  
   - `cart.html` – Shopping cart.  
   - `contact.html` – Contact form with password validation.  
   - `gallery.html` – Image gallery with filtering and lightbox.  
   - `admin.html` – Admin CRUD table management.  
4. All features work client-side; no backend required.

---

## Project Highlights
- Interactive and responsive e-commerce website prototype.  
- Dynamic UI features such as search, CRUD, and cart animations.  
- CSS variables and pseudo-class styling for maintainable code.  
- Lazy-loading images and media queries improve performance and mobile experience.

---

## Notes
- CRUD actions in `admin.html` are temporary and reset on page reload.  
- Future improvements could include backend integration for persistent data.
