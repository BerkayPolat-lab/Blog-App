# 📓 MERN Blog App

A full-stack Blog Application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) that allows users to **Create, Read, Update, and Delete (CRUD)** blog posts. The app features user authentication, responsive UI, and RESTful API structure.

---

## 🚀 Features

- User Authentication (Sign Up, Log In, Log Out)
- Create, Read, Update, Delete blog posts
- Responsive and clean UI
- RESTful API using Express & Node.js
- MongoDB database for storing user & blog post data
- Protected routes for authorized users
- Frontend built with React + TailwindCSS
- Real-time form validation and error handling

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- React Router DOM
- Context API / Redux (optional for state management)
- TailwindCSS / Shadcn UI / Custom CSS

**Backend:**

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for Authentication
- Bcrypt.js for password hashing

---

## 📝 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone git@github.com:BerkayPolat-lab/Blog-App.git
cd blog-app
```

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Run the backend server:

```bash
npm start
```

### 3️⃣ Setup Frontend

```bash
cd ../client
npm install
npm start
```

The app will be available at:

- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5000/api`

---


## 📄 API Endpoints

| Method | Endpoint            | Description              |
|-------:|:--------------------|:-------------------------|
|  POST  | /api/auth/register  | Register a new user      |
|  POST  | /api/auth/login     | Login user & return token|
|  GET   | /api/posts          | Get all blog posts       |
|  GET   | /api/posts/:id      | Get single post          |
|  POST  | /api/posts          | Create new post          |
|  PUT   | /api/posts/:id      | Update post              |
|  DELETE| /api/posts/:id      | Delete post              |

---

## ✅ Future Enhancements

- Comment system for each post
- Post categories/tags
- Rich text editor integration
- Like & share functionality
- Pagination for blog posts
- Admin dashboard for user/post management

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

---

## 📃 License

This project is licensed under the MIT License.
