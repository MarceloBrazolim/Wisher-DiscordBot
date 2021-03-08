const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (currentGuild, guildToLink) => {
  await mongo().then(async () => {
    try {
      await BDStorage.updateMany(
        {
          gID: guildToLink,
        },
        {
          $addToSet: { gID: currentGuild }, // For now it does nothing, since to register you have already to be registered
        },
        {
          upsert: true,
          multi: true,
        }
      );
    } catch (err) {
      console.error(`X|<|${err}`);
    }
  });
};
