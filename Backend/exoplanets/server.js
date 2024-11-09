require("dotenv").config();

//express and other functionalities
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

//routes
const routes = require("./backend/routes/routes");

//middleware
app.use(express.json());

//using routes
app.use("/api", routes);

//connecting database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "nasa", // Explicitly use the 'nasa' database
  })
  .then(() => {
    console.log("Connected to the NASA database");
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

//starting the server
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
