// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const guilds = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    // Guild/Server ID
    guild: {
      type: Array,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("guildsSchema", guilds);
