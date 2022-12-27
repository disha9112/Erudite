const express = require("express");
const router = express.Router();

const { register } = require("../controllers/auth/register.controller");
const { login } = require("../controllers/auth/login.controller");
// const { getUser } = require("../controllers/auth/getUser");

// const validated = require("../middlewares/validated");

router.post("/register", register);
router.post("/login", login);
// router.get("/getUser", validated, getUser);

module.exports = router;
