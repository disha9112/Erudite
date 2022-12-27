const mongoose = require("mongoose");
require("dotenv").config();
const db_url = process.env.DB_URL;

const connectToDB = async () => {
  try {
    mongoose.connect(db_url, { useNewUrlParser: true });
    const connection = mongoose.connection;
    connection.once("open", () => {
      console.log("Database connection established successfully");
    });
  } catch (err) {
    console.log(`Database error: ${err.message}`);
    process.exit();
  }
};

module.exports = connectToDB;
