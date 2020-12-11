const mongoose = require("mongoose");

const URI =
  "mongodb+srv://shery:shery123@cluster0.ryder.mongodb.net/crudapp?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected");
};

module.exports = connectDB;
