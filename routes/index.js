//importer les routes de missions
const missionsRoutes = require("./missions");

//Connexion aux routes
module.exports = function (app) {
  app.use("/", missionsRoutes);
};
