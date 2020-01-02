const mongoose = require("mongoose");
const config = require("config");
 
const db = config.get("mongo");
 
// const connectDB = async () => 
async function connectDB() {
  await mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
};
 
module.exports = connectDB;
