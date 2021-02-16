// Update MongoDB on "util/update.js".
const mongo = require("../mongo");
const remindSchema = require("../schemes/main-schema");

module.exports = async (date, u) => {
  await mongo().then(async (mongoose) => {
    try {
      await remindSchema
        .findOneAndUpdate(
          {
            _id: u,
          },
          {
            Date: date,
          },
          {
            upsert: true,
          }
        )
        .exec();
    } finally {
      mongoose.connection.close();
    }
  });
};
