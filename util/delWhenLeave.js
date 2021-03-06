// Update MongoDB on "util/addWhenJoin.js".
const mongo = require("../mongo");
const guildsSchema = require("../schemes/guilds-schema");

module.exports = async (guildID) => {
  await mongo().then(async () => {
    try {
      await guildsSchema.findOneAndUpdate(
        {
          _id: "8008",
        },
        {
          $pull: { guilds: { $in: guildID } },
          count: { $subtract: 1 },
        },
        {
          upsert: true,
          safe: true,
          multi: true,
        }
      );
    } catch (err) {
      console.error(`X|<|${err} at delWhenLeave.js`);
    }
  });
};
