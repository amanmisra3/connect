import { Server } from "socket.io";

const SocketHandler = (req: any, res: any) => {
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    socket.emit("msgFromServer", "Hi! I am server");

    socket.on("sendMessage", (inputMsg) => {
      console.log(inputMsg, 'inputMsg socket.ts');

      io.emit("message", inputMsg);
    });
  });
  res.end();
};

export default SocketHandler;
