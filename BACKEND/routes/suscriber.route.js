const express = require("express");
const router = express.Router();
const { subscribeUser } = require("../controllers/suscriber.controller");

router.post("/suscribe", subscribeUser);

module.exports = router;
