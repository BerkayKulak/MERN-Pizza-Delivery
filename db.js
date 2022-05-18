const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://kulakberkay15:qXJYYPx1nPXn9rIk@cluster0.aa7xz.mongodb.net/pizzadelivery?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

db.on("error", () => {
  console.log(`Mongo DB Connection failed`);
});

module.exports = mongoose;
