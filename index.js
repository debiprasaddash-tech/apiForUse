// const bodyParser = require("body-parser");
// const express = require("express");
// const allController = require("./controllers/AllController");
// const mongoose = require("mongoose");

// const app = express();
// const port = 3000;

// // MongoDB Connection
// mongoose.connect("mongodb://127.0.0.1:27017/mcq-app", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.post()
// // app.get("/api/register", allController.register);

// app.post("/api/login", allController.login);
// app.get("/api/search", allController.search);

// app.listen(port, () => console.log(`http://localhost:${port}`));

// app.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const mcqRoutes = require("./routes/mcqRoutes");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const app = express();
const PORT = process.env.PORT || 8008;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
app.use("/api", mcqRoutes);

// Start the Express Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
