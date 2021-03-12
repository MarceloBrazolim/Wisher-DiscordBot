const Discord = require("discord.js");
const client = new Discord.Client();

const mongo = require("./mongo");
const addWhenJoin = require("./util/addWhenJoin");
const delWhenLeave = require("./util/delWhenLeave");
const deleteGuild = require("./util/deleteGuild");

const config = require("./config.json");
const { name, version } = require("./package.json");

const getCommand = require("./util/getCommand");

client.once("ready", async () => {
  try {
    client.user.setActivity(`${config.prefix}help`, { type: "LISTENING" });
  } catch (err) {
    console.error(`X|<|${err} at main.js`);
  }

  console.log(`\n=>_$./${name} v${version}`);
  // Method for mongoDB setup on "main.js".
  try {
    await mongo().then(() => {
      console.log(`||>|Connected to MongoDB!`);
    });
  } catch {
    console.error("X|<|Could not connect to MongoDB!");
  }

  console.log(`||>|${client.user.tag} is Online!`);

  client
    .generateInvite({
      permissions: [
        "SEND_MESSAGES",
        "ADD_REACTIONS",
        "EMBED_LINKS",
        "VIEW_CHANNEL",
        "MENTION_EVERYONE",
      ],
    })
    .then((link) => {
      console.log(`||>|Bot invite link: ${link}`);
    })
    .catch(console.error);
});

// Triggers everytime bot joins a guild
client.on("guildCreate", async function (guild) {
  console.log(`||>|Bot Joined guild: "${guild.name}"`);
  await addWhenJoin(guild.id, guild.name, guild.ownerID);
});
// Trigger whenever a guild is deleted/left
client.on("guildDelete", async function (guild) {
  console.log(`||>|Bot left guild: "${guild.name}"`);
  await delWhenLeave(guild.id);
  await deleteGuild(guild.id);
});

client.on("disconnect", async function (event) {
  await mongo().then((mongoose) => {
    mongoose.connection.close();
  });
});

client.on("message", async (message) => {
  if (
    !message.content.startsWith(config.prefix) ||
    message.author.bot ||
    message.channel.type === "dm"
  )
    return;

  var arg = encodeURI(message).slice(config.prefix.length).trim().split("'");
  const args = arg
    .filter(() => (arg = "'"))
    .join("")
    .split("%20");
  const command = args.shift().toLowerCase();
  console.log(
    `||_:\n||=|${message.author.username}#${message.author.discriminator}:\n||<|Command: { ${config.prefix}${command}: ${args} }`
  );

  await getCommand(message, command, args, client);
});

client.login(config.token);
