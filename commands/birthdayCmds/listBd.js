// const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
// const moment = require("moment");

module.exports = async (message) => {
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.find({
        _id: String,
        bdate: Date,
      });
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }
    } finally {
      await mongoose.connection.close();
      return;
    }
  });

  return;
};
