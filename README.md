# Wisher-DiscordBot

### Method for mongoDB setup
```js
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
