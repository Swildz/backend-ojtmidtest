require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const RouterUser = require("./routes/user.route");
const RouterProduct = require("./routes/product.route")
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
app.use("/product", RouterProduct)

app.use(express.static(__dirname))

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);
