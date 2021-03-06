// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const guilds = mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    ownerID: {
      type: String,
      required: true,
    },
    // Guild/Server ID
    name: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("guildsSchema", guilds);
