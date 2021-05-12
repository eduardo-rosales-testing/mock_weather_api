const router = require("express").Router();
const WeatherRecord = require("../model/WeatherRecord");

// protected POST request to /weather (creates a new weather record, and uploads to db)
router.post("/", async (req, res) => {
  const weatherRecord = new WeatherRecord(req.body);
  try {
    const savedWeatherRecord = await weatherRecord.save();
    res.status(201).json({ data: savedWeatherRecord });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// protected DELETE request to /weather/:id (deletes a single record with matching id)
router.delete("/:id", async (req, res) => {
  try {
    const weatherRecordExists = await WeatherRecord.findOneAndDelete({ _id: req.params.id });
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