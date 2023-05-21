const { db } = require("../../database/connections");

const dashboardController = async (request, response) => {
  const places = await db
    .collection("places")
    .find({ likes: { $exists: true, $ne: 0 } })
    .sort({ likes: -1 })
    .toArray();
  return response.json(places);
};

module.exports = { dashboardController };
