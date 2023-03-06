//importer les routes de missions
const missionsRoutes = require("./missions");
const missionsComm1Routes = require("./missionsComm1");

//Connexion aux routes
module.exports = function (app) {
  app.use("/", missionsRoutes);
  app.use("/", missionsComm1Routes);
};
