import React from "react";
import styles from "./Heading.module.css";
import wallpaper from "../../assets/bg-sidebar-desktop.svg";

function Heading() {
  return (
    <div className={styles.background}>
      <img src={wallpaper} alt="background side bar" />
      <div className={styles.text}>textss</div>
    </div>
  );
}

export default Heading;
