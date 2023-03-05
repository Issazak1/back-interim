const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 3000;
const initAllRoutes = require("./routes");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

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
