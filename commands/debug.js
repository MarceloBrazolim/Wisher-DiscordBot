module.exports = async (message, args) => {
    console.log(args);
    await message.react("👍");
  };
  