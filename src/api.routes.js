const sessionsRouter = require("./entities/sessions/routes");
const router = require("express").Router();
const placesRouter = require("./entities/places/routes");
const categoryRouter = require("./entities/categories/routes");
const dashboardRouter = require("./entities/dashboard/routes");
router.use("/sessions", sessionsRouter);
router.use("/places", placesRouter);
router.use("/category", categoryRouter);
router.use("/dashboard", dashboardRouter);
module.exports = router;