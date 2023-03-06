const { v4: uuidv4 } = require("uuid");

// tableau de données initial contenant une mission vide avec un identifiant unique
const data = [
  {
    id: "32444227-1337-4d46-ba88-109f660a9173",
    missions_id: "M001",
    name: "Mission de maintenance préventive",
    ste: "ACME Corporation",
    Adress: "123 rue des Entreprises, 75001 Paris",
    Sdate: "2023-03-15T09:00:00.000Z",
    Edate: "2023-03-15T12:00:00.000Z",
    inter_type: "Maçon",
  },
];

// méthode pour obtenir toutes les missions
const getAll = (req, res) => {
  // renvoie toutes les missions stockées dans le tableau de données
  res.json(data);
};

// méthode pour obtenir une mission par son identifiant
const get = (req, res) => {
  const { id } = req.params;

  // recherche la mission correspondant à l'identifiant donné
  const mission = data.find((o) => o.id === id);

  // si aucune mission n'est trouvée, renvoie une erreur 404
  if (!mission) {
    return res.status(404).json({ error: "Mission not found" });
  }

  // renvoie la mission trouvée
  res.json(mission);
};

// méthode pour ajouter une mission
const add = (req, res) => {
  const { missions_id, name, ste, Adress, Sdate, Edate, inter_type } = req.body;

  // vérifie si le nom est fourni, sinon renvoie une erreur 400
  if ((!missions_id, !ste, !name, !Adress, !Sdate, !Edate, !inter_type)) {
    return res.status(400).json({ error: "Missing parameter 'name'" });
  }

  // crée une nouvelle mission avec un identifiant unique généré par uuidv4()
  const mission = {
    id: uuidv4(),
    missions_id,
    ste,
    name,
    Adress,
    Sdate,
    Edate,
    inter_type,
  };

  // ajoute la nouvelle mission au tableau de données
  data.push(mission);

  // renvoie la mission ajoutée
  res.json(mission);
};

// méthode pour supprimer une mission par son identifiant
const remove = (req, res) => {
  const { id } = req.params;

  // recherche la mission correspondant à l'identifiant donné
  const mission = data.findIndex((o) => o.id === id);

  // si aucune mission n'est trouvée, renvoie une erreur 404
  if (mission === -1) {
    return res.status(404).json({ error: "Mission not found" });
  }

  // supprime la mission du tableau de données
  data.splice(missionIndex, 1);

  return res.status(204).send();

  // méthode pour mettre à jour une mission par son identifiant
  const edit = (req, res) => {
    const { id } = req.params;

    // recherche la mission correspondant à l'identifiant donné
    const mission = data.find((o) => o.id === id);

    // si aucune mission n'est trouvée, renvoie une erreur 404
    if (!mission) {
      return res.status(404).json({ error: "Mission not found" });
    }

    // met à jour les propriétés de la mission si les nouvelles valeurs sont fournies
    const { name, ste, Adress, Sdate, Edate, inter_type } = req.body;
    if (name) {
      mission.name = name;
    }
    if (ste) {
      mission.ste = ste;
    }
    if (Adress) {
      mission.Adress = Adress;
    }
    if (Sdate) {
      mission.Sdate = Sdate;
    }
    if (Edate) {
      mission.Edate = Edate;
    }
    if (inter_type) {
      mission.inter_type = inter_type;
    }

    // renvoie la mission mise à jour
    res.json(mission);
  };
};
// Export des méthodes
module.exports = {
  getAll,
  get,
  add,
  edit,
  remove,
};
