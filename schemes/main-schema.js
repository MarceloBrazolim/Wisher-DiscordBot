// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema(
  {
    //member ID
    _id: {
      type: String,
      required: true,
    },
    //Birthday Date
    date: {
      type: Date,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("BDDates", reminder);
