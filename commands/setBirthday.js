const Discord = require("discord.js");
const { client } = require("../main")
const { prefix } = require("../config.json");
const addReaction = require("../util/addReaction");
const { date } = require("../util/setInit")
//
const ID = client.users.cache.get("805035898990755850");

const confirmYes = new Discord.MessageEmbed()
.setColor("#831fde")
.setTitle("Irei me lembrar!! 👌")
.setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
.setDescription(
  `**O aniversário de ${u.username}#${u.discriminator} será em ${date}!**`
);

const confirmNo = new Discord.MessageEmbed()
.setColor("#831fde")
.setTitle("Se está com problemas, a sintaxe correta é:")
.setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
.setDescription(`**${prefix}set bd <mention> <mes/dia>**`);

module.exports = async (message, date) => {

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
