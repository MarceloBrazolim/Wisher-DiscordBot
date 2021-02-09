const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

const getCommand = require("./util/getCommand");

client.once("ready", async () => {
  //   await mongo().then((mongoose) => {
  //     try {
  //       console.log("Connected to MongoDB!");
  //     } finally {
  //       mongoose.connection.close();
  //     }
  //   });
  client.user
    .setActivity(`${config.prefix}help`, { type: "LISTENING" })
    .catch(console.error);
  console.log("Wisher is Online!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  try {
    var arg = message.content
      .slice(config.prefix.length)
      .toLowerCase()
      .split("'");
    const args = arg
      .filter(() => (arg = "'"))
      .join("")
      .split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(`\nCommand: { ${config.prefix}${command} ${args} }`);

    await getCommand(message, command, args, client);
  } catch {
    message.react("🤔");
    console.error;
  }
});

client.login(config.token);
