const Discord = require("discord.js");
const client = new Discord.Client();
// const mongoose = require("mongoose");
const mongo = require("./mongo");

const config = require("./config.json");
const { version } = require("./package.json");

const getCommand = require("./util/getCommand");

client.once("ready", async () => {
  client.user
    .setActivity(`${config.prefix}help`, { type: "LISTENING" })
    .catch(console.error);

  console.log(`\n=>_$./Wisher Bot App v${version}`);
  // Method for mongoDB setup on "main.js".
  await mongo().then((mongoose) => {
    try {
      console.log(`||>|Connected to MongoDB!`);
    } finally {
      mongoose.connection.close();
    }
  });

  console.log("||>|Wisher is Online!");
});

client.on("message", async (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  var uMessage = encodeURI(message);
  var arg = uMessage.slice(config.prefix.length).split("'");
  const args = arg
    .filter(() => (arg = "'"))
    .join("")
    .split("%20");
  const command = args.shift().toLowerCase();
  console.log(
    `||_:\n||=|${message.author.username}#${message.author.discriminator}:\n||<|Command: { ${config.prefix}${command} ${args} }`
  );

  await getCommand(message, command, args, client);
});

client.login(config.token);
