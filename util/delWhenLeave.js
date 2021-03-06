// Update MongoDB on "util/addWhenJoin.js".
const mongo = require("../mongo");
const guildsSchema = require("../schemes/guilds-schema");

module.exports = async (guildID) => {
  await mongo().then(async () => {
    try {
      await guildsSchema.deleteOne(
        {
          _id: guildID,
        },
      );
    } catch (err) {
      console.error(`X|<|${err} at delWhenLeave.js`);
    }
  });
};
