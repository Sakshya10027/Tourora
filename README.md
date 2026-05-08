# **Tourora**

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![npm version](https://img.shields.io/badge/npm-1.0.0-red)](https://www.npmjs.com/package/airbnb-clone)

Tourora is a premium full-stack travel marketplace application that allows users to list, discover, and book unique accommodations worldwide.

---

## **Table of Contents**

- [Overview](#overview)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [License](#license)

---

## **Overview**

Tourora provides a seamless platform for travelers and hosts, solving the challenge of finding and booking reliable local stays. Built with a robust MVC (Model-View-Controller) architecture, it leverages Node.js/Express, MongoDB, and EJS to deliver a high-performance, user-centric experience.

---

## **Key Features**

### **Search & Discovery**
- **Global Search**: Find accommodations by Title, Location, or Country with real-time backend filtering.
- **Dynamic Listing Display**: Browse accommodations with responsive cards and category filters (Trending, Rooms, Mountains, etc.).
- **Interactive Tax Toggle**: Real-time price adjustment to show totals including GST.

### **Frontend & UX**
- **Full Responsiveness**: Optimized for mobile (375px+), tablet, and desktop screens.
- **Modern Navigation**: Centered search bar on desktop and a streamlined single-line layout on mobile.

### **Backend & Security**
- **Robust Authentication**: Secure user sessions and password hashing using Passport.js.
- **Authorization Middleware**: Granular access control for listing owners and review authors.
- **Cloud Image Storage**: High-performance image hosting via Cloudinary.
- **Server-Side Validation**: Strict data integrity using Joi schemas and centralized error handling.

---

## **Tech Stack**

### **Frontend**
- **Templating**: EJS (Embedded JavaScript) with EJS-Mate layouts.
- **Styling**: Bootstrap 5 & Custom CSS (Media Queries for all breakpoints).
- **Interactions**: Vanilla JavaScript for modals, validation, and dynamic UI updates.

### **Backend**
- **Runtime**: Node.js & Express.js.
- **Authentication**: Passport.js & passport-local-mongoose.
- **Session Management**: express-session with connect-mongo (MongoDB session store).
- **File Handling**: Multer & multer-storage-cloudinary.

### **Database**
- **Primary DB**: MongoDB (Atlas) via Mongoose ODM.

---

## **Project Structure**

```text
airbnb-clone/
├── controllers/          # Business logic for route handlers
│   ├── lisitngs.js       # Listings logic
│   ├── reviews.js        # Reviews logic
│   └── users.js          # Auth and user logic
├── init/                 # Database initialization scripts
│   ├── data.js           # Sample data
│   └── index.js          # DB seeding script
├── models/               # Mongoose schemas
│   ├── listing.js        # Property listing schema
│   ├── review.js         # Review schema
│   └── user.js           # User schema
├── public/               # Static assets
│   ├── css/              # Stylesheets
│   └── js/               # Client-side JavaScript
├── routes/               # Express routers
│   ├── listing.js        # Listing endpoints
│   ├── review.js         # Review endpoints
│   └── user.js           # Auth endpoints
├── utils/                # Helper utilities
│   ├── ExpressError.js   # Custom error class
│   └── wrapAsync.js      # Async error wrapper
├── views/                # EJS templates
│   ├── includes/         # Partial templates (navbar, footer)
│   ├── layouts/          # Base layouts
│   ├── listings/         # Listing-related pages
│   └── users/            # Auth-related pages
├── .env                  # Environment variables (secret)
├── app.js                # Main application entry point
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Custom auth and validation middleware
├── package.json          # Project metadata and dependencies
└── schema.js             # Joi validation schemas
```

---

## **Getting Started**

### **Prerequisites**
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher
- **MongoDB**: Local instance or Atlas URI
- **Cloudinary Account**: For image upload functionality

### **Installation**

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd airbnb-clone

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create a .env file in the root directory
touch .env
```

### **Running the App**

```bash
# Seed the database (Optional - run once)
node init/index.js

# Start the server
node app.js
```
The app will be available at `http://localhost:8080`.

---

## **Environment Variables**

| Variable Name | Description | Example Value |
|---|---|---|
| CLOUD_NAME | Cloudinary Cloud Name | `your_cloud_name` |
| CLOUD_API_KEY | Cloudinary API Key | `123456789012345` |
| CLOUD_API_SECRET | Cloudinary API Secret | `your_api_secret` |
| Node_ENV | Environment mode | `development` |

### **.env Example**
```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
Node_ENV=development
```

---

## **API Documentation**

### **Listings**
#### `GET /listings`
**Description:** Fetches all listings.

#### `POST /listings`
**Description:** Creates a new listing (Auth required).
**Request Body (Multipart/Form-Data):**
```json
{
  "listing[title]": "Modern Apartment",
  "listing[description]": "City center view",
  "image": "File",
  "listing[price]": 1500,
  "listing[location]": "New Delhi",
  "listing[country]": "India"
}
```

#### `GET /listings/:id`
**Description:** Shows details for a specific listing.

### **Reviews**
#### `POST /listings/:id/reviews`
**Description:** Adds a review to a listing (Auth required).
**Request Body:**
```json
{
  "review[rating]": 5,
  "review[comment]": "Great place!"
}
```

### **Users**
#### `POST /signup`
**Description:** Registers a new user.

#### `POST /login`
**Description:** Authenticates a user.

---

## **Available Scripts**

| Script | Command | Description |
|---|---|---|
| test | `npm test` | Placeholder for running tests |
| start | `node app.js` | Starts the application |

---

## **Contributing**

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add: amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## **License**

This project is licensed under the ISC License — see the [LICENSE](LICENSE) file for details.
