# Wisher-DiscordBot

### Method for mongoDB setup
```js
client.once("ready", async () => {
  await mongo().then((mongoose) => {
    try {
      console.log("Connected to MongoDB!");
    } finally {
      mongoose.connection.close();
    }
  });
)};
```
