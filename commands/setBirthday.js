const Discord = require("discord.js");
const processDate = require("../util/processDate");
const addReaction = require("../util/addReaction");

module.exports = async (message, args, uID, client) => {
  var date = processDate(new Date(args[2]), { format: "M d" });

  var ID = client.users.cache.get("805035898990755850");
  var helpEmbed = new Discord.MessageEmbed()
    .setColor("#831fde")
    .setTitle("Confirmação")
    .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
    .addFields(
      {name: "A data de aniversário tá correta?", value: processDate(date, { format: "MMMM d" })}
    );
  message.channel.send(helpEmbed);

  // Inserts into DB
  await update(date, uID);
};
