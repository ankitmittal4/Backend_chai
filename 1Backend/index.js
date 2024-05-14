require("dotenv").config();
const express = require("express");
const app = express();
// const port = 5000;
// const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World !" });
  // res.send("Hello World!");
});

app.get("/youtube", (req, res) => {
  res.send("You are on Youtube");
});

app.get("/insta", (req, res) => {
  res.send("<h1>You are on Insta</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
