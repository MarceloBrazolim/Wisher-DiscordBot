// Update MongoDB on "util/update.js".
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (date, u) => {
  await mongo().then(async (mongoose) => {
    try {
      await BDStorage
        .findOneAndUpdate(
          {
            _id: u,
          },
          {
            date: date,
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
