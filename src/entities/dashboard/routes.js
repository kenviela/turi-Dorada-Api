const router = require("express").Router();
const { dashboardController } = require("./controller");

router.get("/", dashboardController);

module.exports = router;
