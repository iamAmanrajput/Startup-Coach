# 🚀 Startup Coach

**Startup Coach** is a full-stack web application built to help startup founders by offering essential support from day one. The platform features a sleek landing page and a working newsletter subscription system, developed using the MERN stack with a robust MVC architecture and modern Tailwind CSS styling.

---

## 👨‍💻 Developed By

**Aman Kumar**

---

## 📌 Features

- 🔹 **Landing Page**

  - Professional startup name and logo
  - Hero section with a compelling tagline
  - Newsletter subscription form (Name & Email)

- 🔹 **Newsletter Integration**

  - Fully functional form connected to the backend
  - Submissions are saved securely in MongoDB

- 🔹 **Clean Code Architecture**
  - Follows the MVC (Model-View-Controller) pattern for scalable backend structure
  - Reusable components and organized folder hierarchy

---

## ⚙️ Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Frontend     | React.js, Tailwind CSS      |
| Backend      | Node.js, Express.js         |
| Database     | MongoDB + Mongoose          |
| Architecture | MVC (Model-View-Controller) |

---

## 🗂️ Project Structure (Simplified)

```
startup-coach/
├── Frontend/          # React Frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       └── App.jsx
├── Backend/           # Node.js Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── index.js
├── .env
├── package.json
├── README.md
```

---

## 🛠️ Installation & Setup

> ⚠️ **Make sure MongoDB is running locally or connected via a cloud URI like MongoDB Atlas.**

### 🔽 Clone the repository:

```bash
git clone https://github.com/iamamanrajput/startup-coach.git
cd startup-coach
```

### 📦 Install Backend Dependencies:

```bash
cd Backend
npm install
```

### 💻 Install Frontend Dependencies:

```bash
cd ../Frontend
npm install
```

### 🔐 Create `.env` in `/Backend`

```bash
touch ../Backend/.env
```

Add the following to `.env`:

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/startup-coach
```

### ▶️ Run the App

```bash
# Run backend
cd ../Backend
npm run dev

# Run frontend
cd ../Frontend
npm start
```

---

## 🖼️ Screenshots

![image](https://github.com/user-attachments/assets/6f47cec4-f3e9-4ccb-b17d-3814c78d8da5)

---

## 🌐 Live Demo

🔗 [Visit Live Site](https://startupcoaching.vercel.app)

---

## 📬 Contact

For feedback, queries, or collaboration:

**Aman Kumar**  
📧 aman.it360@gmail.com  
🌐 [Portfolio](https://aman-rajput.vercel.app)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE)
