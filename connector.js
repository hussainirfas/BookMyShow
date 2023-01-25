require("dotenv").config();
const { MongoClient } = require("mongodb");
const { MOGOURI } = require('./config/keys')

let mongoose = require("mongoose");


// for development.
// const mongoURI = "mongodb://localhost:27017/" + "bookMovie"
const connectToMongo = async () => {
  // Connecting to database using connection string and speciying if there is any error or it was successfull
  mongoose
    .connect(MOGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("connection established with mongodb server online");
    })
    .catch((err) => {
      console.log("error while connection", err);
    });
};

exports.connection = connectToMongo;
