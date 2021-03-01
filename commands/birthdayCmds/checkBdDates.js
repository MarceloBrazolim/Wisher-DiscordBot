// const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
// const moment = require("moment");

const isDateToday = require("../../util/isDateToday");

module.exports = (dates) => {
    await mongo().then(async (mongoose) => {
        try {
          const results = await BDStorage.find();
          if (!results) {
            await message.channel.send("Não achei registros na minha lista.. 🧐");
            return;
          }
        } finally {
          await mongoose.connection.close();
          return;
        }
      });

      for (let date of dates) {
          isDateToday(date);
        }
        return;
};
