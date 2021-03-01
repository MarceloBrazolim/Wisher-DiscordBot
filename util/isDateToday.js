module.exports = (date) => {
  const bd = new Date(date);
  var now = new Date();

  if (bd.getMonth() === now.getMonth() && bd.getDate() === now.getDate()) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};
