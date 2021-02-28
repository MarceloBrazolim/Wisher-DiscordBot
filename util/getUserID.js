module.exports = async (message) => {
  const user = message.mentions.users.first();
  if (!user) {
    console.log("x|>|Err: No mention");
    message.channel.send("Você tem que mencionar alguém, bobinho..");
    return;
  }
  console.log(`||>|Mentioned: { ${user.username}#${user.discriminator} }`);
  return user;
};
