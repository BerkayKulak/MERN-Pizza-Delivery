const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://kulakberkay15:qXJYYPx1nPXn9rIk@cluster0.aa7xz.mongodb.net/pizzadelivery?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Mongo DB connection successfull");
  });

  connection.on("error", () => {
    console.log("Mongo DB connection error");
  });
}

connectDB();

module.exports = mongoose;
