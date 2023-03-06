// Importer le module uuid pour générer des identifiants uniques
const { v4: uuidv4 } = require("uuid");

// Initialiser un tableau de missions vide
const data = [
  {
    id: "",
    name: "",
    ste: "",
    Sdate: "",
    Edate: "",
    inter: "",
  },
];

// Obtenir toutes les missions
// Contrôleur GETALL
const getAll = (req, res) => {
  res.json(data);
};

// Obtenir une mission par son ID
// Contrôleur GET
const get = (req, res) => {
  const { id } = req.params;

  const mission = data.find((o) => o.id === id);

  if (mission === undefined) {
    return res.status(404).json({ error: "Mission non trouvée" });
  }
  res.json(mission);
};

// Ajouter une mission
const add = (req, res) => {
  const { name, ste, Sdate, Edate, inter } = req.body;

  // Vérifier si le nom de la mission est manquant
  if (name == null) {
    return res.status(400).json({ error: "Paramètre manquant" });
  }

  // Créer une nouvelle mission avec un identifiant unique
  const mission = {
    id: uuidv4(),
    name,
    ste,
    Sdate,
    Edate,
    inter,
  };

  // Ajouter la nouvelle mission au tableau
  data.push(mission);
  res.json(mission);
};

// Supprimer une mission par son ID
const remove = (req, res) => {
  const { id } = req.params;
  const missionIndex = data.findIndex((o) => o.id == id);

  // Vérifier si la mission n'existe pas
  if (missionIndex === -1) {
    return res.status(404).json({ error: "Mission non trouvée" });
  }

  // Supprimer la mission du tableau
  data.splice(missionIndex, 1);

  return res.status(204).send();
};

// Modifier une mission par son ID
const edit = (req, res) => {
  const { id } = req.params;
  const { name, ste, Sdate, Edate, inter } = req.body;

  // Vérifier si le nom de la mission est manquant
  if (name == null) {
    return res.status(400).json({ error: "Paramètre manquant" });
  }

  // Trouver la mission correspondante dans le tableau
  const mission = data.find((o) => o.id == id);

  // Vérifier si la mission n'existe pas
  if (mission === undefined) {
    return res.status(404).json({ error: "Mission non trouvée" });
  }

  // Mettre à jour les propriétés de la mission
  mission.id = id;
  mission.name = name;
  mission.ste = ste;
  mission.Sdate = Sdate;
  mission.Edate = Edate;
  mission.inter = inter;

  return res.json(mission);
};

// Exporter les fonctions pour les routes
module.exports = {
  getAll: getAll,
  get: get,
  add: add,
  remove: remove,
  edit: edit,
};
