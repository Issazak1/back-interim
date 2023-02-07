const { v4: uuidv4 } = require("uuid");

const data = [
  {
    id: "da0fef64-7bf3-46b9-8efa-176e632605e7",
    name: "mission 1",
  },

  {
    id: "d7561404-4260-412a-b0ce-00b1843762a4",
    name: "mission 2",
  },
];

// afficher une mission
//controller GETALL
const getAll = (req, res) => {
  res.json(data);
};
//controller GET
const get = (req, res) => {
  const { id } = req.params;
  const missions = data.find((o) => {
    return o.id === id;
  });
  if (!missions=== undefined) {
    return res.status(404).json({ error: "record not found" });
  }
  res.json("missions");
};

// afficher une mission

//supprimer un mission

//Modifier un mission

//ajouter un mission
//exporter la methode cree pour les routes
module.exports = {
  getAll: getAll,
  get: get,
};
