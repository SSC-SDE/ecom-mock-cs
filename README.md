# eCommerce Website Frontend


## Problem Statement

This project aims to create the frontend for an eCommerce website. The application allows users to browse products, edit product details, manage a shopping cart, and more. The design is based on provided mockups.


## Features

- **Navbar**: 

  - Displays the cart items count.

  - Provides relevant navigation links.


- **All Products Page**: 

  - Fetches and displays a list of products from a dummy API.

  - Each product can be edited inline by clicking the "pencil" button.

  - Notifications are shown upon successful editing or deletion of a product.

  - Products can be deleted with a delete button, which also triggers a notification.

  - A sort button allows sorting products by price, with an option to remove the sort.


- **Add to Cart**: 

  - Users can add products to their cart from the product list and product detail pages.


- **Create Page**: 

  - Users can add new products to the database via an "Add" button, with notifications for success or failure.


- **Product Detail Page**: 

  - Displays all details of a selected product.

  - Includes an option to add the product to the cart.


- **Cart Page**: 

  - Shows all items currently in the cart.

  - Handles errors and success alerts appropriately.


- **Error Handling**: 

  - Displays alerts for errors from the API and other actions.


## Technologies Used

- **React**: For building the user interface.

- **Redux**: For state management.

- **React Router**: (Optional) For routing between different pages.

- **JSON Server**: For creating a dummy eCommerce API.


## Getting Started


### Prerequisites

- Node.js and npm installed on your machine.
