const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

router.get("/create", questionController.create);
router.get("/:id", questionController.details);
router.post("/", questionController.insert);

module.exports = router;