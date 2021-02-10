# Wisher-DiscordBot

*Method for mongoDB setup*
await mongo().then((mongoose) => {
  try {
    console.log("Connected to MongoDB!");
  } finally {
    mongoose.connection.close();
  }
});
