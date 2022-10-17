import React, { useEffect, useState } from "react";
import ChatDisplay from "components/HomePage/ChatMessagesDisplay/ChatDisplay";
import SendMessage from "components/HomePage/SendMessage/SendMessage";
import styles from "./homePage.module.scss";
import axios from "axios";

const HomePage = () => {
  const [msgs, setMsgs] = useState();
  const [callAgain, setCallAgain] = useState();

  useEffect(() => {
    axios
      .get("api/chat")
      .then(function (response) {
        setMsgs(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [callAgain]);

  console.log(msgs);
  console.log(callAgain, 'callAgain');

  return (
    <div className={styles.homeContainer}>
      <div className={styles.full}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.leftTab}>Groups and Chats with Profile</div>
        <div className={styles.rightTab}>
          <ChatDisplay msgs={msgs} />
          <SendMessage setCallAgain={setCallAgain} callAgain={callAgain} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
