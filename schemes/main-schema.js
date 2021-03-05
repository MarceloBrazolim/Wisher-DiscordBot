// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema(
  {
    // Guild/Server ID
    gID: {
      type: String,
      required: true,
    },
    // Member ID
    mID: {
      type: String,
      required: true,
    },
    // Birthday Date
    bdate: {
      type: String,
      required: true,
    },
    // Member name
    uInfo: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("BDDates", reminder);
