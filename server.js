// import express library
const express = require("express");
// import path module
const path = require("path");
// init express
const app = express();
const connectDB = require("./config/db");

// Connect DB
connectDB();

// const mongoose = require("mongoose");
// const config = require("config");
 
// const db = config.get("mongo");
 
// const connectDB = async () => {
//   await mongoose.connect(db);
// };
 
// module.exports = connectDB;

app.use(express.json()); 


// Define Routes
app.use("/api/user", require("./routes/user"));
app.use("api/website", require("./routes/website"));
// app.use("api/page", require("./routes/page"));
// app.use("api/widget", require("./routes/widget"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
 
const PORT = process.env.PORT || 3100;
 // create a server listening at localhost:3100
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
 
