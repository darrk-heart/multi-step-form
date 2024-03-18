import React from "react";
import styles from "./Heading.module.css";
import wallpaper from "../../assets/bg-sidebar-desktop.svg";

function Heading({ color, bg, border }) {
  return (
    <div className={styles.background}>
      <img src={wallpaper} alt="background side bar" />
      <div className={styles.texts}>
        <span
          style={{ borderColor: border, backgroundColor: bg, color: color }}
          className={styles.texts_number}
        >
          1
        </span>
        <div>
          <span className={styles.step}>STEP 1</span>
          <span className={styles.title}>YOUR INFO</span>
        </div>
      </div>
      <div className={styles.texts}>
        <span className={styles.texts_number}>2</span>
        <div>
          <span className={styles.step}>STEP 2</span>
          <span className={styles.title}>SELECT PLAN</span>
        </div>
      </div>
      <div className={styles.texts}>
        <span className={styles.texts_number}>3</span>
        <div>
          <span className={styles.step}>STEP 3</span>
          <span className={styles.title}>ADD-ONS</span>
        </div>
      </div>
      <div className={styles.texts}>
        <span className={styles.texts_number}>4</span>
        <div>
          <span className={styles.step}>STEP 4</span>
          <span className={styles.title}>SUMMARY</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;
