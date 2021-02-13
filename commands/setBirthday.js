const Discord = require("discord.js");
const client = Discord.Client();
const moment = require("moment");
const { prefix } = require("../config.json");
const addReaction = require("../util/addReaction");
//

// const generateEmbed = async (message, args, ID) => {

// };

const confirmNo = new Discord.MessageEmbed()
  .setColor("#831fde")
  .setTitle("Se está com problemas, a sintaxe correta é:")
  .setDescription(`**${prefix}set bd <mention> <mes/dia>**`);

module.exports = async (message, args, u, client) => {
  const ID = client.users.cache.get("805035898990755850");

  moment.locale("pt-br");
  const date = moment(new Date(args[2])).format("DD [de] MMMM");
  console.log(`D|>|Debug: ${date}`);

  const confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Blz! A data de aniversário está certa?")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .setDescription(`${date}.`);

  var msgEmbed = await message.channel.send(confirmationEmbed);
  const reactions = ["❌", "🔸", "✅"];
  await addReaction(msgEmbed, reactions);

  const handleReactions = (reaction, user) => {
    const emoji = reaction._emoji.name;
    const { guild } = reaction.message;

    const member = guild.members.cache.find((member) => member.id === user.id);

    if (!message.author.id == member.id) return;
    switch (emoji) {
      case "✅":
        return true;
      case "❌":
        return false;
    }
  };

  // var msgEmbed = await generateEmbed(message, args, ID);

  client.on("messageReactionAdd", async (reaction, user) => {
    if (user.id == "805035898990755850") return;

    switch (handleReactions(reaction, user)) {
      case true:
        await message.channel.send(confirmYes);
        return;

      case false:
        await message.channel.send(confirmNo);
        return;
    }
  });

  // Inserts into DB
  // await update(date, uID);
};
