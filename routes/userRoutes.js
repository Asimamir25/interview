const express = require("express");
const { registerUser } = require("../controller/registerUser");
const router = express.Router();
router.post("/signup", registerUser);
module.exports = router;
