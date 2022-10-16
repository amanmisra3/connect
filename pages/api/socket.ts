import { Server } from "socket.io";
import chatMsgs from "utils/chatMsgs.json";

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
      // chatMsgs.msgs.push({ msg: inputMsg, myMsg: false });
      console.log(inputMsg, "inputMsg socket.ts");
      // console.log(chatMsgs.msgs, "msgs updated");

      io.emit("message", inputMsg);
    });
  });
  res.end();
};

export default SocketHandler;
