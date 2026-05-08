# **Airbnb Clone**

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)](https://nodejs.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![npm version](https://img.shields.io/badge/npm-1.0.0-red)](https://www.npmjs.com/package/airbnb-clone)

A full-stack travel marketplace application that allows users to list, discover, and review accommodations worldwide.

---

## **Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

---

## **Overview**

This project is a comprehensive clone of Airbnb, designed to provide a seamless platform for travelers and hosts. It solves the problem of finding reliable local stays by providing a community-driven marketplace. The application follows a classic MVC (Model-View-Controller) architecture, using Node.js/Express for the backend, MongoDB for data persistence, and EJS for dynamic frontend rendering.

---

## **Features**

### **Frontend Features**
- **Dynamic Listing Display**: Browse accommodations with responsive cards and category filters (Trending, Rooms, Mountains, etc.).
- **Interactive Tax Toggle**: Real-time price adjustment to show totals including GST.
- **User Authentication UI**: Dedicated signup and login pages with client-side validation.
- **Responsive Design**: Built with Bootstrap to ensure a consistent experience across mobile, tablet, and desktop.
- **Rich Media**: High-quality image support for listings via Cloudinary.

### **Backend Features**
- **Robust Authentication**: Secure user sessions and password hashing using Passport.js and passport-local-mongoose.
- **Listing Management**: Complete CRUD operations for property listings, including image upload support.
- **Review System**: Nested review functionality allowing users to rate and comment on listings.
- **Authorization Middleware**: Granular access control ensuring only owners can edit/delete their listings and authors can delete their reviews.
- **Cloud Image Storage**: Integration with Cloudinary for scalable image hosting.
- **Server-Side Validation**: Strict data integrity using Joi schemas.
- **Global Error Handling**: Centralized error management and custom ExpressError utility.

---

## **Tech Stack**

### **Frontend**
- **Templating Engine**: [EJS (Embedded JavaScript)](https://ejs.co/)
- **Layouts**: [EJS-Mate](https://www.npmjs.com/package/ejs-mate)
- **Styling**: [Bootstrap 5](https://getbootstrap.com/), Custom CSS
- **Icons**: [FontAwesome](https://fontawesome.com/)

### **Backend**
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Authentication**: [Passport.js](https://www.passportjs.org/)
- **Validation**: [Joi](https://joi.dev/)
- **File Handling**: [Multer](https://www.npmjs.com/package/multer)
- **Utilities**: [method-override](https://www.npmjs.com/package/method-override), [connect-flash](https://www.npmjs.com/package/connect-flash)

### **Database**
- **Database**: [MongoDB](https://www.mongodb.com/)
- **ORM**: [Mongoose](https://mongoosejs.com/)

### **Other Tools**
- **Image Hosting**: [Cloudinary](https://cloudinary.com/)
- **Environment Management**: [dotenv](https://www.npmjs.com/package/dotenv)

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
