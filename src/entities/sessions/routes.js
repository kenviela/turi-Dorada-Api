const router = require("express").Router();
const signupRouter = require("./signup/routes");
const loginRouter = require("./login/routes");
const verifyRouter = require("./verify/routes");

router.use("/signup", signupRouter);
router.use("/login", loginRouter);
router.use("/verify", verifyRouter);
module.exports = router;
