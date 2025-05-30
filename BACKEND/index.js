const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { dbConnect } = require("./config/database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
};
app.use(cors(corsOptions));
app.use(express.json());

dbConnect();

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Homepage!</h1>");
});

app.use("/api", require("./routes/suscriber.route"));

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
