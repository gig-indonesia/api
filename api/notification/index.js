const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require("../helpers");

router.get("/:id", controller.search);
router.get("/", helpers.isAuthenticated, controller.getAll);
router.post("/", controller.post);
router.delete("/:id", controller.deleteOne);
router.put("/:id", controller.search);

module.exports = router;
