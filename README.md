# Wisher - Bot for Discord

## Setup/Installation
Just create a file called "config.json" alongside "main.js" with the following information:
```json
{
    "wisher": "YOUR_BOT_ACCES_KEY_HERE",
    "prefix": "YOUR_PREFIX_HERE",
    "mongoPath": "YOUR_DATABASE_PATH_HERE"
}
```

## TODO:

- [ ] __Document__ (optional...),
- [ ] Fix any bugs (ongoing endlessly),
- [ ] Add option for the user to opt to not be included in the data-base,
- [ ] Host the bot,
- [x] Optimize img and gif commands (web scraper),
- [x] Change web scraper from ~~dogpile~~ one that doesn't work to ~~google~~ one that works (ongoing (tricky)),
- [x] Add function to show when and whose is the next special date,
- [x] Create management functions and interaction,
- [x] Create ~~check~~/~~trigger~~ function for main feature,
- [x] (v1.5.4) Test and validade the application,
- [x] Create "set" command _embed interface_ and dialog,
- [x] Implement date processment,

- [x] Implement MongoDB.
```diff
- SOME OF THE FOLLOWING CODE IS __DEPRECATE__, VALIDATE BEFORE IMPLEMENTING.
```

```js
// Method for mongoDB setup on "main.js".
const mongoose = require("mongoose")

client.once("ready", async () => {
  await mongo().then((mongoose) => {
    try {
      console.log("Connected to MongoDB!");
    } finally {
      mongoose.connection.close();
    }
  });
});
```

```js
// Schema on "schemes/main-schema.js".
const mongoose = require("mongoose");
const reminder = mongoose.Schema({
  //member ID
  _id: {
    type: String,
    required: true,
  },
  //Birthday Date
  Date: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("wisherReminder", reminder);
```

```js
// Update MongoDB on "util/update.js".
const remindSchema = require("../schemes/main-schema");
const { result } = require("./processDate");
const { user } = require("../commands/setInir");

module.exports = async () => {
  await mongo().then(async (mongoose) => {
    try {
      await remindSchema
        .findOneAndUpdate(
          {
            _id: uID,
          },
          {
            Date: result,
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
```

```js
// Method to process the data to "update.js" on "util/processDate.js".
const { ptBR } = require("date-fns/locale");
const { isFuture } = require("date-fns");
const update = require("./update");

module.exports = async (date, uID) => {
  //process date
  result = format(date, "M d", { locale: ptBR }).split(/ +/);
  console.log(result);

  if (isFuture(new date())) {
    update(uID)
  }
};
```
