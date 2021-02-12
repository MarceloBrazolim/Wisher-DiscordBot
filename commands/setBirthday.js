const Discord = require("discord.js");
const moment = require("moment");
const { prefix } = require("../config.json");
const addReaction = require("../util/addReaction");

module.exports = async (message, args, u, client) => {
  moment.locale("pt-br");
  var date = moment(new Date(args[2])).format("DD [de] MMMM");
  console.log(`D|>|Debug: ${date}`);

  var ID = client.users.cache.get("805035898990755850");
  var confirmationEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Blz! A data de aniversário está certa?")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .setDescription(`**${date}.**`);

  let msgEmbed = message.channel.send(confirmationEmbed);
  var reactions = ["❌", "🔸", "✅"];
  await addReaction(msgEmbed, reactions);

  const handleReactions = (reaction, user) => {
    const emoji = reaction._emoji.name;
    const { guild } = reaction.message;

    const member = guild.members.cache.find((member) => member.id === user.id);

    if (!message.author.id == member.id) return;
    switch (emoji) {
      case "✅":
        msgEmbed.delete(1000);
        return true;
      case "❌":
        msgEmbed.delete(1000);
        return false;
    }
  };

  client.on("messageReactionAdd", async (reaction, user) => {
    if (user.id === "805035898990755850") return;
    if (handleReactions(reaction, user)) {
      var confirmYes = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Irei me lembrar!! 👌")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .setDescription(
          `**O aniversário de ${u.username}#${u.discriminator} será em ${date}!**`
        );
      await message.channel.send(confirmYes);
    } else if (!handleReactions(reaction, user)) {
      var confirmNo = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Se está com problemas, a sintaxe correta é:")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .setDescription(`**${prefix}set bd <mention> <mes/dia>**`);
      await message.channel.send(confirmNo);
    } else {
      await message.channel.send(
        "Ops. Acho que quebrei 🥴. Chame meu criador, por favor"
      );
    }
  });

  // Inserts into DB
  // update(date, u.id);
};
