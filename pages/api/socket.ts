import { Server } from "socket.io";
import chatMsgs from "utils/chatMsgs.json";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { appendFileSync } from "fs";

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
      console.log(inputMsg, "inputMsg socket.ts");

      const fileName = path.join(__dirname, "../../utils/chatMsgs.json");

      fs.readFile(fileName, (err, data) => {
        let json = JSON.parse(data.toString());
        console.log(json, "json");

        json.msgs.push({
          msg: inputMsg,
          myMsg: false,
        });

        fs.writeFile(fileName, JSON.stringify(json), function (err) {
          if (err) throw err;
          console.log("Saved!");
        });
      });

      io.emit("message", inputMsg);
    });
  });
  res.end();
};

export default SocketHandler;
