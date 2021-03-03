// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema(
  {
    // Member ID
    _id: {
      type: String,
      required: true,
    },
    // Birthday Date
    bdate: {
      type: String,
      required: true,
    },
    // Member name
    memberUser: {
      type: String,
      required: true,
    },
    memberDisc: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("BDDates", reminder);
