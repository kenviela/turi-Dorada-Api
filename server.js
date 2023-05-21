const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const apiRoutes = require("./src/api.routes");
const app = express();
const port = 8000;
const cors = require("cors");
const { client } = require("./src/database/connections");

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded());
app.use(cors());
app.use("/api", apiRoutes);
app.get("/", async (request, response) => {
  response.send("Hello world");
});
app.listen(port, async () => {
  try {
    console.log("conectando con la BD");
    await client.connect();
    console.log("todo OK");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
});
