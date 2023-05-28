const net = require("net");
const { IP, PORT } = require("./constants");

// establishes connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: OF");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

//EXPORT
module.exports = { connect };
