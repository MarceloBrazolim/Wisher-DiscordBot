// Update MongoDB on "util/update.js".
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (guildID, date, u, user) => {
  await mongo().then(async (mongoose) => {
    try {
      await BDStorage.findOneAndUpdate(
        {
          gID: guildID,
        },
        {
          _id: u,
          bdate: date,
          memberUser: username,
          memberDisc: discr,
        },
        {
          upsert: true,
        }
      ).exec();
    } finally {
      await mongoose.connection.close();
    }
  });
};
