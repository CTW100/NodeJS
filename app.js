const path = require("path");
const bodyParser = require("body-parser");

const MongoConnect = require("./utils/database").MongoConnect;
const getDb = require("./utils/database").getDb;

const express = require("express");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

const errorController = require("./controllers/error");

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use("/", errorController.get404);

MongoConnect(() => {
  app.listen(3000);
});
