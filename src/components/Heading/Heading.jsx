import React from "react";
import styles from "./Heading.module.css";
import wallpaper from "../../assets/bg-sidebar-desktop.svg";

function Heading() {
  return (
    <div className={styles.background}>
      <img src={wallpaper} alt="background side bar" />
      <div className={styles.text}>
        <div className={styles.texts}>
          <span>1</span>
          <div>
            <span>STEP 1</span>
            <span>YOUR INFO</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
