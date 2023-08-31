const { json } = require("body-parser");

const userData = [
  { username: "admin", password: "admin@123" },
  { username: "manager", password: "manager@123" },
  { username: "teacher", password: "teacher@123" },
];

exports.login = async (req, res) => {
  try {
    let usernameCheck = await userData.find(
      (e) => e.username == req.body.username
    );
    if (!usernameCheck) {
      return res.status(400).json("Username not found");
    }
    let passwordCheck = await userData.find(
      (e) => e.password == req.body.password
    );
    if (!passwordCheck) {
      console.log("first");
      return res.status(400).json("password not match ! Try again");
    }
    docs = await userData.find((e) => e.username == req.body.username);
    res.json(docs);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
