const {
  MOVE_UP_KEY,
  MOVE_LEFT_KEY,
  MOVE_DOWN_KEY,
  MOVE_RIGHT_KEY,
  MESSAGES,
} = require("./constants");

let connection;

//Handle keyboard inputs from users
const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit(); // Exit the program if the 'Ctrl + C' key combination is pressed
  }

  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

//Setting up the Input
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

//EXPORT
module.exports = { setupInput };
