module.exports = async (message) => {
  if (message.channel.nsfw == true) {
    return true;
  } else return false;
};
