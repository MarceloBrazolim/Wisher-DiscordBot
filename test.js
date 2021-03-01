const bd = new Date("7-25");
var now = new Date();

if (bd.getMonth() === now.getMonth() && bd.getDate() === now.getDate()) {
  console.log("true");
} else {
  console.log("false");
}

console.log(bd.getMonth());
