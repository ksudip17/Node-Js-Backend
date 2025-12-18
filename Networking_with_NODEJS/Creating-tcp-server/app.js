import net from 'node:net';

const server = net.createServer();

server.listen(8080, () => {
    console.log(`server is listening on port 8080`)
});

server.on('connection', (socket) => {
    socket.on("data", (chunk) => {
        console.log(chunk.toString());
    });
    console.log(socket.address());
    console.log(socket.remoteAddress);
    console.log(socket.remotePort);
    console.log('Client Connected');
});

