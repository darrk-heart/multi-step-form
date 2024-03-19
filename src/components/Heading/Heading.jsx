import React from "react";
import styles from "./Heading.module.css";
import wallpaper from "../../assets/bg-sidebar-desktop.svg";

function Heading(props) {
  const {
    color1,
    bg1,
    border1,
    color2,
    bg2,
    border2,
    color3,
    bg3,
    border3,
    color4,
    bg4,
    border4,
  } = props;

  return (
    <div className={styles.background}>
      <img src={wallpaper} alt="background side bar" />
      <div className={styles.texts}>
        <span
          style={{ borderColor: border1, backgroundColor: bg1, color: color1 }}
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
        <span
          style={{ borderColor: border2, backgroundColor: bg2, color: color2 }}
          className={styles.texts_number}
        >
          2
        </span>
        <div>
          <span className={styles.step}>STEP 2</span>
          <span className={styles.title}>SELECT PLAN</span>
        </div>
      </div>
      <div className={styles.texts}>
        <span
          style={{ borderColor: border3, backgroundColor: bg3, color: color3 }}
          className={styles.texts_number}
        >
          3
        </span>
        <div>
          <span className={styles.step}>STEP 3</span>
          <span className={styles.title}>ADD-ONS</span>
        </div>
      </div>
      <div className={styles.texts}>
        <span
          style={{ borderColor: border4, backgroundColor: bg4, color: color4 }}
          className={styles.texts_number}
        >
          1
        </span>
        <div>
          <span className={styles.step}>STEP 4</span>
          <span className={styles.title}>SUMMARY</span>
        </div>
      </div>
    </div>
  );
}

export default Heading;
