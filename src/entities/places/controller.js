const { db, toId } = require("../../database/connections");

const placesController = async (request, response) => {
  const data = request.body;
  const place = await db.collection("places").findOne({ name: data.name });

  if (place != null && place.name === data.name) {
    return response.status(401).json({ message: "the place exists" });
  }

  await db.collection("places").insertOne({ ...data, likes: 0 });
  return response.json({ message: "place added " });
};

const searchController = async (request, response) => {
  const { category } = request.query;
  const places = await db.collection("places").find({ category }).toArray();
  return response.json(places);
};

const likeController = async (request, response) => {
  const { id } = request.params;
  const place = await db.collection("places").findOne({ _id: toId(id) });

  let likes = (place.likes || 0) + 1;

  console.log(likes);
  await db
    .collection("places")
    .updateOne({ _id: toId(id) }, { $set: { likes } });

  return response.json({ message: "like added" });
};
module.exports = { placesController, searchController, likeController };
