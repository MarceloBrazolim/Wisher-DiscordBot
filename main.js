const Discord = require("discord.js");
const { findIndex } = require("lodash");
const client = new Discord.Client();
const config = require("./config.json");

const getCommand = require("./util/getCommand");

const regex = [
  `\'`,
  `\"`,
  `\[`,
  `\]`,
  `\/`,
  `\{`,
  `\}`,
  `\(`,
  `\)`,
  `\*`,
  `\+`,
  `\?`,
  `\.`,
  `\\`,
  `\^`,
  `\$`,
  `\|`,
];

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

  var arg = message.content.slice(config.prefix.length).split("'");
  var args = arg.filter(a => arg = regex).join("").split(/ +/);
  console.log(args);

  const command = args.shift().toLowerCase();
  console.log(`\nCommand: { --${command} ${args} }`);

  await getCommand(message, command, args, client);
});

client.login(config.token);
