const { Router } = require("express");
const router = Router();
const { validateHeader } = require("../controllers/validateHeader.controller");

const { getUsers, createUser } = require("../controllers/user.controller");

router.get("/api/user", validateHeader, getUsers);
router.post("/api/user", validateHeader, createUser);

module.exports = router;
