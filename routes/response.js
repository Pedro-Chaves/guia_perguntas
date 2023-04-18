const express = require("express");
const router = express.Router();
const responseController = require("../controllers/responseController");

router.post("/", responseController.respond);

module.exports = router;