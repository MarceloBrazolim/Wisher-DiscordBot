const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (currentGuild) => {
  await mongo().then(async () => {
    try {
      await BDStorage.updateMany(
        {
          gID: currentGuild,
        },
        {
          $pull: { gID: { $in: [currentGuild] } },
        },
        {
          multi: true,
        }
      );
    } catch (err) {
      console.error(`X|<|${err}`);
    }
  });
};
