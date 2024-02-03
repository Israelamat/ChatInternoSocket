const { Server } = require("net");

const server = new Server();

server.on("connection", (socket) => {
    console.log(`New connection: ${socket.remoteAddress}:${socket.remotePort}`);

    socket.setEncoding("utf-8");

    socket.on("data", (data) => {
        console.log(`Received data from ${socket.remoteAddress}: ${data}`);
        socket.write(data); 
    });

    socket.on("close", () => {
        console.log(`Connection closed: ${socket.remoteAddress}:${socket.remotePort}`);
    });

    socket.on("error", (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

server.listen({ port: 8000, host: "::1" }, () => {
    console.log("Server listening on port 8000");
});
