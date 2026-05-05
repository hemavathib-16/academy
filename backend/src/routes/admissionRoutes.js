const express = require("express");
const { createAdmission } = require("../controllers/admissionController");

const router = express.Router();

router.post("/", createAdmission);

module.exports = router;
