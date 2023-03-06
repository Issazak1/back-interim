const express = require("express");
const router = express.Router();

const controller = require("../controllers/missionsComm");

router.get("/missionsComm", controller.getAll);
router.get("/missionsComm/:id", controller.get);
router.post("/missionsComm", controller.add);
router.put("/missionsComm/:id", controller.edit);
router.delete("/missionsComm/:id", controller.remove);

module.exports = router;
