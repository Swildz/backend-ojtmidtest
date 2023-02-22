require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RouterUser = require("./routes/user.route");
const cors = require("cors");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then((res) => {
    console.log("database terhubung");
  })
  .catch((e) => {
    console.log("database tidak terhubung");
  });

app.use(cors());
app.use(bodyParser.json());
app.use("/", RouterUser);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
