import React from "react";
import Heading from "../Heading/Heading";
import styles from "./Form4.module.css";

function Form4() {
  return (
    <>
      <div className={styles.background}>
        <Heading bg4="#bde3ff" color4="blue" border4="#bde3ff" />
        <div className={styles.form1bg}>
          <div className={styles.maintext}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div className={styles.main}></div>{" "}
          <div className={styles.beneath}>
            <span>Go Back</span>
            <h6 className={styles.nextstep}>Next Step</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form4;
