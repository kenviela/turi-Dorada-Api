const router = require("express").Router();
const { categoryController } = require("./controller");

router.post("/", categoryController);

module.exports = router;
