import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/jokes", (req, res) => {
  res.send("Server is ready");
  const jokes = [
    {
      id: 1,
      title: "1 joke",
      content: "This is 1 joke",
    },
    {
      id: 2,
      title: "2 joke",
      content: "This is 2 joke",
    },
    {
      id: 3,
      title: "3 joke",
      content: "This is 3 joke",
    },
    {
      id: 4,
      title: "4 joke",
      content: "This is 4 joke",
    },
    {
      id: 5,
      title: "5 joke",
      content: "This is 5 joke",
    },
  ];
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});