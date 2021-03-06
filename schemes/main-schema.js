// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema(
  {
    // Member ID
    _id: {
      type: String,
      required: true,
    },
    // Guild/Server ID
    gID: {
      type: Array,
      required: true,
    },
    // Birthday Date
    bdate: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("BDDates", reminder);
