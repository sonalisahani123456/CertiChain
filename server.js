const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const certificateRoutes = require("./routes/certificateRoutes");
require("dotenv").config();


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/certificates", certificateRoutes);

// Routes
// const certificateRoutes = require("./routes/certificateRoutes");
// app.use("/api/certificates", certificateRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Error:", err));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/', (req, res) => {
  res.send("CertiChain Backend is Live 🚀");
});