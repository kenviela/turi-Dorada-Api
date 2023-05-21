const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { db } = require("../../../database/connections");

const loginController = async (request, response) => {
  //data del body
  const { email = "", password = "" } = request.body;
  //buscar el usuario con el email
  console.log(email);
  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return response
      .status(401)
      .json({ message: "unauthorized user, wrong credentials1" });
  }
  //comparar la contraseña con la que envia el usuario
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return response
      .status(401)
      .json({ message: "unauthorized user, wrong credentials" });
  }
  //se gera token
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60,
  });
  //responde con el token
  response.json({ token });
};

module.exports = { loginController };
