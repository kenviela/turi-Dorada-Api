const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { db } = require("../../../database/connections");

const signupController = async (request, response) => {
  const { name, password, email } = request.body;
  try {
    const cryptPassword = await bcrypt.hash(password, 10);
    const user = await db
      .collection("users")
      .insertOne({ name, email, password: cryptPassword, role: "USER" });
    const token = jwt.sign(
      { _id: user.insertedId.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: 60 * 60,
      }
    );
    response.json({ token });
  } catch (error) {
    if (error.code == 11000) {
      const emailError = { message: "ya existe este correo, intenta con otro" };
      Object.assign(error, { email: emailError });
    }

    console.log(error);
    response.status(500).send(error);
  }
};

module.exports = { signupController };
