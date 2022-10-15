import React, { useEffect, useState } from "react";
import ChatDisplay from "../../components/HomePage/ChatMessagesDisplay/ChatDisplay";
import SendMessage from "../../components/HomePage/SendMessage/SendMessage";
import styles from "./homePage.module.scss";

const HomePage = () => {
  
  const [msgs, setMsgs] = useState(['Hi', 'How are you'])

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
          <SendMessage setMsgs={setMsgs} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
