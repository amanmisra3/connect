import React from "react";
import styles from "./chatDisplay.module.scss";
import OtherProfile from "./OtherProfile";

function ChatDisplay(props: any) {

  return (
    <div className={styles.chatDiv}>
      <OtherProfile />

      <div className={styles.msgs}>
        {props.msgs.msgs &&
          props.msgs.msgs.map((item: any, index: number) => (
            <p className={`${item.myMsg ? styles.myMsg : styles.otherMsg}`} key={index}>{item.msg}</p>
          ))}
      </div>
    </div>
  );
}

export default ChatDisplay;
