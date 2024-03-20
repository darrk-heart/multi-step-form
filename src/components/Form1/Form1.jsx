import React from "react";
import styles from "./Form1.module.css";
import Heading from "../Heading/Heading";

function Form1() {
  return (
    <>
      <div className={styles.background}>
        <Heading bg1="#bde3ff" color1="blue" border1="#bde3ff" />
        <div className={styles.form1bg}>
          <div className={styles.maintext}>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div className={styles.inputs}>
            <span>Name</span>
            <input placeholder="e.g. Prosper Paul" />
            <span>Email Address</span>
            <input placeholder="e.g. prosperpaul@gmail.com" />
            <span>Phone Number</span>
            <input placeholder="e.g. +1 234 567 890" />
          </div>
          <div className={styles.nextstep}>
            <span>Next Step</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form1;
