# 🚀 Startup Coach

**Startup Coach** is a full-stack web application built to help startup founders by offering essential support from day one. The platform features a clean landing page and a working newsletter subscription system, developed using the MERN stack with a robust MVC architecture and modern Tailwind CSS styling.

---

## 👨‍💻 Developed By

**Aman Kumar**

---

## 📌 Features

- 🔹 **Landing Page**

  - Startup name and logo (placeholder)
  - Hero section with a bold tagline
  - Newsletter subscription form (Name & Email fields)

- 🔹 **Newsletter Integration**

  - Fully functional form connected to the backend
  - Submissions saved securely in MongoDB

- 🔹 **Clean Code Structure**
  - Follows the MVC (Model-View-Controller) design pattern for scalable backend development
  - Reusable components and organized folder structure

---

## ⚙️ Tech Stack

| Layer        | Technology                  |
| ------------ | --------------------------- |
| Frontend     | React.js, Tailwind CSS      |
| Backend      | Node.js, Express.js         |
| Database     | MongoDB (with Mongoose)     |
| Architecture | MVC (Model-View-Controller) |

---

## 📁 Folder Structure (Simplified)

    startup-coach/
    ├── Frontend/ # React frontend
    │   ├── public/
    │   └── src/
    │       ├── components/
    │       ├── pages/
    │       └── App.jsx
    ├── Backend/ # Node.js backend
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── config/
    │   └── index.js
    ├── .env
    ├── package.json
    ├── README.md

---

## 🛠️ Installation & Setup

> Make sure MongoDB is running locally or provide a cloud URI in `.env`.

    # Clone the repository
    git clone https://github.com/iamamanrajput/startup-coach.git
    cd startup-coach

    # Install backend dependencies
    cd server
    npm install

    # Install frontend dependencies
    cd ../client
    npm install

    # Create .env file inside /server
    touch ../server/.env
    # Add your environment variables (example below)

    # Run the backend
    cd ../server
    npm run dev

    # Run the frontend
    cd ../client
    npm start

---

## 🔐 Example `.env` File

    PORT=5000
    MONGO_URI=mongodb://localhost:27017/startup-coach

---

## 🌐 Live Demo (Optional)

Add your deployment link here if hosted.

---

## 📬 Contact

For questions or collaboration, feel free to reach out to:

**Aman Kumar**  
📧 aman.it360@gmail.com  
🌐 [LinkedIn Profile or Portfolio link]

---

## 📄 License

This project is licensed under the MIT License.
