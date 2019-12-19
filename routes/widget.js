const mongoose = require("mongoose");

 const widgetSchema = mongoose. Schema({
   pageId: { type: mongoose.Schema.Types.ObjectId, ref: "Page"},
   widgetType: {
     type: String,
     enum: ["HEADING", "IMAGE", "YOUTUBE"],
     require: true
   },
   name: {type: String},
   text: {type: String},
   url: {type: String},
   width: {type: String},
   size: {type: String},
 });

 module.exports = mongoose.model("Widget")