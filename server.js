const express = require("express");
const app = express();
const port = 3000;
const initAllRoutes = require("./routes");

initAllRoutes(app);

app.get(`/ma-premiere-page`, (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  res.send("HEllo tout le monde");
});

app.listen(port, () => {
  console.log(`App started $(port)`);
});
