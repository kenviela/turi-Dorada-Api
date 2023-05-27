const { DB_URL } = process.env;
const { MongoClient, ObjectId } = require("mongodb");
const url = DB_URL;
const client = new MongoClient(url);
const name = "turi_dorada";

const toId = (id) => new ObjectId(id);
module.exports = { client, db: client.db(name), toId };
