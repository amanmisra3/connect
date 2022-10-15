import Image from "next/image";
import React from "react";
import styles from "./chatDisplay.module.scss";

function OtherProfile() {
  return (
    <div className={styles.otherProfile}>
      <Image
        src="/images/bearded-men.jpg"
        alt="dp"
        layout="intrinsic"
        width={50}
        height={50}
      />
      <h4>Name</h4>
    </div>
  );
}

export default OtherProfile;
