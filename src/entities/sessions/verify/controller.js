const jwt = require("jsonwebtoken");
const { db, toId } = require("../../../database/connections");

const roles = { ADMIN: "ADMIN", USER: "USER" };
const verifyController = async (request, response) => {
  try {
    const { token, role } = request.body;
    //verificar el token
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    //sacamos el userId del token
    const user = await db
      .collection("users")
      .findOne({ _id: toId(decoded._id) });

    if (!user) {
      return response.status(404).json({ message: "user not found" });
    }

    const newToken = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: 60 * 60,
      }
    );

    if (user.role === roles.ADMIN) {
      return response.json({ token: newToken });
    }
    if (role != user.role) {
      return response.status(404).json({ message: "no authorize user" });
    }

    response.json({ token: newToken });
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
};

module.exports = { verifyController };
