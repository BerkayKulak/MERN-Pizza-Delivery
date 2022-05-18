const express = require("express");
const Pizza = require("./models/pizzaModel");

const app = express();
const db = require("./db.js");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");

app.use("/api/pizzas", pizzasRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
