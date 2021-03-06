// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema(
  {
    // Guild/Server ID
    gID: {
      type: Array,
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
  },
  { versionKey: false }
);

module.exports = mongoose.model("BDDates", reminder);
