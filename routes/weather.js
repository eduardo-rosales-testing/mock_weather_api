const router = require("express").Router();
const WeatherRecord = require("../model/WeatherRecord");

// POST request to /weather (creates a new weather record, and uploads to db)
router.post("/", async (req, res) => {
  const weatherRecord = new WeatherRecord(req.body);
  try {
    const savedWeatherRecord = await weatherRecord.save();
    res.status(201).json({ data: savedWeatherRecord });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// GET request to /weather (returns all matching records, ordered by ids, in ascension)
router.get("/", async (req, res) => {
  const weatherRecords = await WeatherRecord.find({}).sort({ _id: 'ascending' });
  res.status(200).json({
    data: weatherRecords
  });
});
// GET request to /weather/:id (returns a single record with matching id)
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
// DELETE request to /weather/:id (deletes a single record with matching id)
router.delete("/:id", async (req, res) => {
  try {
    const weatherRecordExists = await WeatherRecord.findOneAndDelete({ _id: req.params.id });
    console.log(weatherRecordExists);
    if (weatherRecordExists) {
      res.status(204).json({
        msg: "No Content"
      });
    } else {
      res.status(404).json({
        msg: "Not Found"
      })
    }
  } catch (err) {
    res.status(404).json({
      msg: "Not Found"
    });
  }
});

module.exports = router;