import React from "react";
import styles from "./chatDisplay.module.scss";
import OtherProfile from "./OtherProfile";

function ChatDisplay(props: any) {
  return (
    <div className={styles.chatDiv}>
      <OtherProfile />

      <div>
        {props.msgs &&
          props.msgs.map((item: any, index: number) => (
            <p key={index}>{item}</p>
          ))}
      </div>
    </div>
  );
}

export default ChatDisplay;
