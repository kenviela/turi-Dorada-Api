const { MongoClient, ObjectId } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const name = "turi_dorada";

const toId = (id) => new ObjectId(id);
module.exports = { client, db: client.db(name), toId };
