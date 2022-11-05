const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://Mshradha17:Wisj5YopJchd1h5r@cluster0.nczxmpj.mongodb.net/todo?retryWrites=true&w=majority"
);

module.exports = connection;
