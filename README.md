# Vijay Electronics CCTV & Security Systems

A professional Amazon-like e-commerce application specifically designed for CCTV Cameras and Security Systems. Built with React, Vite, and Tailwind CSS.

## Features

- **Amazon-like Design**: Professional header, mega menu, sidebar filters, and clean product grid.
- **Responsive**: Fully mobile-responsive layout.
- **Product Management**: Browse by Category (Bullet, Dome, PTZ, etc.), Brand (CP Plus, Hikvision, etc.).
- **Search & Filter**: Real-time search and advanced filters for Price, Brand, and Ratings.
- **Cart System**: Full cart functionality with quantity adjustments and dynamic total calculation.
- **Admin Dashboard**: A mock admin panel to view stats and manage products.
- **SEO Optimized**: Integration of provided SEO keywords and descriptions on the Home page.

## Project Structure

- `src/components`: Reusable UI components (Navbar, Hero, ProductCard, Sidebar, etc.)
- `src/pages`: Main pages (Home, Shop, ProductDetail, Cart, Admin)
- `src/context`: State management for Cart
- `src/data`: Mock database `products.js` enriched with SEO content
- `src/assets/seo_docs`: Original SEO text files provided

## How to Run

1.  Open a terminal in the project folder.
2.  Install dependencies (if not already done):
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
4.  Open the link shown (usually `http://localhost:5173`) in your browser.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Lucide React (Icons)
