const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//middlewares
app.use(cors());
app.use(bodyParser.json());

//import routes
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("you are home");
});

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to db");
  }
);
//listening port
app.listen(3000);
