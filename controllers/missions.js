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

// afficher une mission
//controller GET

const get = (req, res) => {
  const { id } = req.params;

  const missions = data.find((o) => o.id === id);

  if (!missions === undefined) {
    return res.status(404).json({ error: "record not found" });
  }
  res.json(missions);
};
//ajouter un mission

const add = (req, res) => {
  const { name } = req.body;
  if (name == null) {
    return res.status(400).json({ error: "missing parameter" });
  }

  const missions = {
    id: uuidv4(),
    name,
  };

  data.push(missions);
  res.json(missions);
};

//supprimer un mission

const remove = (req, res) => {
  const { id } = req.params;
  const missionsIndex = data.findIndex((o) => o.id == id);
  if (missionsIndex === -1) {
    return res.status(404).json({ error: "record not found!" });
  }

  data.splice(missionsIndex, 1);

  return res.status(204).send();
};

//Modifier un mission

const edit = (req, res) => {
  const {id} = req.params; 
  const {name} = req.body;
  if(name == null){ 
    return res.status(404).json({ error: "missing parameter" });
  }
  const missions = data.find((o) => o.id == id);
  if (missions === undefined){
return res.status(404).json({ error: "record not found!" });
  }

  missions.name = name;
  return res.json(missions);
}






//exporter la methode cree pour les routes
module.exports = {
  getAll: getAll,
  get: get,
  add: add,
  remove: remove,
  edit: edit,
};
