const express = require("express"); // Importe le module Express
const bodyParser = require("body-parser"); // Importe le module Body-Parser
const cors = require("cors"); // Importe le module Cors
const app = express(); // Initialise une nouvelle instance de l'application Express
const port = 2000; // Définit le port sur lequel l'application sera écoutée
const initAllRoutes = require("./routes"); // Importe le fichier qui définit toutes les routes

app.use(cors()); // Active le middleware CORS pour autoriser les requêtes cross-origin

app.use(bodyParser.urlencoded({ extended: true })); // Active le middleware Body-Parser pour analyser le corps des requêtes avec un encodage URL

initAllRoutes(app); // Initialise toutes les routes en utilisant l'application Express

app.get(`/ma-premiere-page`, (req, res) => {
  // Définit une route GET pour "/ma-premiere-page"
  res.send("hello world"); // Envoie la réponse "hello world"
});

app.post("/", (req, res) => {
  // Définit une route POST pour "/"
  res.send("hello world"); // Envoie la réponse "hello world"
});

app.listen(port, () => {
  // Lance l'application en écoutant les connexions sur le port spécifié
  console.log(`App started $(port)`); // Affiche un message de démarrage de l'application
});
