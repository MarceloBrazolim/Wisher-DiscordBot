// Update MongoDB on "util/update.js".
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (guildID, date, u) => {
  await mongo().then(async () => {
    try {
      await BDStorage.findOneAndUpdate(
        {
          _id: u,
        },
        {
          $push: { gID: guildID },
          bdate: date,
        },
        {
          upsert: true,
        }
      );
    } catch (err) {
      console.error(`X|<|${err} at update.js`);
    }
  });
};
