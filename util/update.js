// Update MongoDB on "util/update.js".
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (guildID, date, u) => {
  await mongo().then(async (mongoose) => {
    try {
      await BDStorage.findOneAndUpdate(
        {
          mID: u,
        },
        {
          gID: guildID,
          bdate: date,
        },
        {
          upsert: true,
        }
      ).exec();
    } catch (e) {
      console.error(`X|<|${e} at update.js`);
    } finally {
      await mongoose.connection.close();
    }
  });
};
