const Discord = require("discord.js");
const mongo = require("../../mongo");
const BDStorage = require("../../schemes/main-schema");
const getUserID = require("../../util/getUserID");
const moment = require("moment");

module.exports = async (message) => {
  const user = await getUserID(message);
  console.log(user);
  if (!user) return;

  moment.locale("pt-br")

  await mongo().then(async () => {
    try {
      const results = await BDStorage.findOne({
        gID: message.channel.guild.id,
        _id: user.id,
      });
      if (!results) {
        await message.channel.send("Não achei registros na minha lista.. 🧐");
        return;
      }
      const checkEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setDescription(
          `<@!${user.id}> faz aniversário em **${moment(
            new Date(results.bdate)
          ).format("D [de] MMMM")}**`
        );

      message.channel.send(checkEmbed);
    } catch (err) {
      console.error(`X|>|${err} at chekcBirthday.js`);
    }
  });
  return;
};
