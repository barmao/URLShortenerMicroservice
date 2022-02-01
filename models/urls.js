//Require Mongoose
const mongoose = require("mongoose")

//Define a schema
const Schema = mongoose.Schema


var UrlSchema = Schema({
  url    : String,
  shortUrl    : String,
});

  //Export function to create "SomeModel" model class
  const UrlModel = mongoose.model("Url", UrlSchema)
  module.exports = UrlModel