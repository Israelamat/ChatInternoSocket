const { Socket } = require("net");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

const socket = new Socket();

socket.connect(8000, "::1", () => {
    console.log("Connected to server");
});

readline.on("line", (line) => {
    socket.write(line);
});

socket.on("data", (data) => {
    console.log(`Received data from server: ${data}`);
});

socket.on("close", () => {
    console.log("Connection closed");
});

socket.on("error", (err) => {
    console.error(`Error: ${err.message}`);
});
