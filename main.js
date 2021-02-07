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
  client.user.setActivity(`${config.prefix}help`, { type: "LISTENING" }).catch(console.error);
  console.log("Wisher is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  
  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  console.log(`Command: { --${command} ${args} }`);

  getCommand(message, command, args);
});

client.login(config.token);
