const router = require("express").Router();
const { signupController } = require("./controller");

router.post("/", signupController);

module.exports = router;
