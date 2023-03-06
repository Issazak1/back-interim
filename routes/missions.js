const express = require("express");
const router = express.Router();

const controller = require("../controllers/missions");

router.get("/missions", controller.getAll);
router.get("/missions/:id", controller.get);
router.post("/missions", controller.add);
router.put("/missions/:id", controller.edit);
router.delete("/missions/:id", controller.remove);

module.exports = router;
