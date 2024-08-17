<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->

# shopTech

## Project Overview

**shopTech** is a full-stack single-page application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The website provides functionalities for searching, filtering, sorting, and pagination of product listings. Users can view and interact with various products across different categories and sort options.

## Features

1. **Pagination**: Efficiently load and display products with pagination controls.
2. **Searching**: Search for products by name.
3. **Categorization**: Filter products by Brand Name, Category Name, and Price Range.
4. **Sorting**: Sort products by Price (Low to High, High to Low) and Date Added (Newest first).
5. **Authentication**:
   - Google Authentication via Firebase.
   - Email and Password Authentication via Firebase.
6. **UI**:
   - Fully responsive design with a mobile-first approach.
   - Fixed-size product cards.
   - Navbar with website name/logo and routes.

## Technologies Used

- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Deployment**: Netlify (Frontend), Vercel (Backend)

## Installation & Setup

### Prerequisites

- Node.js
- npm or yarn

### Setup

1.  Clone the repository:

    ```bash
    git clone <backend-repository-url>
    cd <backend-directory>
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Create a `.env.local` file in the root directory and add the following environment variables from your firebase setup:

        ```env
        VITE_APIKEY=

    VITE_AUTHDOMAIN=
    VITE_PROJECTID=
    VITE_STORAGEBUCKET=
    VITE_MESSAGINGSENDERID=
    VITE_APPID=

    VITE_API_URL=your backend server url
    VITE_IMGBB_API_KEY=your imgbb api key

````

4. Start the frontend application:

   ```bash
   npm start
````

## Usage

1. Open the website in your browser.
2. Use the search bar to find products by name.
3. Apply filters based on Brand Name, Category Name, and Price Range.
4. Sort products by Price and Date Added.
5. Navigate through pages using the pagination controls.
6. Sign in using Google or Email/Password via Firebase Authentication.
