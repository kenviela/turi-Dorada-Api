const router = require("express").Router();
const {
  placesController,
  searchController,
  likeController,
} = require("./controller");

router.get("/", searchController);
router.post("/", placesController);
router.patch("/show/like/:id", likeController);
module.exports = router;
