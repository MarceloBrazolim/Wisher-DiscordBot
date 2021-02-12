// Update MongoDB on "util/update.js".
const remindSchema = require("../schemes/main-schema");

module.exports = async (date, uID) => {
  await mongo().then(async (mongoose) => {
    try {
      await remindSchema
        .findOneAndUpdate(
          {
            _id: uID,
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