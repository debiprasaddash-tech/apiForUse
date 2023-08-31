const bodyParser = require("body-parser");
const express = require("express");
const allController = require("./controller/AllController.js");
const app = express();
const port = 3000;
const router=express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/api/login",allController.login);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
