const categoryController = (request, response) => {
  const data = request.body;
  const category = db
    .collection("places")
    .insertOne({ category: data.place.category });
  return response.send("oi");
};

module.exports = { categoryController };
