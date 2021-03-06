// Update MongoDB on "util/addWhenJoin.js".
const mongo = require("../mongo");
const guildsSchema = require("../schemes/guilds-schema");

module.exports = async (guildID, guildName, ownID) => {
  await mongo().then(async () => {
    try {
      await guildsSchema.findOneAndUpdate(
        {
          _id: guildID,
        },
        {
          name: guildName,
          ownerID: ownID
        },
        {
          upsert: true,
        }
      );
    } catch (err) {
      console.error(`X|<|${err} at addWhenJoin.js`);
    }
  });
};
