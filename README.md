# Wisher-DiscordBot

## Setup/Installation
Just create a file called "config.json" alongside "main.js" with the following information:
```json
{
    "token": "YOUR_BOT_ACCES_KEY_HERE",
    "prefix": "YOUR_PREFIX_HERE"
}
```

## TODO:

#### - Implement MongoDB
```js
// Method for mongoDB setup
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
