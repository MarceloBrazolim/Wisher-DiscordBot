module.exports = async (message, user) => {
  await message.author.send(user.displayAvatarURL({ dynamic: true }));
};
