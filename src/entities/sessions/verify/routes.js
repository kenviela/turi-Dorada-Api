const router = require("express").Router();
const { verifyController } = require("./controller");

router.post("/", verifyController);

module.exports = router;
