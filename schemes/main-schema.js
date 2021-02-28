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
      type: Date,
      required: true,
    },
    // Member name
    memberUsername: {
      type: String,
      required: true,
    },
    memberDiscriminator: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("BDDates", reminder);
