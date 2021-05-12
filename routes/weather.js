const router = require("express").Router();
const WeatherRecord = require("../model/WeatherRecord");

// unprotected GET request to /weather (returns all matching records, ordered by ids, in ascension)
router.get("/", async (req, res) => {
  const weatherRecords = await WeatherRecord.find({}).sort({ _id: 'ascending' });
  res.status(200).json({
    data: weatherRecords
  });
});
// unprotected GET request to /weather/:id (returns a single record with matching id)
router.get("/:id", async (req, res) => {
  try {
    const weatherRecord = await WeatherRecord.findById(req.params.id);
    if (weatherRecord) {
      res.status(200).json({
        data: weatherRecord
      });
    }
  } catch (err) {
    return res.status(404).json({
      error: "Not Found"
    });
  }
});

module.exports = router;