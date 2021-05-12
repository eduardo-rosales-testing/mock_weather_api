const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// configure .env file
dotenv.config();
// connect to the database
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => console.log("connected to the database")
);

// import route
const authenticateRoute = require("./routes/auth");
const weatherRoutes = require("./routes/weather");
const verifyToken = require("./routes/validate-token");
// middlewares
app.use(express.json());
// authentication route middleware
app.use("/authenticate", authenticateRoute);
// protected routes
app.use("/weather", verifyToken, weatherRoutes)
app.listen(4000, () => {
  console.log("server is running...");
});