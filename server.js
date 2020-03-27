console.log("Hello World!");

const express = require("express");
const server = express();

server.get("/json", (req, res) => {
  res.json({ message: "Hello world" });
});

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server listening at ${port}`);
});

server.get("/items", (req, res) => {
  res.json({
    items: [
      { id: 1, name: "banana" },
      { id: 2, name: "apple" }
    ]
  });
});

server.get("/info", (req, res) => {
  res.sendFile(__dirname + "/info.html");
});
