const { Socket } = require("net");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const END = "END";

const handleError = (err) => {
  console.error(err.message);
  process.exit(1);
};

const handleData = (data) => {
  console.log(data);
};

const handleDisconnect = () => {
  console.log("Disconnected");
  process.exit(0);
};

const handleUsernameInput = (socket, enteredUsername) => {
  const username = enteredUsername;
  socket.write(username);
  console.log(`Type any message to send it, type ${END} to finish`);
};

const handleLineInput = (socket, message) => {
  socket.write(message);
  if (message.trim() === END) {
    socket.end();
  }
};

const connect = (host, port) => {
  console.log(`Connecting to ${host}:${port}`);

  const socket = new Socket();

  socket.connect({ host, port }, () => {
    console.log("Connected");

    readline.question("Choose your username: ", (enteredUsername) => {
      handleUsernameInput(socket, enteredUsername);
    });

    readline.on("line", (message) => {
      handleLineInput(socket, message);
    });

    socket.on("data", handleData);
  });

  socket.on("error", handleError);

  socket.on("close", handleDisconnect);
};

const main = () => {
  if (process.argv.length !== 4) {
    handleError(`Usage: node ${__filename} host port`);
  }

  const [, , host, port] = process.argv;
  if (isNaN(port)) {
    handleError(`Invalid port ${port}`);
  }

  connect(host, Number(port));
};

if (require.main === module) {
  main();
}
