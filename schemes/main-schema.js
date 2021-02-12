// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema({
  //member ID
  _id: {
    type: String,
    required: true,
  },
  //Birthday Date
  Date: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("wisherReminder", reminder);