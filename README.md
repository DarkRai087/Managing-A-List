# User Management System

This is a full-stack User Management System built with **React** (frontend) and **Node.js** (backend). It allows users to perform CRUD operations (Create, Read, Update, Delete) on user data.

---

## Features

- View all users
- Add a new user
- Edit user details
- Delete a user
- Backend API with Express.js
- Frontend built with React and TailwindCSS

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/Assignment.git
   cd Assignment
   ```

2. Install dependencies for the backend:

   ```bash
   cd server
   npm install
   ```

3. Install dependencies for the frontend:

   ```bash
   cd ../Client
   npm install
   ```

---

## Running the Application

### Backend (Server)

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Start the backend server:

   ```bash
   node server.js
   ```

   The backend server will run on `http://localhost:5000`.

---

### Frontend (Client)

1. Navigate to the Client directory:

   ```bash
   cd ../Client
   ```

2. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`.

---

## API Endpoints

### Base URL: `/api`

- **GET** users - Get all users
- **GET** `/users/:id` - Get a user by ID
- **POST** `/user` - Create a new user
- **PUT** `/user/:id` - Update a user by ID
- **DELETE** `/user/:id` - Delete a user by ID

---

## Folder Structure

```
Assignment/
├── Client/                # Frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main React app
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # TailwindCSS styles
│   └── package.json       # Frontend dependencies
├── server/                # Backend
│   ├── src/
│   │   ├── controllers/   # API controllers
│   │   ├── middleware/    # Middleware functions
│   │   ├── models/        # Data models
│   │   └── routes/        # API routes
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

---

## Technologies Used

### Frontend:
- React
- TailwindCSS
- Axios

### Backend:
- Node.js
- Express.js
- CORS
- Morgan

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---
