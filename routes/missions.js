const express = require("express");
const router = express.Router();

const controller = require("../controllers/missions");

router.get("/missions", controller.getAll);
router.get("/missions/:id", controller.get);

module.exports = router;
