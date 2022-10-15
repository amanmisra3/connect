import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./sendMessage.module.scss";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import io from "socket.io-client";

let socket: any;

const SendMessage = (props: any) => {
  const [inputMsg, setInputMsg] = useState("");

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    socket = io();
    await fetch("/api/socket");

    socket.on("msgFromServer", (msg: string) => {
      console.log(msg, "msg");
    });

    socket.on("message", (msg: string) => {
      console.log(msg, "msg from io emit");
    });
  };

  const sendClicked = (e: any) => {
    e.preventDefault();
    console.log("clicked");
    console.log(inputMsg);
    socket.emit("sendMessage", inputMsg);
  };

  const onChangeHandler = (e: any) => {
    setInputMsg(e.target.value);
  };

  return (
    <div className={styles.msgDiv}>
      <form onSubmit={(e) => sendClicked(e)}>
        <input
          type="text"
          placeholder="Type your message"
          value={inputMsg}
          onChange={(e) => onChangeHandler(e)}
        />
        <button>
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
