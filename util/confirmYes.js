module.exports = (u, date) => {
const confirmYes = new Discord.MessageEmbed()
.setColor("#831fde")
.setTitle("Irei me lembrar!! 👌")
.setDescription(
  `**O aniversário de ${u.username}#${u.discriminator} será em ${date}!**`
);
}
