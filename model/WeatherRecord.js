const mongoose = require("mongoose");

const weatherRecordSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lon: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  temperature: {
    type: Number,
  },
});

module.exports = mongoose.model("WeatherRecord", weatherRecordSchema);