const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/api/events", eventRoutes);
app.use("/api/user", userRoutes);

module.exports = app;
